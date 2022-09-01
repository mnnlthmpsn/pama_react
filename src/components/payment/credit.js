import { ArrowLeftIcon } from "@heroicons/react/solid"
import { useState, useEffect } from "react"
import { exchangeRates } from "exchange-rates-api"
import axios from 'axios'
import card from '../../images/card.png'

export const CreditCard = ({ setShow, options }) => {

    const [selected, setSelected] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [exchangeRate, setExchangeRate] = useState(10)

    const calcFinal = () => {
        const temp = []
        let sum = 0

        for (const key in options) {
            const payload = { key, value: parseInt(options[key]) }
            sum += parseInt(options[key])
            options[key] > 0 && temp.push(payload)
        }

        setSelected(temp)
        setTotal(sum)
    }

    const give = async () => {
        const api_url = process.env.NODE_ENV === "production" ? "https://pama-api.herokuapp.com" : "http://localhost:1337"
        setIsLoading(true)
        const payload = {
            totalAmount: total * exchangeRate,
            description: "offering"
        }

        var config = {
            method: 'post',
            url: `${api_url}/api/payment`,
            headers: { 'Content-Type': 'application/json' },
            data: payload
        }

        const { data, status } = await axios(config)
        
        if (status === 200) {
            const response = JSON.parse(data.data)
            window.location.replace(response.data.checkoutUrl)
        } else {
            alert("An error occured")
        }

        setIsLoading(false)
    }

    const _getExchangeRate = async () => {
        console.log('this ran')
        const res = await exchangeRates().setApiBaseUrl('https://api.exchangerate.host').latest().base('USD').fetch();
        setExchangeRate(res.GHS)
    }

    useEffect(() => {
        calcFinal()
        _getExchangeRate()
    }, [options])

    return (
        <div className="pb-24 flex flex-col">
            <div className="flex justify-start pb-6">
                <ArrowLeftIcon className="h-4 w-auto text-gray-800" onClick={setShow(true)} />
            </div>

            <div className="pt-4 text-lg">
                <p className="">Confirmation</p>

                <div>
                {
                        selected.map(option => (
                            <div className="grid grid-cols-4 items-center pt-6" key={option.key}>
                                <div className="col-span-2">
                                    <p className='capitalize'>{option.key}</p>
                                </div>
                                <div className="col-span-1 flex space-x-4">
                                    <p>$</p>
                                    <p>{option.value.toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="grid grid-cols-4 items-center pt-6">
                        <div className="col-span-2">
                            <p>Total</p>
                        </div>
                        <div className="col-span-2 flex space-x-4">
                            <p>$</p>
                            <p className="text-green">{total.toFixed(2)}</p>
                        </div>
                    </div>
                    <p className="text-xs py-3 text-green">This is equivalent to (GHS {(total * exchangeRate).toFixed(2)})</p>
                    <div className="grid grid-cols-4 items-center pt-6">
                        <div className="col-span-1">
                            <p>Payment</p>
                        </div>
                        <div className="col-span-2 flex space-x-4">
                            <img src={card} className="h-10 w-auto" />
                        </div>
                        <div className="text-sm border rounded border-gray-400 flex items-center justify-center py-2 bg-gray-100" onClick={setShow(true)}>
                            Change
                        </div>
                    </div>
                    {/* <p className="text-sm mt-10 text-xs text-center">You'll be redirected to a trusted provider to continue payment</p> */}
                    <div className="pt-6">
                        <button className="btn-primary" onClick={give}>{isLoading ? "...loading" : "Give"}</button>
                </div>
                </div>
            </div>
        </div>
    )
}
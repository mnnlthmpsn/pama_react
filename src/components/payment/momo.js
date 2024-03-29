import axios from 'axios'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

export const Momo = ({ setShow, options }) => {

    const nw = [
        { key: "MTN", val: 'mtn' },
        { key: "Vodafone", val: 'vod' },
        { key: "AirtelTigo", val: 'airtel_tigo' },
    ]

    const [selected, setSelected] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [description, setDescription] = useState('')
    const [total, setTotal] = useState(0)

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
        const api_url = process.env.NODE_ENV === "production" ? "https://cogairadio.com/cama-api" : "http://localhost:1337/api"
        setIsLoading(true)
        const payload = {
            totalAmount: total,
            description: "offering"
        }

        const config = {
            method: 'post',
            url: `${api_url}/payment/submit`,
            headers: { 'Content-Type': 'application/json' },
            data: payload
        }

        const { data } = await axios(config)

        if (data.status === "Success") {
            window.location.replace(data.data.checkoutUrl)
        } else {
            alert(data["message"])
        }

        setIsLoading(false)
    }

    useEffect(() => {
        calcFinal()
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
                                <div className="col-span-2 flex space-x-4">
                                    <p>GHS</p>
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
                            <p>GHS</p>
                            <p className="text-green">{total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                {/* <p className='py-4 font-bold text-lg'>Details</p>
                <div className="pt-2">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="pt-8">
                    <label htmlFor="">Phone</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="pt-8">
                    <Dropdown label="Network" options={nw} />
                </div> */}
                <div className="pt-6">
                    <button className="btn-primary" onClick={give} disabled={isLoading}>{isLoading ? "...loading" : "Give"}</button>
                </div>
            </div>
        </div>
    )
}
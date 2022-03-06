import { Fragment } from "react"
import { Button } from '../components'
import card from '../../images/card.png'
import momo from '../../images/momo.png'

const Step3 = ({ paymentType, makePayment }) => {
    return (
        <Fragment>
            {
                paymentType === 'momo'
                    ? <Momo makePayment={makePayment} />
                    : <Card makePayment={makePayment} />
            }
        </Fragment>
    )
}

export default Step3


const Momo = ({ makePayment }) => {
    return (
        <Fragment>
            <div className="flex justify-center">
                <img src={momo} className="h-28 w-auto" />
            </div>

            <form className="grid grid-cols-2 gap-4" onSubmit={makePayment}>
                <div className="space-y-2 col-span-2">
                    <label>Phone</label>
                    <div className="flex items-center">
                        <input type='tel' className="outline-none bg-transparent border w-full py-3 pl-12 pr-4" placeholder="0244 000 000" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-gray-500 pl-3 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-2 flex flex-col col-span-2">
                    <label>Network</label>
                    <select className="bg-transparent border py-3 px-4 outline-none">
                        <option value='mtn'>MTN</option>
                        <option value='vod'>Vodafone</option>
                        <option value='air'>AirtelTigo</option>
                    </select>
                </div>

                <div className="space-y-2 col-span-2">
                    <label>Email</label>
                    <div className="flex items-center">
                        <input type='email' className="outline-none bg-transparent border w-full py-3 pl-12 pr-4" placeholder="sam@pama.com" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-gray-500 pl-3 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                <div className="col-span-2">
                    <Button type='submit' />
                </div>
            </form>
        </Fragment>
    )
}

const Card = ({ makePayment }) => {

    return (
        <Fragment>
            <div className="flex justify-center">
                <img src={card} className="h-28 w-auto" />
            </div>
            <form className="grid grid-cols-2 gap-4" onSubmit={makePayment}>
                <div className="space-y-2 col-span-2">
                    <label>Card Number</label>
                    <div className="flex items-center">
                        <input type='text' className="outline-none bg-transparent border w-full py-3 pl-12 pr-4" placeholder="Credit Card Number" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-gray-500 pl-3 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-2">
                    <label>Expiry Date</label>
                    <div className="flex items-center">
                        <input type='month' className="outline-none bg-transparent border w-full py-3 pl-12 pr-4" placeholder="MM/YY" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-gray-500 pl-3 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-2">
                    <label>CVC/CVV </label>
                    <div className="flex items-center">
                        <input type='number' className="outline-none bg-transparent border w-full py-3 pl-12 pr-4" placeholder="528" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-gray-500 pl-3 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                <div className="col-span-2">
                    <Button type='submit' />
                </div>
            </form>
        </Fragment>
    )
}
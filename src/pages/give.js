import { useState } from 'react'
import { exchangeRates, currencies } from "exchange-rates-api"


import momo from '../images/momo.png'
import card from '../images/card.png'
import paypal from '../images/paypal.png'

import { Momo } from '../components/payment/momo'
import { CreditCard } from '../components/payment/credit'
import { Paypal } from '../components/payment/paypal'
import { Dropdown } from '../components/dropdown'

const Give = () => {

    const getRates = async (curr) => {
        let rates = await exchangeRates().setApiBaseUrl('https://api.exchangerate.host').latest()
            .base(currencies.USD)
            .symbols([currencies.EUR, currencies.GBP, currencies.GHS])
            .fetch();
        console.log(rates)
    }

    const [active, setActive] = useState(0)
    const [show, setShow] = useState(true)

    const payMeds = [
        { title: 'Mobile Money', image: momo },
        { title: 'Debit/Credit Card', image: card },
        { title: 'Paypal', image: paypal },
    ]

    const currencies = [
        { key: 'Euro' },
        { key: 'USD' },
        { key: 'GHS' },
        { key: 'Candadian Dollar' },
        { key: 'Pounds' },
        { key: 'Rands' },
        { key: 'Naira' },
    ]

    const navigate = i => {
        setActive(i)
        setShow(true)

    }

    return (
        <div className='h-screen w-screen flex justify-center overflow-x-hidden'>
            <div className='lg:w-1/2 h-full'>
                <div className="relative bgDark h-32">
                    <div className="absolute w-full h-full z-10 flex items-center justify-center">
                        <p className='text-4xl lg:text-6xl font-bold text-white'>GIVE</p>
                    </div>
                    <div className="absolute bg-red-800 h-32 w-full opacity-40 flex items-center justify-center"></div>
                    <img src='https://images.unsplash.com/photo-1506755594592-349d12a7c52a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jvd2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className="h-32 w-full object-cover object-center" alt="" />
                </div>

                <div className='py-8 grid grid-cols-3 w-full px-2 lg:px-32 gap-2 lg:gap-4'>
                    {
                        payMeds.map((med, i) => (
                            <div onClick={() => navigate(i)}>
                                <Card key={i} index={i} active={active} crd={med} />
                            </div>
                        ))
                    }
                </div>

                {/* body */}
                <div className='px-6 lg:px-32 pb-10 text-gray-700'>

                    {show && active !== 2 && (
                        <div>
                            <div className="mb-5">
                                <Dropdown options={currencies} />
                            </div>
                            <form className="lg:border rounded lg:p-5 space-y-4">

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Tithe</div>
                                    <div className="border flex rounded col-span-2">
                                        <p className="px-5 py-2 border-r bg-gray-100">$</p>
                                        <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Offerings</div>
                                    <div className="border flex rounded col-span-2">
                                        <p className="px-5 py-2 border-r bg-gray-100">$</p>
                                        <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Donation</div>
                                    <div className="border flex rounded col-span-2">
                                        <p className="px-5 py-2 border-r bg-gray-100">$</p>
                                        <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Seed</div>
                                    <div className="border flex rounded col-span-2">
                                        <p className="px-5 py-2 border-r bg-gray-100">$</p>
                                        <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Total</div>
                                    <div className="items-center flex space-x-4 h-full rounded col-span-2">
                                        <p className="px-5 py-2 bg-gray-100">$</p>
                                        <p className='text-green-500'>5.00</p>
                                        {/* <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" /> */}
                                    </div>
                                </div>

                                <div className="pt-5 text-sm flex space-between items-center space-x-5">
                                    <p>Payment method:</p>
                                    {   active === 0 
                                        ? <img src={momo} alt="momo" className='h-10 w-auto'/> 
                                        : <img src={card} alt="card" className='h-10 w-auto'/> 
                                    }
                                </div>
                                <div className="pb-5">
                                    <button className="btn-primary" onClick={() => setShow(!show)}>Next</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {active === 0 && !show && <Momo setShow={() => setShow} />}
                    {active === 1 && !show && <CreditCard setShow={() => setShow} />}
                    {active === 2 && <Paypal />}
                </div>
            </div>
        </div>
    )
}

export default Give

const Card = ({ crd, index, active }) => {
    return (
        <div className={`cursor-pointer font-semibold relative border rounded-lg p-8 flex flex-col items-center duration-300 h-44 lg:h-56 group ${active === index ? 'border-red-500' : 'bg-gray-50 border-gray-400'}`}>
            <img src={crd.image} className='h-60 object-contain ' />
            <p className='text-center text-sm'>{crd.title}</p>
            <div className={
                `absolute mx-10 group-hover:opacity-100 duration-500 bg-red-400 bottom-5 ${active === index ? 'w-2/3 h-0.5' : 'h-0.4 w-14 opacity-0'}`
            }></div>
        </div>
    )
}
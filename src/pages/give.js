import { useState } from 'react'


import mtn from '../images/mtnn.png'
import all_nw from '../images/nw_all.png'
import vod from '../images/vod.png'
import tigo from '../images/tigo.png'
import air from '../images/air.png'

import card from '../images/card.png'
import visa from '../images/visa.png'
import master from '../images/master.png'
import paypal from '../images/paypal.png'
import give from '../images/give2.jpg'

import { Momo } from '../components/payment/momo'
import { CreditCard } from '../components/payment/credit'
import { Paypal } from '../components/payment/paypal'
import { useEffect } from 'react'

const Give = () => {

    const [active, setActive] = useState(0)
    const [show, setShow] = useState(true)
    const [curr, setCurr] = useState('GHS')
    const [options, setOptions] = useState({ tithe: 0, offering: 0, donation: 0, seed: 0 })
    const [total, setTotal] = useState(0)

    const payMeds = [
        { title: 'Mobile Money', image: all_nw },
        { title: 'Debit/Credit Card', image: card },
        { title: 'Paypal', image: paypal },
    ]

    const next = e => {
        e.preventDefault()
        total > 0 && setShow(!show)
    }

    const navigate = i => {
        setActive(i)
        setShow(true)

        i === 0 ? setCurr('GHS') : setCurr('$')
    }

    const calcTotal = () => {
        let sum = 0;

        for (const key in options) {
            sum += parseInt(options[key])
        }

        setTotal(sum)
    }

    useEffect(() => {
        calcTotal()
    }, [options])

    return (
        <div className='h-screen w-screen flex justify-center overflow-x-hidden'>
            <div className='lg:w-1/2 h-full'>
                <div className="relative bgDark h-32">
                    <div className="absolute w-full h-full z-10 flex items-center justify-center">
                    </div>
                    <img src={give} className="h-32 w-full object-cover object-center" alt="" />
                </div>

                <div className='py-8 grid grid-cols-3 w-full px-2 lg:px-32 gap-2 lg:gap-4'>
                    {
                        payMeds.map((med, i) => (
                            <div onClick={() => navigate(i)} key={i}>
                                <Card key={i} index={i} active={active} crd={med} />
                            </div>
                        ))
                    }
                </div>

                {/* body */}
                <div className='px-6 lg:px-32 pb-10 text-gray-700'>

                    {show && active !== 2 && (
                        <div>

                            {active === 0 && <p className='font-semibold'>Donation Amount</p>}
                            {active === 1 && <p className='pb-2'>Your details are safe with us. Checkout securely with our online hosted checkout</p>}

                            <div className="mb-5">
                                {/* {active > 0 && <Dropdown options={foreign_currencies} />} */}
                            </div>
                            <form className="lg:border rounded lg:p-5 space-y-4">

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Tithe</div>
                                    <div className="border flex rounded col-span-2">
                                        <p className="px-3 py-3 bg-gray-100 text-xs border-r">{curr}</p>
                                        <input type="number" min="0" value={options.tithe} onChange={e => setOptions({...options, tithe: e.target.value})} className="outline-none w-full bg-gray-50 text-sm p-2" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Offerings</div>
                                    <div className="border flex rounded col-span-2">
                                        <p className="px-3 py-3 bg-gray-100 text-xs border-r">{curr}</p>
                                        <input type="number" min="0" value={options.offering} onChange={e => setOptions({...options, offering: e.target.value})} className="outline-none w-full bg-gray-50 text-sm p-2" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Firstfruit</div>
                                    <div className="border flex rounded col-span-2">
                                        <p className="px-3 py-3 bg-gray-100 text-xs border-r">{curr}</p>
                                        <input type="number" min="0" value={options.donation} onChange={e => setOptions({...options, donation: e.target.value})} className="outline-none w-full bg-gray-50 text-sm p-2" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 items-center">
                                    <div className="col-span-1">Seed</div>
                                    <div className="border flex rounded col-span-2">
                                        <p className="px-3 py-3 bg-gray-100 text-xs border-r">{curr}</p>
                                        <input type="number" min="0" value={options.seed} onChange={e => setOptions({...options, seed: e.target.value})} className="outline-none w-full bg-gray-50 text-sm p-2" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 items-center pb-8">
                                    <div className="col-span-1">Total</div>
                                    <div className="items-center flex space-x-4 h-full rounded col-span-2">
                                        <p className="px-3 py-3 bg-gray-100 rounded-l border text-xs">{curr}</p>
                                        <p className='text-green-500'>{total.toFixed(2)}</p>
                                        {/* <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" /> */}
                                    </div>
                                </div>


                                <div className="py-8 flex space-between border-t items-center space-x-5">
                                    <p className='tex-2xl'>Payment method</p>
                                    {active === 0
                                        ? <div className='flex space-x-1'>
                                            <img src={mtn} alt="momo" className='h-6 w-auto' />
                                            <img src={vod} alt="momo" className='h-6 w-auto' />
                                            <img src={air} alt="momo" className='h-6 w-auto' />
                                            <img src={tigo} alt="momo" className='h-6 w-auto' />
                                        </div>
                                        : <div className="flex space-x-1">
                                            <img src={visa} alt="card" className='h-10 w-auto' />
                                            <img src={master} alt="card" className='h-10 w-auto' />
                                        </div>
                                    }
                                </div>

                                <div className="pb-5">
                                    <button className="btn-primary tracking-widest font-semibold uppercase" onClick={next}>Next</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {active === 0 && !show && <Momo setShow={() => setShow} options={options} />}
                    {active === 1 && !show && <CreditCard setShow={() => setShow} options={options} />}
                    {active === 2 && <Paypal />}
                </div>
            </div>
        </div>
    )
}

export default Give

const Card = ({ crd, index, active }) => {
    return (
        <div className={`cursor-pointer font-semibold relative border rounded-lg p-8 flex flex-col items-center duration-300 h-44 lg:h-56 group ${active === index ? 'border-red-500' : 'border-gray-400'}`}>
            <img src={crd.image} className='h-60 object-contain ' />
            <p className='text-center text-sm'>{crd.title}</p>
            <div className={
                `absolute mx-10 group-hover:opacity-100 duration-500 bg-red-400 bottom-5 ${active === index ? 'w-2/3 h-0.5' : 'h-0.4 w-14 opacity-0'}`
            }></div>
        </div>
    )
}
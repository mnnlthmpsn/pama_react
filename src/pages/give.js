import { useState } from 'react'

import momo from '../images/momo.png'
import card from '../images/card.png'
import paypal from '../images/paypal.png'

import { Momo } from '../components/payment/momo'
import { CreditCard } from '../components/payment/credit'
import { Paypal } from '../components/payment/paypal'

const Give = () => {

    const [active, setActive] = useState(0)

    const payMeds = [
        { title: 'MOMO', image: momo },
        { title: 'Debit/Credit Card', image: card },
        { title: 'Paypal', image: paypal },
    ]

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

                <div className='py-8 grid grid-cols-3 w-full px-2 lg:px-32 gap-1 lg:gap-4'>
                    {
                        payMeds.map((med, i) => (
                            <div onClick={() => setActive(i)}>
                                <Card key={i} index={i} active={active} crd={med}/>
                            </div>
                        ))
                    }
                </div>

                {/* body */}
                <div className='px-6 lg:px-32'>
                { active === 0 && <Momo /> }
                { active === 1 && <CreditCard /> }
                { active === 2 && <Paypal /> }
                </div>
            </div>
        </div>
    )
}

export default Give

const Card = ({ crd, index, active }) => {
    return (
        <div className={`cursor-pointer relative border rounded-lg p-8 flex flex-col items-center duration-300 h-44 lg:h-56 group ${active === index ? 'border-red-500' : 'bg-gray-100'}`}>
            <img src={crd.image} className='py-2 lg:pb-3' />
            <p className='text-center font-semibold text-sm'>{crd.title}</p>
            <div className={
                `absolute mx-10 group-hover:opacity-100 duration-500 bg-red-400 bottom-5 ${active === index ? 'w-2/3 h-0.5' : 'h-0.4 w-14 opacity-0'}`
            }></div>
        </div>
    )
}
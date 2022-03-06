import { useState } from 'react'
import { Step1, Step2, Step3 } from '../components/giveComponents'

const Give = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [paymentType, setPaymentType] = useState('momo')

    const makePayment = e => {
        e.preventDefault()
        alert('making payment')
    }

    const titles = {
        '1': 'Choose Amount',
        '2': 'Information',
        '3': 'Payment'
    }

    const payment_meds = [
        {
            med: 'momo', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        },
        {
            med: 'card', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        },
    ]

    const classes = {
        active: 'p-1 rounded-full border border-white bg-white cursor-pointer',
        inactive: 'p-1 rounded-full border cursor-pointer'
    }

    return (
        <div className="container h-auto w-screen md:w-1/3 pt-3 flex flex-col items-center justify-center">

            <div className='py-5 flex flex-col items-center space-y-5'>
                <p className='font-bold text-gray-600'>GIVE YOUR DONATIONS</p>
                <p className='text-center text-gray-600'>To give your Offering/Donation, simply fill in the details below
                    You can checkout with Mobile Money or Card Payment
                </p>
            </div>

            <div className={`h-auto flex flex-col px-10 primaryColor rounded-t-lg w-full ${currentStep === 3 ? 'pt-10' : 'py-10'}`}>
                <div className='flex h-full justify-between items-center'>
                    <div className='flex items-center space-x-2'>

                        {/* back icon if step is 2 or 3 */}
                        {
                            currentStep === 1 ? null : <svg onClick={() => setCurrentStep(currentStep - 1)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        }

                        <p className='select-none'>{titles[currentStep.toString()]}</p>
                    </div>

                    {/* controls/dot */}
                    <div className='flex items-center space-x-2'>
                        <div className={currentStep === 1 ? classes.active : classes.inactive} onClick={() => setCurrentStep(1)}></div>
                        <div className={currentStep === 2 ? classes.active : classes.inactive} onClick={() => setCurrentStep(2)}></div>
                        <div className={currentStep === 3 ? classes.active : classes.inactive} onClick={() => setCurrentStep(3)}></div>
                    </div>

                    {/* forward icon if step is 1 or 2 */}
                    {
                        currentStep === 3 ? null : <svg onClick={() => setCurrentStep(currentStep + 1)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    }
                </div>

                <div className={`grid place-items-center h-auto grid-cols-2 ${currentStep !== 3 && 'hidden'}`}>
                    {
                        payment_meds.map(med => (
                            <div key={med.med} className={`${paymentType === med.med && 'border-b-2'} pt-10 text-xs flex flex-col items-center font-bold space-y-1 border-white w-full text-center cursor-pointer`} onClick={() => setPaymentType(med.med)}>
                                {med.icon}
                                <p>{med.med.toLocaleUpperCase()}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='h-auto py-10 px-5 w-full border'>
                {currentStep === 1 && (<Step1 setCurrentStep={setCurrentStep}/>)}
                {currentStep === 2 && (<Step2 setCurrentStep={setCurrentStep} />)}
                {currentStep === 3 && (<Step3 paymentType={paymentType} makePayment={ makePayment } />)}
            </div>

            <div className='py-5 space-y-5'>
                <p>
                    What a blessing to hear from you and I'm thankful for your gift planted to God through this ministry
                </p>

                <p>We're promised in God's word that when we sow unto Him in faith, we can believe for a multiplied harvest
                    of blessing on our seed (Luke 6:38)
                </p>

                <p>
                    God is faithful... so be expecting miracles
                </p>

                <p>If you have any questions about your giving, please contact us at
                    <a className='text-blue-500' href='mailto:chrisasantemensah@gmail.com'> chrisasantemensah@gmail.com</a> or 
                    <a className='text-blue-500' href='tel:233244386019'> +233 (0) 244 386 019</a>
                </p>
            </div>
        </div>
    )
}

export default Give
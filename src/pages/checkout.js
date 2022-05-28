import { ChevronLeftIcon } from "@heroicons/react/solid"
import { useNavigate } from "react-router-dom"
import { Button } from '../components/components'

const Checkout = () => {

    const router = useNavigate()

    return (
        <div className="flex flex-col px-8 pt-8 overflow-x-hidden">
            <div className="flex justify-start" onClick={() => router(-1)}>
                <ChevronLeftIcon className="h-10 mb-4 border rounded-full p-2" />
            </div>
            <p className="text-2xl pb-8">Checkout</p>
            <p className="text-xl font-light pb-6">Platinum Partner</p>

            {/* date picker */}
            <div className="flex flex-col space-y-2 pb-3 font-light">
                <label htmlFor="date_picker">Start Date</label>
                <input type="date" className="px-3 py-2 border-2 border" />
            </div>

            <div className="flex items-center justify-between font-light">
                <p>Duration</p>
                <p>Until Cancelled</p>
            </div>

            <div className="flex py-4 justify-between">
                <p className="text-2xl">Total</p>
                <div className="flex flex-col items-end">
                    <p className="text-3xl">$100</p>
                    <p>Every month</p>
                </div>
            </div>

            <p className="py-5 font-light border-b">You will be charged monthly until canceled</p>

            <div className="pt-8 space-y-5">
                <p className="text-2xl">1. Sign up</p>
                <p className="font-light">
                    To purchase this plan and use its benefits in the future, log in to your account or sign up
                </p>
            </div>

            <div className="flex flex-col py-8 border-b space-y-2">
                <Button label='Sign Up' />
                <Button label='Login' isSecondary={true} />
            </div>

            <div className="pt-8 space-y-5">
                <p className="text-2xl">2. Payment</p>
            </div>
        </div>
    )
}

export default Checkout
import { ChevronLeftIcon, EyeIcon } from "@heroicons/react/solid"
import { useLocation, useNavigate } from "react-router-dom"
import FlatPickr from 'react-flatpickr'
import { useMemo, useState } from "react"
import countryList from "react-select-country-list"

const Checkout = () => {

    const router = useNavigate()
    const { state } = useLocation()
    const [date, setDate] = useState(() => new Date())

    return (
        <div className="flex flex-col pt-8 overflow-x-hidden">
            <div className="flex justify-start" onClick={() => router(-1)}>
                <ChevronLeftIcon className="h-10 mb-4 border rounded-full p-2" />
            </div>
            <p className="text-xl font-bold shadow-lg mb-12 border-t p-8">To Partner with Chris Asante Ministries - please fill out the form below and sow
                your seed to Activate your Covenant Partnership</p>

            <p className="text-xl uppercase py-6 text-center font-bold">Account Information</p>


            <div className="shadow-xl border-t pt-5">
                <p className="text-xl pb-6 px-8 font-bold">{state?.item.title}</p>

                {/* date picker */}
                <div className="flex flex-col space-y-2 pb-3 px-8 font-light">
                    <label htmlFor="date_picker">Start Date</label>
                    {/* <input type="date" className="px-3 py-2 border-2 border" /> */}
                    <FlatPickr
                        className="px-3 py-2 outline-none border w-full bg-white"
                        value={date}
                        onChange={([date]) => setDate(date)}
                        disabled
                    />
                </div>

                <div className="flex items-center justify-between px-8 font-light">
                    <p>Duration</p>
                    <p>Until Cancelled</p>
                </div>

                <div className="flex py-4 px-8 justify-between">
                    <p className="text-2xl text-green-500">Total</p>
                    <div className="flex flex-col items-end">
                        <p className="text-3xl text-green-500">$ {state?.item.price}</p>
                        <p className="uppercase">Every month</p>
                    </div>
                </div>

                <p className="py-5 font-light border-b px-8">You will be charged monthly until canceled</p>

                <div className="p-8 space-y-5 shadow-lg">
                    {/* <p className="text-xl">Select Payment Method</p>
                    <div className="flex font-light flex-col space-y-2">
                        <label className="flex space-x-3 items-center">
                            <input type="radio" name="payment_method" />
                            <p>Debit/Credit Card</p>
                        </label>

                        <label className="flex space-x-3 items-center">
                            <input type="radio" name="payment_method" />
                            <p>Mobile Money</p>
                        </label>

                        <label className="flex space-x-3 items-center">
                            <input type="radio" name="payment_method" />
                            <p>Paypal</p>
                        </label>
                    </div> */}
                </div>
            </div>

            <div className="p-8 border-t-2 shadow-xl space-y-5 border mt-12">
                <p className="text-xl uppercase font-bold">Your Information</p>
                <form className="space-y-8">
                    {/* title */}
                    <div className="flex flex-col space-2 items-start">
                        {/* <label htmlFor="title">First name</label> */}
                        <input type="text" name="title" id="title" className="form-control2" placeholder="Title *" />
                    </div>

                    {/* first name */}
                    <div className="flex flex-col space-2 items-start">
                        {/* <label htmlFor="title">First name</label> */}
                        <input type="text" name="first_name" id="first_name" className="form-control2" placeholder="First Name *" />
                    </div>

                    {/* last name */}
                    <div className="flex flex-col space-2 items-start">
                        {/* <label htmlFor="title">Last name</label> */}
                        <input type="text" name="first_name" id="last_name" className="form-control2" placeholder="Last Name *" />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col space-2 items-start">
                        {/* <label htmlFor="title">Phone</label> */}
                        <input type="tel" name="phone" id="phone" className="form-control2" placeholder="Phone Number" />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-2 items-start">
                        {/* <label htmlFor="title">Phone</label> */}
                        <input type="tel" name="phone" id="phone" className="form-control2" placeholder="Country *" />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-2 items-start">
                        {/* <label htmlFor="title">Email</label> */}
                        <input type="text" name="email" id="email" className="form-control2" placeholder="Email *" />
                    </div>

                    {/* Password */}
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex flex-col space-2 items-start w-full">
                            {/* <label htmlFor="title">Email</label> */}
                            <input type="password" name="email" id="email" className="form-control2" placeholder="Password *" />
                        </div>
                        <EyeIcon className="h-6 text-gray-500"/>
                    </div>

                    {/* Cofirm Password */}
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex flex-col space-2 items-start w-full">
                            {/* <label htmlFor="title">Email</label> */}
                            <input type="text" name="email" id="email" className="form-control2" placeholder="Confirm Password *" />
                        </div>
                        <EyeIcon className="h-6 text-gray-500"/>
                    </div>

                    <div className="pb-4">
                        <button className="py-4 rounded-md outline-none px-20 primaryColor w-full tracking-widest uppercase font-bold mt-4">Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout
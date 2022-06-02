import { ChevronLeftIcon } from "@heroicons/react/solid"
import { useNavigate } from "react-router-dom"
import FlatPickr from 'react-flatpickr'
import { useMemo, useState } from "react"
import countryList from "react-select-country-list"

const Checkout = () => {

    const router = useNavigate()
    const [date, setDate] = useState(() => new Date())
    const [country, setCountry] = useState('')
    const options =  useMemo(() => countryList().getData(), [])

    const changeHandler = e => setCountry(e.target.value)

    return (
        <div className="flex flex-col px-8 pt-8 overflow-x-hidden">
            <div className="flex justify-start" onClick={() => router(-1)}>
                <ChevronLeftIcon className="h-10 mb-4 border rounded-full p-2" />
            </div>
            <p className="text-xl font-bold pb-8">To Partner with Chris Asante Ministries - please fill out the form below and sow
                your seed to Activate your Covenant Partnership</p>
            <p className="text-xl font-light pb-6">Platinum Partner</p>

            {/* date picker */}
            <div className="flex flex-col space-y-2 pb-3 font-light">
                <label htmlFor="date_picker">Start Date</label>
                {/* <input type="date" className="px-3 py-2 border-2 border" /> */}
                <FlatPickr
                    className="px-3 py-2 outline-none border w-full bg-white"
                    value={date}
                    onChange={([date]) => setDate(date)}
                />
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
                <p className="text-xl">Select Payment Method</p>
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
                </div>
            </div>

            <div className="pt-8 space-y-5">
                <p className="text-xl">Personal Info</p>
                <form className="space-y-8">
                    {/* title */}
                    <div className="flex flex-col space-2 items-start">
                        <label htmlFor="title">Title</label>
                        <select name="title" id="title" className="form-control2">
                            <option value="MR">MR</option>
                            <option value="MR">MRS</option>
                            <option value="MR">MISS</option>
                        </select>
                    </div>

                    {/* first name */}
                    <div className="flex flex-col space-2 items-start">
                            <label htmlFor="title">First name</label>
                            <input type="text" name="first_name" id="first_name" className="form-control2" placeholder="Emmanuel" />
                        </div>

                        {/* last name */}
                        <div className="flex flex-col space-2 items-start">
                            <label htmlFor="title">Last name</label>
                            <input type="text" name="first_name" id="last_name" className="form-control2" placeholder="Thompson" />
                        </div>

                    <div className="flex flex-col space-2 items-start">
                        <label htmlFor="title">Country</label>
                        <select name="title" id="title" className="form-control2" onChange={changeHandler}>
                            { options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>) }
                        </select>
                    </div>

                    <div className="flex flex-col space-2 items-start">
                        <label htmlFor="phone">Region</label>
                        <input type="tel" name="region" id="phone" className="form-control2" placeholder="Region" />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-2 items-start">
                        <label htmlFor="phone">Town</label>
                        <input type="tel" name="Town" id="phone" className="form-control2" placeholder="Town" />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-2 items-start">
                        <label htmlFor="title">Email</label>
                        <input type="text" name="email" id="email" className="form-control2" placeholder="Email" />
                    </div>

                    <div className="pb-4">
                        <button className="btn-primary">Activate Covenant</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout
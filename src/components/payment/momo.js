import { useEffect, useState } from "react"
import { ArrowLeftIcon } from '@heroicons/react/solid'

export const Momo = ({ setShow }) => {
    return (
        <div className="pb-24 flex flex-col">
            <div className="flex justify-start pb-2">
            <ArrowLeftIcon className="h-5 w-5 text-gray-800" onClick={setShow(true)} />
            </div>
            <div>
                <div className="pt-2">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="pt-8">
                    <label htmlFor="">Phone</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="pt-8">
                    <label htmlFor="">Choose Network</label>
                    <select htmlFor="" className="form-control">
                        <option value="MTN">MTN</option>
                        <option value="VOD">Vodafone</option>
                        <option value="AIR">Airtel</option>
                    </select>
                </div>
                <div className="pt-6">
                    <button className="text-sm py-3 outline-none px-20 primaryColor w-full">Give Now</button>
                </div>
            </div>
        </div>
    )
}
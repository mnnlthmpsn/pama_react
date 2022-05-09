import { useEffect, useState } from "react"
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { Dropdown } from "../dropdown"

export const Momo = ({ setShow }) => {

    const nw = [
        { key: "MTN", val: 'mtn' },
        { key: "Vodafone", val: 'vod' },
        { key: "AirtelTigo", val: 'airtel_tigo' },
    ]

    return (
        <div className="pb-24 flex flex-col">
            <div className="flex justify-start pb-6">
                <ArrowLeftIcon className="h-4 w-auto text-gray-800" onClick={setShow(true)} />
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
                    <Dropdown label="Network" options={nw} />
                </div>
                <div className="pt-6">
                    <button className="btn-primary">Give Now</button>
                </div>
            </div>
        </div>
    )
}
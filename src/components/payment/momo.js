import { exchangeRates, currencies } from "exchange-rates-api"
import { useEffect, useState } from "react"

export const Momo = () => {
    const getRates = async (curr) => {
        let rates = await exchangeRates().setApiBaseUrl('https://api.exchangerate.host').latest()
        .base(currencies.USD)
        .symbols([currencies.EUR, currencies.GBP, currencies.GHS])
        .fetch();
        console.log(rates)
    }

    return (
        <div className="pb-24">
            <p className="pb-6 text-sm">Please pay your tithes and offering with your Momo account</p>
            <select name="" className="w-full border rounded p-2 mb-6 outline-none" onChange={e => getRates(e.target.value)}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GHS">GHS</option>
            </select>
            <form className="lg:border rounded lg:p-5 space-y-4">
                
                <div className="grid grid-cols-4 items-center">
                    <div className="col-span-1">Tithe</div>
                    <div className="border flex rounded col-span-2">
                        <p className="px-3 py-1 border-r bg-gray-100">$</p>
                        <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" />
                    </div>
                </div>

                <div className="grid grid-cols-4 items-center">
                    <div className="col-span-1">Offerings</div>
                    <div className="border flex rounded col-span-2">
                        <p className="px-3 py-1 border-r bg-gray-100">$</p>
                        <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" />
                    </div>
                </div>

                <div className="grid grid-cols-4 items-center">
                    <div className="col-span-1">Donation</div>
                    <div className="border flex rounded col-span-2">
                        <p className="px-3 py-1 border-r bg-gray-100">$</p>
                        <input type="text" className="outline-none w-full bg-gray-50 text-sm p-2" />
                    </div>
                </div>

                <div>
                    <label htmlFor="name" className="text-sm">Full Name</label>
                    <input type="text" className="form-control" />
                </div>

                <div>
                    <label htmlFor="Network" className="text-sm">Network</label>
                    <select className="form-control">
                        <option value="" disabled defaultValue>-- Choose Network --</option>
                        <option value="MTN">MTN</option>    
                        <option value="VOD">Vodafone</option>    
                        <option value="AIR">AirtelTigo</option>    
                    </select>
                </div>

                <div className="pt-4">
                <button className="text-sm py-3 outline-none px-20 primaryColor w-full">Make Payment</button>
                </div>
            </form>
        </div>
    )
}
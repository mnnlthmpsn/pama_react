export const Momo = () => {
    return (
        <div className="pb-24">
            <p className="pb-6 text-sm">Please pay your tithes and offering with your Momo account</p>
            <form className="lg:border rounded lg:p-5 space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full Name</label>
                    <input type="text" className="form-control" />
                </div>

                <div>
                    <label htmlFor="name" className="text-sm">Tithe (GHS)</label>
                    <input type="number" min={5} className="form-control" />
                </div>

                <div>
                    <label htmlFor="name" className="text-sm">Offering (GHS)</label>
                    <input type="number" min={5} className="form-control" />
                </div>

                <div>
                    <label htmlFor="name" className="text-sm">Donation (GHS)</label>
                    <input type="number" min={5} className="form-control" />
                </div>

                <div>
                    <label htmlFor="Network" className="text-sm">Network</label>
                    <select className="form-control">
                        <option value="" disabled selected>-- Choose Network --</option>
                        <option value="MTN">MTN</option>    
                        <option value="VOD">Vodafone</option>    
                        <option value="AIR">AirtelTigo</option>    
                    </select>
                </div>

                <button className="text-sm py-3 outline-none px-20 primaryColor w-full">Make Payment</button>
            </form>
        </div>
    )
}
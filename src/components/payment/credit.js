export const CreditCard = () => {
    return (
        <div className="pb-24">
            <p className="pb-6 text-sm">Your payment details are safe with us. Pay your tithes and offering with your Credit/Debit card</p>
            <form className="lg:border rounded lg:p-5 space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Name on Card</label>
                    <input type="text" className="form-control uppercase" placeholder="Jane Doe"/>
                </div>

                <div className="grid grid-cols-2 gap-x-5">
                    <div>
                        <label htmlFor="name" className="text-sm">CVV</label>
                        <input type="number" minLength={3} className="form-control" placeholder="528" />
                    </div>

                    <div>
                        <label htmlFor="name" className="text-sm">Expiry Date</label>
                        <input type="date" className="form-control" placeholder="yyyy-mm-dd"/>
                    </div>
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

                <button className="text-sm py-3 outline-none px-20 primaryColor w-full">Make Payment</button>
            </form>
        </div>
    )
}
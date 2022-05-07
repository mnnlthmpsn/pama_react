import { ArrowLeftIcon } from "@heroicons/react/solid"
import card from '../../images/card.png'

export const CreditCard = ({ setShow }) => {
    return (
        <div className="pb-24 flex flex-col">
            <div className="flex justify-start pb-2">
                <ArrowLeftIcon className="h-5 w-5 text-gray-800" onClick={setShow(true)} />
            </div>

            <div className="pt-4 font-semibold text-lg">
                <p className="font-semibold">Confirmation</p>

                <div>
                    <div className="grid grid-cols-4 items-center pt-6">
                        <div className="col-span-2">
                            <p>Tithe</p>
                        </div>
                        <div className="col-span-2 flex space-x-4">
                            <p>$</p>
                            <p>5.00</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center pt-6">
                        <div className="col-span-2">
                            <p>Donation</p>
                        </div>
                        <div className="col-span-2 flex space-x-4">
                            <p>$</p>
                            <p>0.00</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center pt-6">
                        <div className="col-span-2">
                            <p>Total</p>
                        </div>
                        <div className="col-span-2 flex space-x-4">
                            <p>$</p>
                            <p className="text-green">5.00</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center pt-6">
                        <div className="col-span-1">
                            <p>Payment</p>
                        </div>
                        <div className="col-span-2 flex space-x-4">
                            <img src={card} />
                        </div>
                        <div className="text-sm border rounded border-gray-400 flex items-center justify-center py-2 bg-gray-100" onClick={setShow(true)}>
                            Change
                        </div>
                    </div>
                    <p className="text-sm font-base text-center">You'll be redirected to a trusted provider to continue payment</p>
                </div>
            </div>
        </div>
    )
}
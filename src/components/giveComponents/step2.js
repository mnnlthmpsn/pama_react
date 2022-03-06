import { Button } from "../components"

const Step2 = ({ setCurrentStep }) => {
    return (
        <form className="grid grid-cols-2 gap-x-2 gap-y-4" onSubmit={() => setCurrentStep(3)}>
            {/* Firstname */}
            <div className="space-y-2 w-full">
                <label>Firstname</label>
                <div className="flex items-center">
                    <input placeholder="Samuel" type='text' className="border py-3 pl-8 pr-4 bgColor w-full outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute text-gray-500 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>

            {/* lastname */}
            <div className="space-y-2">
                <label>Lastname</label>
                <div className="flex items-center">
                    <input placeholder="Owusu" type='text' className="border py-3 pl-8 pr-4 bgColor w-full outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute text-gray-500 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2 flex flex-col col-span-2">
                <label>Email</label>
                <div className="flex items-center">
                    <input placeholder="sam@pama.com" type='email' className="border py-3 pl-8 pr-4 bgColor w-full outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 absolute ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>

            {/* Phone */}
            <div className="space-y-2 flex flex-col col-span-2">
                <label>Phone</label>
                <div className="flex items-center">
                    <input type='tel' placeholder="0244 000 000" className="border py-3 pl-8 pr-4 bgColor w-full outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 absolute ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
            </div>

            <div className="col-span-2">
                <Button type='submit' />
            </div>
        </form>
    )
}

export default Step2
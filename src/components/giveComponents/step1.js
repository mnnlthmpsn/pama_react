import { Button } from '../components'

const Step1 = ({ setCurrentStep }) => {
    return (
        <form className='space-y-2' onSubmit={() => setCurrentStep(2)}>
            <div className="border space-x-8 flex p-4 items-center">
                <p className="absolute text-xs font-bold text-gray-500">GHS</p>
                <input type='number' placeholder='5.00' className="outline-none bgColor w-full" required />
            </div>
            <Button type='submit' />
        </form>
    )
}

export default Step1
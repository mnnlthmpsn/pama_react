import { useNavigate } from "react-router-dom"
import { ButtonSm } from "../components/button"

const Subscribe = () => {

    const plans = [
        { title: "Free", subtitle: "Sign Up Now", description: "Free level has some limited access" },
        { title: "Recurring Plan", subtitle: "only $1", description: "A recurring and monthly pament plan" },
        { title: "One Time Plan", subtitle: "only $10", description: "One time payment at a small fee" },
    ]

    return (
        <div className="h-screen w-screen pl-16 pr-10 my-10 space-y-8">
            <p className="py-2 border-b-4 border-red-500 px-1 text-2xl">SUBSCRIPTION PLAN</p>
            <div className="grid lg:grid-cols-3 h-full gap-x-5 gap-y-10">
                {
                    plans.map((plan, i) => <SubscriptionCard subscription={plan} />)
                }
            </div>
        </div>
    )
}

const SubscriptionCard = ({ subscription }) => {

    const router = useNavigate()
    const apply = () => {
        router('/apply')
    }

    return (
        <div className="h-[28rem] relative bgDark text-white flex justify-evenly flex-col space-y-6 px-1">
            <div className="flex flex-col space-y-5">
                <p className="text-center text-3xl px-2">{subscription.title}</p>
                <div class="">
                    <div className="absolute -left-12 border-4 bg-white w-full text-center text-3xl font-bold text-gray-500 rounded-l-full border-[#434A53] px-4 py-4">
                        {subscription.subtitle}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center space-y-6">
                <p className="px-6 py-5">{subscription.description}</p>
                <div className="flex w-2/3 justify-center">
                    <ButtonSm label='Subscribe' onClick={apply}/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
import { useNavigate } from "react-router-dom"
import { Benefits, StaffCard, ListItem, KCarousel, Footer } from "../components/components"

const Join = () => {

    const navigate = useNavigate()

    const apply = () => navigate('/apply')

    const staffList = [
        { name: 'Emmanuel Thompson', role: 'Sercretary', image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' }
    ]

    const benefits = [
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
    ]

    const items = [
        'HISTORY OF LEADERS AND MINISTRY\'S GROWTH',
        'MINISTRY VISION',
        'STATEMENT OF BELIEFS',
        'COPY OF MINISTRY LICENSE/ORDINATION CERTIFICATE',
        'LETTER OF RECOMMENDATION FROM A COLLEAGUE IN THE MINISTRY',
        'PHOTO OF MINISTRY LEADER',
        'ARTICLES OF INCORPORATION AND BYLAWS',
        'ANNUAL MEMBERSHIP FEE OF GHS 250.00'
    ]

    const goBack = () => navigate(-1)

    return (
        <div className="flex flex-col">
            <div className="w-full bg-gray-500 text-white h-auto px-8 py-16 flex flex-col items-center bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1543702404-38c2035462ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')]">
                <p className="pb-5 text-lg font-light ">Join the <span className="font-bold">Family</span></p>
                <button className="outline-none mb-24 font-semibold uppercase text-sm py-2 px-8 border" onClick={apply}>Become a Member</button>
                <div className="text-sm flex flex-col items-center">
                    <p>UNDERSTANDING <span className='font-bold'>GRACE</span></p>
                    <p>EMPOWERING <span className='font-bold'>CHANGE</span></p>
                </div>

                <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full absolute top-5 left-5" onClick={goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {/* benefits */}
            <div className="flex flex-col">
                <p className="py-8 text-center font-bold">It's a fellowship</p>

                {/* descrpition */}
                <div className="space-y-5 px-5">
                    <p>
                        PAMA is not a denomination. It is a fellowship. We are composed of many denominations, desiring
                        primarily to grow in covenant with one another. Therefore, each ministry participates under the
                        directions of God, with the goal of being a blessing to all families on the earth. <span className="font-bold">(Genesis 12:1-3)</span>
                    </p>

                    <p>There are no governing bodies to report to or fear. There are no investigations or disciplinary actions
                        to consider. PAMA is not interested in overseeing a church or outreach ministry. Each ministry must
                        stand before God on it's own. Our goal is to complement your assignment by making our expertise available
                        to you. We take a more active role only by request
                    </p>
                </div>

                <div className="my-8 h-72">
                    <KCarousel />
                </div>

                {/* Exlusive membership */}
                <div className="flex flex-col items-center pt-8 px-5 justify-center">
                    <p className="font-light text-sm">EXCLUSIVE MEMBERSHIP</p>
                    <p className="font-bold pb-5">When you join as a member</p>
                    <p className="text-center text-sm">Our goal is to complement your assignment by making our expertise available to you. We take a more active role only
                        by request. The requirements for joining PAMA are minimal.
                    </p>
                </div>

                <Benefits showBg={false} />
            </div>

            {/* why to joing */}
            <div className="primaryColor px-5 pt-8 flex flex-col items-center">
                <p className="font-light">WITH YOUR MEMBERSHIP</p>
                <p className="font-bold">You get extensive benefits</p>
                <p className="py-5 text-center">
                    The journey towards spiritual maturity in Christ can become long and lonely. As a member,
                    you are reminded in a variety of ways that God is your source of prosperity and divine love!
                </p>
                <div className='grid grid-cols-1 space-y-6 py-5'>
                    {
                        benefits.map(benefit => (
                            <div key={benefit.title} className='flex flex-col items-center justify-center'>
                                <img src={benefit.icon} className='py-2 h-20 w-auto' />
                                <p className='pb-4'>{benefit.title}</p>
                                <p className='text-center'>{benefit.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* members directory */}
            <div className="py-8 px-5">
                <div className="flex items-center pb-8 justify-between">
                    <hr className="h-1 rounded-lg bg-gray-500 w-16" />
                    <p className="text-sm">MEMBERS DIRECTORY</p>
                    <hr className="h-1 rounded-lg bg-gray-500 w-16" />
                </div>

                <p>At the center of of PAMA is our staff who considers it a privilege to carry out the
                    vision of Prophet Asante by serving the ministries and organizations that are connected to them.
                    The atmosphere in the office is one of genuine love and care, with the focus of maximizing visions
                </p>

                <div className="grid grid-cols-1 space-y-5 mt-8">
                    {
                        staffList.map(staff => <StaffCard key={staff.name} staff={staff} />)
                    }
                </div>
            </div>

            {/* become a member */}
            <div className="p-8 bg-gray-400 text-white flex space-y-6 flex-col items-center justify-center">
                <p className="font-bold">How to become a member</p>
                <p className="text-center">Joining PAMA is easy. Our goal is to serve you by helping to maximize the vision of your ministry.
                    Below is a list of requirements to join this dynamic organization
                </p>

                <hr className="h-1 bg-gray-700 w-24 rounded-lg" />

                {/* requirements */}
                <div>
                    <p className="text-center">Please ensure you have the below items ready before applying online</p>
                    <ul>
                        {items.map(item => <ListItem item={item} key={item} />)}
                    </ul>
                </div>

                {/* apply now */}
                <div>
                    <button className="text-sm py-3 px-8 primaryColor" onClick={apply}>APPLY NOW</button>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Join
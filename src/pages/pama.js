import { useNavigate } from 'react-router-dom'
import { MembersCard, Footer, Benefits } from '../components/components'
import pastor_and_wife from '../images/pw.png'

const PAMA = () => {

    const navigate = useNavigate()

    const members = [
        { image: '#', name: 'Emmanuel Thompson' }
    ]

    return (
        <div className="flex flex-col pt-10">
            <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-2xl">WELCOME TO</p>
                <p className="text-lg font-light">Prophet Asante Ministerial</p>
                <p className="text-lg font-light">Association</p>
                <div className="py-8">
                    <button className="text-sm py-3 outline-none px-20 primaryColor" onClick={() => navigate('/join')}>JOIN</button>
                </div>
            </div>

            {/* image */}
            <div className=''>
                <img src={pastor_and_wife} loading='lazy' />
                <div className='sticky w-full h-auto text-white flex flex-col items-center justify-center py-4 bg-black'>
                    <p>UNDERSTANDING <span className='font-bold'>GRACE</span></p>
                    <p>EMPOWERING <span className='font-bold'>CHANGE</span></p>
                </div>
            </div>

            {/* membership benefits */}
            {/* <Benefits showBg={true} /> */}

            {/* covenant letter */}
            <div className='flex flex-col items-center justify-center px-5 py-8 bg-gray-200'>
                {/* <p >COVENANT LETTER</p>
                <p className='pt-4'>This is the church's finest hour</p> */}
                {/* <p className='py-2 text-sm font-semibold lightText'>Dear Covenant Friend</p> */}
                <div className='flex flex-col space-y-6'>
                    <p>
                        The vision of this ministry is to use every channel available to bring hope to people all over
                        the world, to make a difference in the lives of those we touch with the transforming healing power of Christ
                    </p>
                    <p>
                        To reach the lost, encourage and equip believers and spread the good news of Jesus Christ is the purpose of
                        Chris Asante Ministries. Through your faithful and consistent support, you become an expression of Christ’s love for people.
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center px-5 py-8 bg-gray-200'>
                <p className='uppercase text-lg py-2 font-bold text-center'>WHY SHOULD I BECOME A PARTNER</p>

                <div className='flex flex-col space-y-6'>
                    <p>
                        Who ever receives a prophet in the name of a prophet will receive the reward of a prophet.
                        The Gospel is free to all, but it is very expensive to take it to the nations.
                        When you become a covenant partner with us , you share the blessings, the eternal rewards and
                        the fulfillment of what God is doing throughout the earth. Miracles happen for others and for you.
                        Because of your generosity, God’s favor and goodness become a part of your life and your whole household.
                    </p>

                    <p>
                        Your decision to make the commitment to partner with me, with your generous monthly ministry gift is a
                        covenant decision. God is a God of Covenants and Principles. Simply pray about it, and use one of
                        the options below to decide what kind of Partnership level you feel led of the Holy Spirit to do.
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center px-5 py-8 bg-gray-200'>
                <p className='uppercase text-lg py-2 font-bold text-center'>WHO CAN BECOME A PARTNER</p>

                <div className='flex flex-col space-y-6'>
                    <ul className='list-disc space-y-2 px-4'>
                        <li>Anyone who believes in our Lord Jesus Christ and His Kingdom</li>
                        <li>Anyone who believes in CAM and what it stands for can become a partner</li>
                        <li>You don’t have to be a Pastor, Prophet, evangelist or preacher</li>
                        <li>Our Partners range from ordinary members of the community, COGA and non- COGA members</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center px-5 py-8 bg-gray-200'>
                <p className='uppercase text-lg py-2 font-bold text-center'>WHAT MAKES YOU A PARTNER</p>

                <div className='flex flex-col space-y-6'>
                    <p>
                        Partners are individuals, and families, businesses and ministries that faithfully and periodically sow some
                        level of financial support and prayer into Chris Asante Ministries. Your Partner gift enables CAM to carry
                        out its global mission and positions you to receive the rewards for the work, the anointings of the ministry
                        and a grand harvest on your seed sown.
                    </p>
                </div>

                <div className="py-8">
                    <button className="text-sm py-3 outline-none px-20 primaryColor" onClick={() => navigate('/join')}>JOIN NOW</button>
                </div>
            </div>



            {/* board members */}
            {/* <div className='flex flex-col px-5 py-8'> */}
            {/* title */}
            {/* <div className='flex items-center justify-center pb-6'>
                    <hr className='w-16 h-1 rounded-lg bg-gray-600' />
                    <p className='px-4'>Board Members</p>
                    <hr className='w-16 h-1 rounded-lg bg-gray-600' />
                </div> */}

            {/* <p className='text-center text-sm font-semibold'>By touching hearts, proclaiming Christ and empowering through grace, we become one in
                    unity with Christ</p> */}

            {/* members card */}
            {/* <div className='grid grid-cols-1 py-8'>
                    {
                        members.map(member => (
                            <MembersCard image={member.image} name={member.name} />
                        ))
                    }
                </div> */}
            {/* </div> */}

            {/* <Footer /> */}
        </div>
    )
}

export default PAMA
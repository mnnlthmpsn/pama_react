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
            <Benefits showBg={true} />

            {/* covenant letter */}
            <div className='flex flex-col items-center justify-center px-5 py-8 bg-gray-200'>
                <p >COVENANT LETTER</p>
                <p className='pt-4'>This is the church's finest hour</p>
                <p className='py-2 text-sm font-semibold lightText'>Dear Covenant Friend</p>
                <div className='flex flex-col text-sm space-y-6'>
                    <p>I believe that this is the church's finest hour. Today is the day that the body of Christ has
                        longed to see God's power is being poured out. His spirit is moving. The vast fields of this world
                        are ripe for harvest. Our time to shine has come
                    </p>
                    <p>
                        The information on this platform contains what I believe to be a significant part of God's plan for
                        the last days. Prophet Asante Ministerial Association (PAMA) is a vision God birthed in my heart
                        more than 25 years ago. It came to me as a strong mandate in my spirit. I knew that when the time
                        was right, I was to proceed with all systems go. I am thrilled to announce that THE TIME HAS COME!
                    </p>
                    <p>
                        To put it simply, God has instructed me that the days of the 'Lone Ranger' in ministry are over.
                        He revealed to me that even the largest single ministry in world would never be big enough to
                        make a significant global impact. If the church is ever going to see the fullness of God's plan
                        for the endtimes, we have to come together as one. We have to unit in covenant with one another
                        to accomplish the will of God. That is what PAMA is about
                    </p>
                    <p>
                        Thank you for your time and consideration. Remember, Jesus is Lord and 'in all your getting, get understanding'
                    </p>
                </div>
            </div>

            {/* upcoming events */}
            <div className='primaryColor px-5 py-8'>
                <p className='text-center'>NO UPCOMING EVENTS</p>
            </div>

            {/* board members */}
            <div className='flex flex-col px-5 py-8'>
                {/* title */}
                <div className='flex items-center justify-center pb-6'>
                    <hr className='w-16 h-1 rounded-lg bg-gray-600' />
                    <p className='px-4'>Board Members</p>
                    <hr className='w-16 h-1 rounded-lg bg-gray-600' />
                </div>

                <p className='text-center text-sm font-semibold'>By touching hearts, proclaiming Christ and empowering through grace, we become one in
                    unity with Christ</p>

                {/* members card */}
                <div className='grid grid-cols-1 py-8'>
                    {
                        members.map(member => (
                            <MembersCard image={member.image} name={member.name} />
                        ))
                    }
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default PAMA
import { useNavigate } from 'react-router-dom'
import { MembersCard, Footer, Benefits, Button } from '../components/components'
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
                <p className="text-lg font-light">Chris Asante Ministerial</p>
                <p className="text-lg font-light">Association</p>
                <div className="py-8 w-2/3">
                    <Button label="Join Now" onClick={() => navigate('/join')} />
                </div>
            </div>

            {/* image */}
            <div className=''>
                <img src={pastor_and_wife} loading='lazy' />
                <div className='sticky w-full h-auto text-white flex flex-col items-center justify-center py-4 bg-black'>
                    <p>BUILDING <span className='font-bold'>GODLY LEADERS</span></p>
                    <p>TO <span className='font-bold'>DOMINATE </span> THE WORLD</p>
                </div>
            </div>

            {/* membership benefits */}
            {/* <Benefits showBg={true} /> */}

            {/* covenant letter */}
            <div className='flex flex-col items-center justify-center px-5 py-8 bg-gray-200'>
                <div className='flex flex-col items-center pb-8'>
                    <p className='font-bold text-xl'>COVENANT LETTER</p>
                    <p className='pt-3 font-light'>Ephesians 4:11-13</p>
                    <p className='text-lg font-light'>This is the church's finest hour</p>
                </div>
                <p className='font-light pb-2'>Dear Covenant friend,</p>
                <div className='flex flex-col space-y-6'>
                    <p>
                        I believe that this is the church’s finest hour. Today is the day
                        that the body of Christ has longed to see. God’s power is being
                        poured out. His Spirit is moving. The vast fields of this world
                        are ripe for harvest. Our time to shine has come.
                    </p>

                    <p>
                        For some time, the Lord has been speaking to my heart about
                        organizing an Association of churches and ministries for training,
                        edification, and fellowship
                    </p>

                    <p>
                        A place where Christian leaders will be empowered and equipped with
                        the spiritual and physical tools they need to advance the kingdom of
                        God. An organization that would inspire its members to grow and attain
                        the highest levels of excellence, integrity, and influence
                    </p>

                    <p>
                        Out of this union of like-minded individuals, we will multiply our
                        effectiveness as we arise in corporate faith to impact nations in a
                        much greater way than one church or ministry could do alone.
                    </p>

                    <p>
                        T hrough resource sharing and the corporate anointing, I see the Church
                        moving into a place of power and influence not seen since the time in
                        the book of Acts. Uniting under one banner, having a primary focus to
                        gather in the end time harvest of souls and the end takeover of this world’s wealth
                    </p>

                    <p>
                        No more low budget Christian television shows, no longer a shortage of funds
                        to start a new building project, no more delays in sending out missionaries
                        due to lack of financial support. We are coming together, no longer taking sides, but taking over.
                    </p>
                    <p>
                        If you feel God’s leading to be a part of an association that I believe will play a significant role
                        in ushering in the return of our Lord Jesus Christ, I encourage you to complete the attached forms and
                        submit your application.
                    </p>

                    <p>
                        In His Service
                    </p>

                    <Button label="Join Now" onClick={() => navigate('/join')} />
                    {/* <button className="py-3 outline-none px-20 primaryColor" onClick={() => navigate('/apply')}>JOIN CAMA</button> */}
                </div>
            </div>
        </div>
    )
}

export default PAMA
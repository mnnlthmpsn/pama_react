import { TextInput, Button } from '../components/components'

const Give = () => {

    const submitGiving = e => {
        e.preventDefault()
        alert('you clicked me')
    }

    return (
        <div className="container h-auto w-screen py-3 flex flex-col space-y-3 items-center justify-center">
            <form className="grid w-full space-y-3 grid-cols-1" onSubmit={submitGiving}>
                <TextInput label='Name' />
                <TextInput label='Payment method' />
                 
                <TextInput label='Phone Number' />
                <Button label='Give' type='submit' />
            </form>
            <div className='space-y-3 text-sm'>
                <p>What a blessing to hear from you and I’m thankful for your gift of ‘GHC’1 planted to God through this  ministry.</p>
                <p>We’re promised in God’s Word that when we sow unto Him, in faith, we can believe for a multiplied harvest of blessing on our seed <span className='font-semibold lightText'>(Luke 6:38)</span></p>
                <p>God is faithful... so be expecting miracles</p>
                <p>If you have any questions about your giving, please contact us at</p>
                <div>
                    <p>Email: <span className='lightText font-semibold'>chrisasantemensah@gmail.com</span></p>
                    <p>Phone: <span className='lightText font-semibold'>+233 (0)244 386 019</span></p>
                </div>
            </div>
        </div>
    )
}

export default Give
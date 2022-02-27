import { useNavigate } from "react-router-dom"

const Index = () => {

    const navigate = useNavigate()

    const toURL = url => {
        navigate(url)
    }

    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="md:w-1/4 h-auto md:border rounded-lg p-10">
                <div className="space-y-5">
                    <p className="cursor-pointer" onClick={() => toURL('/')}>Home</p>
                    <p className="cursor-pointer" onClick={() => toURL('give')}>Give</p>
                    <p className="cursor-pointer" onClick={() => toURL('partners')}>Partner</p>
                    <p className="cursor-pointer" onClick={() => toURL('pama')}>PAMA</p>
                </div>
            </div>
        </div>
    )
}

export default Index
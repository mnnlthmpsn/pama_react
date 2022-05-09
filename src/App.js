import { Routes, Route } from 'react-router-dom'
import { Give, PAMA, Join, ApplicationForm, Partner, Index } from './pages/pages'

const App = () => {
    return (
        <div className='h-auto w-screen flex justify-center'>
            <Routes>
                <Route path="test_ground" element={<Index />} />
                <Route path="apply" element={<ApplicationForm />} />
                <Route path="give" element={<Give />} />
                <Route path="pama" element={<PAMA />} />
                <Route path="partner" element={<Partner />} />
                <Route path="join" element={<Join />} />
            </Routes>
        </div>
    )
}

export default App
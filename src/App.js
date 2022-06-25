import { Routes, Route } from 'react-router-dom'
import { Give, PAMA, Join, ApplicationForm, Partner, Index, Checkout, Map } from './pages/pages'

const App = () => {
    return (
        <div className='h-screen w-screen flex justify-center'>
            <Routes>
                <Route path="test_ground" element={<Index />} />
                <Route path="apply" element={<ApplicationForm />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="give" element={<Give />} />
                <Route path="pama" element={<PAMA />} />
                <Route path="partner" element={<Partner />} />
                <Route path="join" element={<Join />} />
                <Route path="map" element={<Map />} />
            </Routes>
        </div>
    )
}

export default App
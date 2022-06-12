import { showToast } from "../helpers"

const { default: axios } = require("axios")
const { useState } = require("react")

export const usePostHook = payload => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState()

    const submitPostReq = async () => {
        setLoading(true)

        const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'http://198.199.87.131:7018'

        try {
            const { url, body } = payload
            const { data } = await axios.post(`${BASE_URL}/${url}`, { ...body })
            setData(data)
        } catch (err) {
            showToast('error', err.message)
        } finally {
            setLoading(false)
        }
    }

    return { submitPostReq, data, isLoading }
}

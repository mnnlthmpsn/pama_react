import { useEffect, useState } from "react"
import axios from 'axios'

export const useGetHook = url => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState()

    const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:1337/api' : 'https://pama-api.herokuapp.com/api'

    const getData = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/${url}`)
            setData(data.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return { isLoading, data }
}
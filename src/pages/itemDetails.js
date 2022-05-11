import { useParams } from "react-router-dom"
import obey from '../images/obey.jpg'
import { items } from "./shop"

const ItemDetails = () => {

    const { index } = useParams()

    return (
        <div className="p-6">
            <div className="rounded-lg shadow-lg">
                <img src={obey} className="rounded-lg py-8 px-2" alt="" />
            </div>
            <div className="grid grid-cols-4 p-6 gap-5">
                {[1, 2, 3, 4].map(img => <img src={obey} className="border p-1 rounded bg-white shadow-sm" alt="" key={img} />)}
            </div>
            <div className="pt-12 space-y-2 textDark">
                <p className="text-2xl">Obey the prophets</p>
                <p>Short Description about the product being sold with clearly defined details and author</p>
                <p className="text-xs">Prophet Asante</p>
                <div className="w-full pt-5">
                    <button className="primaryColor rounded-lg py-3 w-full">Buy Now | <span className="text-xs">GHS 200.00</span></button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails
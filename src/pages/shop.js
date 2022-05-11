import obey from '../images/obey.jpg'
import kasa from '../images/kasa.jpg'

const Shop = () => {

    const items = [
        { title: 'Obey the Prophets', category: 'BOOK', img: obey },
        { title: 'Awurade Kasa', category: 'BOOK', img: kasa },
    ]

    return (
        <div className="p-6">
            <div className="grid gap-8 w-full">
                {items.map(item => <ShopCard item={item} />)}
            </div>
        </div>
    )
}

export default Shop

const ShopCard = ({ item }) => {
    return (
        <div className="px-2 py-8 border text-center flex flex-col justify-center border-gray-100 border-1 rounded-lg shadow-lg">
            <img src={item.img} className="p-6 h-72 w-auto" alt="" />
            <p className='text-gray-500 text-xs font-light'>{item.category}</p>
            <p className='text-xl pb-3 pt-1'>{item.title}</p>
            <div>
                <button className="rounded-lg primaryColor w-auto px-6 py-3">Buy Now</button>
            </div>
        </div>
    )
}
import { Dropdown } from "../components/dropdown"

const Index = () => {

    const items = [
        { key: "Item one", val: 1 },
        { key: "Item two", val: 2 },
        { key: "Item three", val: 3 },
    ]

    return (
        <div className="flex h-full w-full items-center justify-center p-10">
            <Dropdown label='Item' options={items} selected={items[0]} />
        </div>
    )
}

export default Index
import { ChevronDownIcon } from "@heroicons/react/solid"
import { useState } from "react"

export const Dropdown = ({ options, label }) => {

    const [open, setOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(options[0] || {})

    const setActiveListItem = item => {
        setSelectedItem(item)
        setOpen(!open)
    }

    return (
        <div className="relative w-full">
            <div className={`border-b border-red-500 group w-full py-2 flex items-center justify-between`} onClick={() => setOpen(!open)}>
                <p>{selectedItem.key || `Select ${label} `}</p>
                <ChevronDownIcon className={`h-4 w-auto text-gray-800 duration-150 ${open ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            <div className={`absolute mt-1 bg-white shadow rounded ease-in-out space-y-2 ${open ? 'h-auto border w-full opacity-100 block' : 'opacity-0 hidden'}`}>
                {
                    options.length > 0
                        ? options.map(item => <p onClick={() => setActiveListItem(item)} className="hover:bg-gray-100 py-2 px-4" key={item.val}>{item.key}</p>)
                        : <p className="py-2 px-4 text-gray-500">Select {label}</p>
                }
            </div>
        </div>
    )
}
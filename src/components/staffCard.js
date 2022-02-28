const StaffCard = ({ staff }) => {
    return <div className="w-full shadow border p-8">
        <img className="w-full h-72 object-cover object-top" src={staff.image} />
        <p className="pt-2 font-bold">{staff.name}</p>
        <p>{staff.role}</p>
    </div>
}

export default StaffCard
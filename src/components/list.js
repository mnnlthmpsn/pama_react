const ListItem = props => {
    return (
        <div className="flex items-center space-x-3 py-2">
            <div className="rounded-full h-2 w-2 bg-white"></div>
            <p>{props.item}</p>
        </div>
    )
}

export default ListItem
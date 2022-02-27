const MembersCard = props => {
    return <div className="p-4 flex flex-col items-center justify-center rounded-lg border">
        <image className="h-56 w-full object-cover object-center" src={props.url} />
        <p>{props.name}</p>
    </div>
}

export default MembersCard
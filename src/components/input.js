const TextInput = props => {
    return <div className="w-full flex flex-col space-y-1">
        {/* <label className="text-lg">{props.label}</label> */}
        <input type={props.type} className="form-control2" placeholder={`${props.label} *`} {...props} />
        {/* <input className="form-control" {...props}/> */}
    </div>
}

export default TextInput
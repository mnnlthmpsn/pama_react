const TextInput = props => {
    return <div className="w-full flex flex-col space-y-1">
        <label>{props.label}</label>
        <input className="form-control" {...props}/>
    </div>
}

export default TextInput
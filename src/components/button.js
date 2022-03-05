const Button = props => {
    return (
        <button className="primaryColor w-full py-4 focus:shadow-lg select-none duration-300 outline-none" {...props}>{props.label || 'Continue'}</button>
    )
}

export default Button
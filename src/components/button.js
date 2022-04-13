const Button = props => {
    return (
        <button className="primaryColor w-full text-lg py-4 focus:shadow-lg duration-300 outline-none" {...props}>{props.label || 'Continue'}</button>
    )
}

export default Button
const Button = props => {
    return (
        <button className="primaryColor w-full py-4 rounded-lg" {...props}>{props.label || 'Continue'}</button>
    )
}

export default Button
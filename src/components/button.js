const Button = props => {
    return (
        <button className="primaryColor py-2 rounded-lg" {...props}>{props.label || 'Continue'}</button>
    )
}

export default Button
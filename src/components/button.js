const Button = props => {
    return (
        <button className={`${props.isSecondary ? 'bgDark text-white' : 'primaryColor'} rounded w-full text-lg py-4 focus:shadow-lg duration-300 outline-none`} {...props}>{props.label || 'Continue'}</button>
    )
}

export default Button
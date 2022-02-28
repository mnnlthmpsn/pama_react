const Benefits = props => {

    const benefits = [
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
        { icon: 'https://cdn-icons-png.flaticon.com/128/957/957980.png', title: 'MEMBERSHIP', description: 'Bringing Ministers together in a covenant relationship to serve one another and maximize the visions of the individual ministries' },
    ]

    return <div className={`${props.showBg && 'primaryColor'} grid grid-cols-1 space-y-6 px-3 py-5`}>
        {
            benefits.map(benefit => (
                <div className='flex flex-col items-center justify-center'>
                    <img src={benefit.icon} className='py-2 h-20 w-auto' />
                    <p className='pb-4'>{benefit.title}</p>
                    <p className='text-center'>{benefit.description}</p>
                </div>
            ))
        }
    </div>
}

export default Benefits
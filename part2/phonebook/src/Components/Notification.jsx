const Notification = ({ message, messageType }) => {
    if (message === null) {
        return (null)
    }

    if (messageType = true)
        return (
            <div className='notification'>
                {message}
            </div>
        )
    else
        return (
            <div className='error'>
                {message}
            </div>
        )
}

export default Notification
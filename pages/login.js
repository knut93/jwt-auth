const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('after submit')
        const username = e.target.username.value
        const password = e.target.password.value
        console.log(username)
        console.log(password)
        const response = await fetch('./api/authenticate', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        })
        const result = await response.json();
    }
    return (
        <div className='mt-4 shadow-sm border-2 border-black-600-p-1 flex-col space-y-6 w-auto max-w-min mx-auto text-center rounded text-2x1 min-w-[25%]'>
            <div className='font-bold p-2 bg-gray-200'>
                <h1>RA Client DB</h1>
            </div>
            <div className='space-y-6'>
                <form className='space-y-3 w-auto mx-auto' onSubmit={handleSubmit}>
                    <label className='w-[205px] mx-auto text-left flex flex-col' htmlFor='username'>Username:</label>

                    <input
                        className='border-2 rounded border-gray-600-p-1'
                        type='text'
                        name='username'
                        autoComplete="off"
                        required
                    />

                    <label className='w-[205px] mx-auto text-left flex flex-col' htmlFor='password'>Password:</label>
                    <input
                        className='border-2 rounded border-gray-600-p-1'
                        type='password'
                        name='password'
                        required
                    />
                    <div className='pb-3 space-y-6 space-x-6'>
                        <button className='py-1 px-2 bg-blue-500 text-white rounded' type="submit">Log in</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Login
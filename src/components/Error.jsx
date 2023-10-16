import React from 'react'

const Error = ({error}) => {
    return (
        <div role="alert" className='w-full px-20 mb-10'>
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Danger
            </div>
            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>{error}.</p>
            </div>
        </div>
    )
}

export default Error
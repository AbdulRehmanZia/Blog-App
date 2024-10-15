import React from 'react'

function Container({children}) {
    return (
        <div className='max-w-7xl mx-auto p-4 bg-slate-600'>{children}</div>
    )
}

export default Container

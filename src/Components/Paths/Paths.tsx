import React from 'react'
import Navigate from '../Common/Navigate/Navigate'

const Paths: React.FC = () => {
return (
    <div className='border-b border-Grey flex justify-between mb-5 pb-1'>
        <Navigate 
            Navigation={`/`}
            NavigateText='Projects'
            NavigateStyle='font-bold no-underline text-xl'
        />
        <Navigate 
            Navigation={`/Skills`}
            NavigateText='Skills'
            NavigateStyle='font-bold no-underline text-xl'
        />
        <Navigate 
            Navigation={`/Contact`}
            NavigateText='Contact'
            NavigateStyle='font-bold no-underline text-xl'
        />
    </div>
)
}

export default Paths
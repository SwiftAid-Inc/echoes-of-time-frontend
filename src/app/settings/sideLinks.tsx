import Link from 'next/link'
import React from 'react'

const SideLinks = () => {
    return (
        <>
            <Link href="/settings/faqs" className="text-[#FFFFFF] text-[14px] underline hover:text-[#A55E1D] cursor-pointer">FAQS & Guides</Link>
            <Link href="/settings/contact" className="text-[#FFFFFF] text-[14px] underline hover:text-[#A55E1D] cursor-pointer">Contact Support Button</Link>
            <div className="flex flex-col">
                <Link href="/settings/tutorial" className="text-[#FFFFFF] text-[14px] underline hover:text-[#A55E1D] cursor-pointer">Quick Tutorial</Link>
                <span className='text-[#FFFFFF] text-[13px]'>&quot;How the Game Works&quot;</span>
            </div>
        </>
    )
}

export default SideLinks
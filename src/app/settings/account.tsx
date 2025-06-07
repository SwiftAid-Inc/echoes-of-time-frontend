'use client'
import React, { useState } from 'react'
import { Toggle } from "@/components/ui/toggle"
import { ChevronDown } from 'lucide-react';

const Account = () => {

    const [settings, setSettings] = useState({
        username: 'Crest',
        email: 'Newhim@hotspot.com',
        social: 'Crest',
        wallet: 'Crest',
        soundMusic: 'Off',
        notification: 'Off',
        language: 'English',
        profileState: 'Public'
    })

    // Handle input changes
    const handleInputChange = (field: keyof typeof settings) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSettings(prev => ({ ...prev, [field]: e.target.value }))
        }

    // Handle toggle changes (radio behavior)
    const handleToggleChange = (field: keyof typeof settings) =>
        (value: string) => {
            setSettings(prev => ({ ...prev, [field]: value }))
        }

    // Handle language select change
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSettings(prev => ({ ...prev, language: e.target.value }))
    }


    return (
        <div className="w-full border-[0.25px] border-[#838383]/20 p-[10px] flex flex-col gap-[12px]">
            {/* username */}
            <div className="w-full h-[61.5px] flex justify-between items-center border-[0.25px] border-[#DACBAF66]/30 px-[10px] rounded-[8px]">
                <label htmlFor="username" className="text-[#F5F0E7] text-[16px]">Edit Username</label>
                <input type="text" name="username" id="username" value={settings.username}
                    onChange={handleInputChange('username')} className='w-[80px] h-[39px] px-[10px] bg-transparent border-b-[0.5px] border-b-[#BCAA8C]/40 text-white text-[16px] outline-none focus:outline-none' />
            </div>

            {/* email*/}
            <div className="w-full h-[61.5px] flex justify-between items-center border-[0.25px] border-[#DACBAF66]/30 px-[10px] rounded-[8px]">
                <label htmlFor="email" className="text-[#F5F0E7] text-[16px]">Email</label>
                <input type="email" name="email" id="email" value={settings.email}
                    onChange={handleInputChange('email')} className='w-auto h-[39px] px-[10px] bg-transparent border-b-[0.5px] border-b-[#BCAA8C]/40 text-white text-[16px] outline-none focus:outline-none' />
            </div>

            {/* Social Login */}
            <div className="w-full h-[61.5px] flex justify-between items-center border-[0.25px] border-[#DACBAF66]/30 px-[10px] rounded-[8px]">
                <label htmlFor="social" className="text-[#F5F0E7] text-[16px]">Social login</label>
                <input type="text" name="social" id="social" value={settings.social}
                    onChange={handleInputChange('social')} className='w-[80px] h-[39px] px-[10px] bg-transparent border-b-[0.5px] border-b-[#BCAA8C]/40 text-white text-[16px] outline-none focus:outline-none' />
            </div>

            { /* Link/Unlink Wallet */}
            <div className="w-full h-[61.5px] flex justify-between items-center border-[0.25px] border-[#DACBAF66]/30 px-[10px] rounded-[8px]">
                <label htmlFor="wallet" className="text-[#F5F0E7] text-[16px]">Link/Unlink Wallet</label>
                <input type="text" name="wallet" id="wallet" value={settings.wallet}
                    onChange={handleInputChange('wallet')} className='w-[80px] h-[39px] px-[10px] bg-transparent border-b-[0.5px] border-b-[#BCAA8C]/40 text-white text-[16px] outline-none focus:outline-none' />
            </div>

            { /* Sound & Music */}
            <div className="w-full h-[61.5px] flex justify-between items-center border-[0.25px] border-[#DACBAF66]/30 px-[10px] py-[8px] rounded-[8px]">
                <label htmlFor="sound" className="text-[#F5F0E7] text-[16px]">Sound & Music</label>
                <div className='w-[218px] h-[39px] grid grid-cols-2 gap-[10px]'>
                    <Toggle aria-label="sound and music"
                        pressed={settings.soundMusic === 'On'}
                        onPressedChange={() => handleToggleChange('soundMusic')('On')}
                        className='border-[0.25px] border-[#BCAA8C66]/30 text-white rounded-none data-[state=on]:bg-[#A55E1D]'>
                        On
                    </Toggle>
                    <Toggle aria-label="sound and music"
                        pressed={settings.soundMusic === 'Off'}
                        onPressedChange={() => handleToggleChange('soundMusic')('Off')}
                        className='border-[0.25px] border-[#BCAA8C66]/30 text-white rounded-none data-[state=on]:bg-[#A55E1D]'>
                        Off
                    </Toggle>
                </div>
            </div>

            { /* Notification */}
            <div className="w-full h-[61.5px] flex justify-between items-center border-[0.25px] border-[#DACBAF66]/30 px-[10px] py-[8px] rounded-[8px]">
                <label htmlFor="notification" className="text-[#F5F0E7] text-[16px]">Notification</label>
                <div className='w-[218px] h-[39px] grid grid-cols-2 gap-[10px]'>
                    <Toggle aria-label="notification" pressed={settings.notification === 'On'}
                        onPressedChange={() => handleToggleChange('notification')('On')}
                        className='border-[0.25px] border-[#BCAA8C66]/30 text-white rounded-none data-[state=on]:bg-[#A55E1D]'>
                        On
                    </Toggle>
                    <Toggle aria-label="notification" pressed={settings.notification === 'Off'}
                        onPressedChange={() => handleToggleChange('notification')('Off')}
                        className='border-[0.25px] border-[#BCAA8C66]/30 text-white rounded-none data-[state=on]:bg-[#A55E1D]'>
                        Off
                    </Toggle>
                </div>
            </div>

            {/* language */}
            <div className="w-full h-[61.5px] flex justify-between items-center border-[0.25px] border-[#DACBAF66]/30 p-[10px] rounded-[8px]">
                <label htmlFor="language" className="text-[#F5F0E7] text-[16px]">Language</label>
                <div className="relative">
                    <select
                        id="language"
                        value={settings.language}
                        onChange={handleLanguageChange}
                        className="w-[118px] h-[32px] pl-[10px] pr-8 bg-transparent border-b-[0.5px] border-b-[#BCAA8C]/40 text-white text-[16px] outline-none focus:outline-none appearance-none cursor-pointer"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Russian">Russian</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#BCAA8C]/40 pointer-events-none" />
                </div>
            </div>

            { /* Profile state */}
            <div className="w-full h-[61.5px] flex justify-between items-center border-[0.25px] border-[#DACBAF66]/30 px-[10px] py-[8px] rounded-[8px]">
                <label htmlFor="profile" className="text-[#F5F0E7] text-[16px]">Profile state</label>
                <div className='w-[218px] h-[39px] grid grid-cols-2 gap-[10px]'>
                    <Toggle aria-label="profile" pressed={settings.profileState === 'Private'}
                        onPressedChange={() => handleToggleChange('profileState')('Private')}
                        className='border-[0.25px] border-[#BCAA8C66]/30 text-white rounded-none data-[state=on]:bg-[#A55E1D]'>
                        Private
                    </Toggle>
                    <Toggle aria-label="profile" pressed={settings.profileState === 'Public'}
                        onPressedChange={() => handleToggleChange('profileState')('Public')}
                        className='border-[0.25px] border-[#BCAA8C66]/30 text-white rounded-none data-[state=on]:bg-[#A55E1D]'>
                        Public
                    </Toggle>
                </div>
            </div>
        </div>
    )
}

export default Account
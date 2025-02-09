'use client'
import { useTheme } from 'next-themes'
import { MoonStars, SunDim } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Dropdown, DropdownAction, DropdownContent, DropdownItem } from 'keep-react'

const ThemeSwitcher = () => {
    const { setTheme } = useTheme()
    const [client, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])

    return client ? (
        <Dropdown>
            <DropdownAction asChild>
                <button className="rounded-full text-green-500  p-2.5 ">
                    <MoonStars size={24} color="green" className="hidden dark:block" />
                    <SunDim size={24} color="green" className="block dark:hidden" />
                    <span className="sr-only">Toggle theme</span>
                </button>
            </DropdownAction>
            <DropdownContent
                align="start"
                className="w-[180px] border border-green-500   dark:bg-metal-900"
            >
                <DropdownItem onClick={() => setTheme('light')}>Light</DropdownItem>
                <DropdownItem onClick={() => setTheme('dark')}>Dark</DropdownItem>
                <DropdownItem onClick={() => setTheme('system')}>System</DropdownItem>
            </DropdownContent>
        </Dropdown>
    ) : null
}

export default ThemeSwitcher

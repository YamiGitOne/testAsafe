'use client'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <div className="flex space-x-4 float-right">
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'}`}
      >
        <FaSun className="text-gray-800" size={20} />
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-600'}`}
      >
        <FaMoon className="text-gray-200" size={20} />
      </button>
    </div>
  )
}

export default ThemeSwitcher

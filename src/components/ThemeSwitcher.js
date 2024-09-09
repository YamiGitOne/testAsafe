'use client'
import useTheme from '../hooks/useTheme'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeSwitcher = () => {
    const { theme, handleThemeChange } = useTheme()

  return (
    <div className="flex space-x-4 float-right">
      <button
        onClick={() => handleThemeChange()}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'}`}
      >
        <FaSun className="text-gray-800" size={20} />
      </button>
      <button
        onClick={() => handleThemeChange()}
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-600'}`}
      >
        <FaMoon className="text-gray-200" size={20} />
      </button>
    </div>
  )
}

export default ThemeSwitcher

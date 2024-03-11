"use client"

import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "light"
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage())

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

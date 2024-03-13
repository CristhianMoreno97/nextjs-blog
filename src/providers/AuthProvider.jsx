"use client"

import { SessionProvider } from "next-auth/react"
import PropTypes from 'prop-types'

const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

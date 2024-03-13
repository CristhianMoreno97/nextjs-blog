import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PropTypes from 'prop-types'
import { ThemeContextProvider } from "@/context/ThemeContext"
import ThemeProvider from "@/providers/ThemeProvider"
import AuthProvider from "@/providers/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Blog de desarrollador web Cristhian Moreno",
    description: "Blog personal del desarrollador web Cristhian Fernando Moreno Manrique"
}

export default function RootLayout ({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <ThemeContextProvider>
                        <ThemeProvider>
                            <div className="container">
                                <div className="wrapper">
                                    <Navbar />
                                    {children}
                                    <Footer />
                                </div>
                            </div>
                        </ThemeProvider>
                    </ThemeContextProvider>
                </AuthProvider>
            </body>
        </html>
    )
}

RootLayout.propTypes = {
    children: PropTypes.node.isRequired
}

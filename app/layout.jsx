import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ritik Trivedi - Full Stack Developer",
  description: "Portfolio of Ritik Trivedi, a passionate Full Stack Developer specializing in MERN stack development",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

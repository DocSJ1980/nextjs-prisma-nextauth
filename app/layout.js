import Provider from './context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Dengue Fighters',
  description: 'Dengue Fighters is a platform for the prevention of dengue outbreaks in Rawalpindi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  )
}

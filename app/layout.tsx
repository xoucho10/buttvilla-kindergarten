import './globals.css'
import { Cinzel, EB_Garamond } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond' })

export const metadata = {
  title: 'ButtVilla Kindergarten - Coming Soon | Est. 1986',
  description: 'We are nurturing eggs into roosters since 1986',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${garamond.variable} antialiased`}>{children}</body>
    </html>
  )
}

import { Lexend } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const lexend = Lexend({
  subsets: ['latin']
})

export const metadata: Metadata = {
  icons: {
    icon: 'https://codefly-repo.lncvrt.xyz/codefly.png'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={lexend.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}

import { Metadata } from 'next'
import Image from 'next/image'
import codefly from './assets/logo.png'

export const metadata: Metadata = {
  title: 'Code Fly - Home'
}

export default function Home () {
  return (
    <>
      <div className='side-gradient'>
        <h1 className='side-text'>Code Fly is a suite of IDE&apos;s</h1>
        <h1 className='side-text'>
          Made as a free alternative to the jetbrains suite
        </h1>
      </div>

      <div className='logo-container'>
        <Image src={codefly} alt='Code Fly Logo' width={600} height={600} />
      </div>
    </>
  )
}
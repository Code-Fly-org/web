import { Metadata } from 'next'

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
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4400ff] w-100 h-100 rounded-2xl rotate-345'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ea00ff] w-100 h-100 rounded-2xl rotate-15'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000] w-70 h-70 rounded-2xl'>
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !text-[#9900ff] text-5xl whitespace-nowrap'>Code Fly</h1>
        </div>
      </div>
    </>
  )
}
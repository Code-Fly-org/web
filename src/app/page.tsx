import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Code Fly - Home'
}

export default function Home () {
  return (
    <>
      <div className="side-gradient">
        <h1 className='side-text'>Code Fly is a suite of IDE's</h1>
        <h1 className='side-text'>Made as a free alternative to the jetbrains suite</h1>
      </div>
    </>
  )
}

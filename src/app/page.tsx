import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Code Fly - Home'
}

export default function Home () {
  return (
    <>
      <div className='side-gradient'>
        <h1 className='top-side-text'>Code Fly is a development IDE</h1>
        <h1 className='side-text-nm'>
          Made to have built in support for almost any language
        </h1>

        <h1 className='side-text'>
          <a href="https://github.com/Code-Fly-org">Github</a>
        </h1>
        <h1 className='side-text-nm'>
          <a href="https://discord.gg/7Y2vaedb3u">Discord</a>
        </h1>

        <div className='h-70'></div>
      </div>

      <div className='logo-container'>
        <div className='bg-[#5331F8] w-100 h-100 rounded-2xl rotate-345 [animation:spin_50s_linear_infinite]'></div>
        <div className='bg-[#ED46F8] w-100 h-100 rounded-2xl rotate-15 [animation:spin_40s_linear_infinite_reverse]'></div>
        <div className='bg-[#000000] w-70 h-70 rounded-2xl'>
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !text-[#8937F8] text-5xl whitespace-nowrap'>
            Code Fly
          </h1>
        </div>
      </div>
    </>
  )
}

//import HeadComponent from '@/components/HeadComponent'
//import Home from '@/components/Home'
import dynamic from 'next/dynamic'

const HeadComponent = dynamic(() => import('@/components/HeadComponent'), {
  ssr: false
})

const Home = dynamic(() => import('@/components/Home'), {
  ssr: false
})

export default function HomePage() {
  return (
    <>
      <HeadComponent title="Vortex Voyages"/>
      <Home/>
    </>
  )
}

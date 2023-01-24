// import React from 'react'
// import Image from 'next/image'

// import bgTop from '../public/bg-desc-top.png'
// import bgBottom from '../public/bg-desc-bottom.png'
// import bgTopMob from '../public/bg-mob-top.png'
// import bgBottomMob from '../public/bg-mob-bottom.png'

import Layout from '../components/Layout'

import First from '../blocks/1-first'
import Second from '../blocks/2-second'
import Third from '../blocks/3-third'
import Four from '../blocks/4-four'
import Five from '../blocks/5-five'
import Six from '../blocks/6-six'
import Seven from '../blocks/7-seven'
import Eight from '../blocks/8-eight'

const Home = () => {
  // const [innerWidth, setInnerWidth] = React.useState(0)
  // React.useEffect(() => {
  //   const resize = () => setInnerWidth(window.innerWidth)
  //   window.removeEventListener('resize', resize)
  //   window.addEventListener('resize', resize, { passive: true })
  //   resize()
  //   return () => window.removeEventListener('resize', resize)
  // }, [])

  return (
    <Layout title={'Estatix'} lang="Русский">
      {/* <Image src={innerWidth > 768 ? bgTop : bgTopMob} placeholder='blur' alt={`space`} className='bg-image top' quality={100} /> */}
      <img src='../bg-desc-top.png' alt={`space`} className='bg-image top d-sm-none' />
      <img src='../bg-mob-top.png' alt={`space-mobile`} className='bg-image top d-sm-block'/>
      <First />
      <Second />
      <Third />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      {/* <Image
        src={innerWidth > 768 ? bgBottom : bgBottomMob}
        placeholder='blur'
        alt={`space bottom`}
        className='bg-image bottom'
        quality={100}
      /> */}
      <img src='../bg-desc-bottom.png' alt={`space-bottom`} className='bg-image bottom d-sm-none' />
      <img src='../bg-mob-bottom.png' alt={`space-bottom-mobile`} className='bg-image bottom d-sm-block'/>
    </Layout>
  )
}

export default Home

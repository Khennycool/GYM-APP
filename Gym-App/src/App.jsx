import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import BgImg from './assets/bg1.png'
import Equipments from './Components/Equipments/Equipments'
import Banner from './Components/Banner/Banner'


import Img1 from './assets/2.jpg'
import Img2 from './assets/3.jpg'
import Tab from './Components/Tab/Tab'
import ClassesSchedule from './Components/ClassesSchedule/ClassesSchedule'
import PricingSection from './Components/PricingSection/PricingSection'


const BannerData = {
 image: Img1,
 title: "The Impotants To Take Of YourSelf",
 subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
 Link: "#",
}
const Banner2Data = {
  image: Img2,
  title: "The Impotants To Take Of YourSelf",
  subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  Link: "#",
 }

const App = () => {
  const bgstyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }
  return (
    <div className='overflow-x-hidden'>
      <div style={bgstyle}>
        <Navbar/>
        <Hero/>
        </div>
        <Equipments/>
        <Banner  {...BannerData}/>
        <Tab/>
        <Banner  {...Banner2Data}/>
        <PricingSection/>
        <ClassesSchedule/>
        

    </div>
  )
}

export default App

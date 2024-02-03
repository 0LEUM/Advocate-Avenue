/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import Law from '../../pages/landPage/law/Law';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Top from '../../pages/Top/Top'
import ContactUs from '../../pages/ContactUS/Contacts'
import Background from '../../pages/landPage/background/Background'

const Layout = () => {

  let lawData = [
    {text1:"Championing justice",text2:" one voice at a time"},    //three images so three different texts
    {text1:"In the pursuit of justice",text2:" advocacy is our compass"},
    {text1:"Beyond words",text2:"beyond borders"},
  ]
  const [lawCount,setLawCount] = useState(0);   //creating usestate variable and initialising it with 2
  
  const [playStatus,setPlayStatus]= useState(false); // another usestate variable to play and pause the video(var name: playstatus, funcname: setplaystatus)
  
  useEffect(()=>{
    setInterval(()=>{
      setLawCount((count)=>{return count===2 ? 0:count+1})
    },3000); //every 3 seconds this will execute 
  },[])

  const togglePlayStatus = () => {
    setPlayStatus(!playStatus);
  };
  return (
    <>
      <Header/>
      <Law
        lawData={lawData[lawCount]}
        setLawCount={setLawCount}
        lawCount={lawCount}
        togglePlayStatus={togglePlayStatus}
        playStatus={playStatus}
      />
      <Background playStatus={playStatus} lawCount={lawCount}/>
      <Top/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default Layout
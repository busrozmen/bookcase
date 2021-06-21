import React from 'react'
import { MDBContainer } from 'mdbreact';
import banner from '../../assets/images/banner.png'
import Books from '../books/Books'
import './Main.css'

const Main = () => {

  return(
    <MDBContainer>
      <img src={banner} className='banner' />
      <hr></hr>
      <h3 className='text-center'>Editor's Picks </h3>
      <Books subject='science'/> 
    </MDBContainer>
  )
}
export default Main



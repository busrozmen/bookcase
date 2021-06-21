import React from 'react'
import { MDBContainer } from 'mdbreact';
import Books from '../Books'

const HumorBooks = () => {

  return(
    <MDBContainer>
      <h3 className='text-center mt-5'>Humor Books</h3>
      <Books subject='humor'/> 
    </MDBContainer>
  )
}
export default HumorBooks



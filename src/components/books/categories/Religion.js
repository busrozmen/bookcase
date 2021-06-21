import React from 'react'
import { MDBContainer } from 'mdbreact';
import Books from '../Books'

const ReligionBooks = () => {

  return(
    <MDBContainer>
      <h3 className='text-center mt-5'>Religion Books</h3>
      <Books subject='religion'/> 
    </MDBContainer>
  )
}
export default ReligionBooks



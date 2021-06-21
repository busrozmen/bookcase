import React from 'react'
import { MDBContainer } from 'mdbreact';
import Books from '../Books'

const EducationBooks = () => {

  return(
    <MDBContainer>
      <h3 className='text-center mt-5'>Education Books</h3>
      <Books subject='education'/> 
    </MDBContainer>
  )
}
export default EducationBooks



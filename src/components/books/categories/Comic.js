import React from 'react'
import { MDBContainer } from 'mdbreact';
import Books from '../Books'

const ComicBooks = () => {

  return(
    <MDBContainer>
      <h3 className='text-center mt-5'>Comic Books</h3>
      <Books subject='comic book'/> 
    </MDBContainer>
  )
}
export default ComicBooks



import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import notFound from '../../assets/images/notfound.png'
import { Link } from 'react-router-dom';
import useLocalStorage from '../../useLocalStorage'
import './WishList.css'

const WishList = () => {
  const [token, setToken] = useLocalStorage('BookCaseToken', {})
  const {wishs} =  token
  return(
    <MDBContainer>
      {
        wishs && wishs.length == 0 && 
        <p className='no-wish'>Please add book to your wishlist :)</p>
      }
      {
        wishs && wishs.length>0 && (
        <MDBRow className='m-4 wish-list'>
          <MDBCol className='title col-4'>Book</MDBCol>
          <MDBCol className='title col-8'>Delivery Address</MDBCol>
        { wishs.map((item,index) =>(
          <MDBCol lg='12' className='p-0' key={index}>
            <MDBCard>
              <MDBRow className='list-item'>
                <MDBCol className='col-4 p-0'>
                  <Link className='book-wrapper' to={{
                    pathname: "/book-detail",
                    state: {
                      bookUrl: item.bookUrl,
                    },
                  }}>
                    <MDBCardImage
                      hover
                      overlay='white-light'
                      className='card-img-top'
                      src={item.book.imageLinks && item.book.imageLinks.thumbnail ? item.book.imageLinks.thumbnail : notFound}
                      alt='book image'
                    />
                    <MDBCardBody className='card-title'>
                      <p><strong>{item.book.title}</strong></p>
                      {item.book.authors.map((author,index) =>
                        <p key={index}>{author}</p>
                      )}
                    </MDBCardBody>
                  </Link>
                </MDBCol>
                <MDBCol className='col-6 address-wrapper p-0'>
                  <MDBCardBody className='card-title'>
                    <p><strong>{item.address.firstName} {item.address.lastName}</strong></p>
                    <p>{item.address.email}</p>
                    <p>{item.address.phone}</p>
                    <p>{item.address.city}</p>
                    <p>{item.address.cstate}</p>
                    <p>{item.address.zip}</p>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow> 
            </MDBCard>
          </MDBCol>
          ))}
        </MDBRow>
        )}
    </MDBContainer>
  )
}
export default WishList



import React, { useState , useEffect } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBTooltip, MDBIcon } from 'mdbreact';
import notFound from '../../assets/images/notfound.png'
import { Link } from 'react-router-dom';
import './Books.css'

const Books = (props) => {

  const url = 'https://www.googleapis.com/books/v1/volumes?q=subject:'+props.subject
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.items);
    }
    fetchData();
  }, []);
  return(

      <MDBRow className='mt-4 mb-4'>
      {
        data.length>0 && data.map((item,index) =>(
        <MDBCol className='pt-4 book-card col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3' key={index}>
          <MDBCard>
            <MDBCardImage
              hover
              overlay='white-light'
              className='card-img-top'
              src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : notFound}
              alt='book image'
              width='250'
              height='250'
            />
            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle className='card-title'>
                <strong>{item.volumeInfo.title}</strong>
              </MDBCardTitle>
              <MDBCardText className='authors'>
              {item.volumeInfo.authors.map((author,index) =>
                <strong key={index} className='font-weight-bold author'>{author}</strong>
              )}
              </MDBCardText>
              <MDBCardText>
                Published Date: {item.volumeInfo.publishedDate} <br />
                Page Count: {item.volumeInfo.pageCount}
              </MDBCardText>
              <MDBCol md='12' className='d-flex justify-content-center button-wrapper'>
                <Link to={{
                  pathname: "/wish-form",
                  state: {
                    book: item.volumeInfo,
                    bookUrl: item.selfLink
                  },
                }}>
                  <MDBTooltip placement="bottom">
                    <MDBBtn rounded floating>
                      <MDBIcon size='lg' icon='dolly'></MDBIcon>
                    </MDBBtn>
                    <div>Add to My Wishlist</div>
                  </MDBTooltip>
                </Link>
                <Link to={{
                  pathname: "/book-detail",
                  state: {
                    bookUrl: item.selfLink
                  },
                }}>
                  <MDBTooltip placement="bottom">
                    <MDBBtn rounded floating>
                      <MDBIcon size='lg'icon='angle-double-right'></MDBIcon>
                    </MDBBtn>
                    <div>Go to Book Detail</div>
                  </MDBTooltip>
                </Link>  
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ))}
    </MDBRow>
  )
}
export default Books



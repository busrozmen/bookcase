import React, { useState, useEffect} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useLocation, Link} from 'react-router-dom';
import notFound from '../../assets/images/notfound.png'
import './Book.css'

const Book = () => {
  const location = useLocation()
  const { bookUrl } = location.state
  const [book, setBook] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(bookUrl);
      const json = await response.json();
      setBook(json.volumeInfo);
    }
    fetchData();
  }, []);
  return(
    <MDBContainer className='book'>
      <MDBRow className='pt-5 pb-5'>
        <MDBCol md='4' className='img-wrapper'>
          <img src={book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : notFound}/>
        </MDBCol>
        <MDBCol md='8'>
          <h3><strong>{book.title}</strong></h3>
          <h4>{book.subTitle}</h4>
          <h4><i>{book.authors}</i></h4>
          <br />
          <h5>{book.publisher ? 'Publisher: ' + book.publisher : ''}</h5>
          <p>{book.description ? 'Description: ' + book.description : ''}</p>
          <p>{book.pageCount ? 'Page Count: ' + book.pageCount : ''}</p>
          <p>{book.categories ? 'Categories: ' + book.categories: ''}</p>
          <Link to={{
                pathname: "/wish-form",
                state: {
                  book,
                  bookUrl
                }
              }}>
            <MDBBtn className='w-100 add-wish mt-4'>
                Add to My WishList
            </MDBBtn>
          </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
export default Book



import React, { useState, useCallback} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBAlert } from 'mdbreact';
import { useLocation, Link } from 'react-router-dom';
import useLocalStorage from '../../useLocalStorage'
import './WishForm.css'

const WishForm = () => {
  const location = useLocation()
  const { book } = location.state
  const { bookUrl } = location.state
  const [inputs,setInputs] = useState({});
  const [alert, setAlert] = useState(false)
  const [token, setToken] = useLocalStorage('BookCaseToken', {})

  const onChangeHandler = useCallback(
    ({target:{name,value}}) => setInputs(state => ({...state, [name]:value}), [])
  )

  const wishSubmit = (e) => {
    e.preventDefault()
    const newWish = {
      'address': inputs,
      'book': book,
      'bookUrl': bookUrl
    }
    token.wishs.push(newWish)
    setToken({...token})
    setAlert(true)
    setTimeout(()=>{
      setAlert(false)
    }, 2000)
  } 
  return(
    <MDBContainer>
    {
      alert &&
      <MDBAlert color="success">
        Your pre-order has been received. You can see the books you have requested on the <Link to='/wish-list'>Wish List</Link> page.
      </MDBAlert>
    }
    <form
      className="wish-form m-4"
      onSubmit={wishSubmit}
    >
      <p className="h4 text-center mb-4">Please fill out the form to Wish</p>
      <MDBRow>
        <MDBCol md="6">
          <MDBCol md="12">
            <MDBInput
              value={inputs.firstName}
              name='firstName'
              type="text"
              label="*First Name"
              onChange={onChangeHandler}
              required
            >
            </MDBInput>
          </MDBCol>
          <MDBCol md="12">
            <MDBInput
              value={inputs.lastName}
              name='lastName'
              type="text"
              label="*Last Name"
              onChange={onChangeHandler}
              required
            >
            </MDBInput>
          </MDBCol>
          <MDBCol md="12">
            <MDBInput
              value={token.email}
              name='email'
              type="email"
              label="*Email"
              readOnly='true'
              required
            >
            </MDBInput>
          </MDBCol>
          <MDBCol md="12">
            <MDBInput
              value={inputs.phone}
              name='phone'
              type="tel"
              label="*Phone (Format:5555555555)"
              onChange={onChangeHandler}
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required
            >
            </MDBInput>
          </MDBCol>
          <MDBCol md="12">
            <MDBInput
              value={inputs.city}
              name='city'
              type="text"
              label="*City"
              onChange={onChangeHandler}
              required
            >
            </MDBInput>
          </MDBCol>
          <MDBCol md="12">
            <MDBInput
              value={inputs.cstate}
              name='cstate'
              type="text"
              label="*State"
              onChange={onChangeHandler}
              required
            >
            </MDBInput>
          </MDBCol>
          <MDBCol md="12">
            <MDBInput
              value={inputs.zip}
              name='zip'
              type="number"
              label="Zip"
              onChange={onChangeHandler}

            >
            </MDBInput>
          </MDBCol>
          <MDBCol md="12" className='mt-5'>
            <MDBBtn type="submit" className='w-100'>
              Submit
            </MDBBtn>
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </form>
  </MDBContainer>
  )
}
export default WishForm



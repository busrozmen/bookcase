import React, { useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
import './Header.css';
import useLocalStorage from '../../useLocalStorage'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [token, setToken] = useLocalStorage('BookCaseToken', {})
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }
  return(
    <MDBNavbar className={`${!(token.email) ? 'no-user' : ''}`} dark expand="md">
    <MDBNavbarBrand>
      <MDBNavLink to="/" className='white-text font-weight text-center'>BOOKCASE</MDBNavLink>
    </MDBNavbarBrand>
    { token.email && (
      <>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav className='left-items' left>
          <MDBNavItem>
            <MDBNavLink to="/education-books">Education Books</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/comic-books">Comic Book Books</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/religion-books">Religion Books</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/humor-books">Humor Books</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/wish-list">Wish List</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem className='signout-icon'>
            <MDBNavLink className="waves-effect waves-light" to="/login">
              <MDBIcon size="lg" icon="sign-out-alt" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
      </>
      )}
    </MDBNavbar>
  )
}
export default Header 

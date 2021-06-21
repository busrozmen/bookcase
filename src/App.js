import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Main from './components/main/Main'
import ComicBooks from './components/books/categories/Comic'
import EducationBooks from './components/books/categories/EducationBooks'
import HumorBooks from './components/books/categories/Humor'
import ReligionBooks from './components/books/categories/Religion'
import WishList from './components/wishList/WishList'
import WishForm from './components/wishForm/WishForm'
import Login from './components/login/Login'
import Book from './components/book/Book'
import useLocalStorage from "./useLocalStorage";

function App() {
  const [token, setToken] = useLocalStorage('BookCaseToken', {})
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
          {token.email ? <Main /> : <Login /> }
          </Route>
          <Route path="/comic-books">
            <ComicBooks />
          </Route>
          <Route path="/education-books">
            <EducationBooks />
          </Route>
          <Route path="/humor-books">
            <HumorBooks />
          </Route>
          <Route path="/religion-books">
            <ReligionBooks />
          </Route>
          <Route path="/wish-list">
            <WishList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/book-detail">
            <Book />
          </Route>
          <Route path="/wish-form">
            <WishForm />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

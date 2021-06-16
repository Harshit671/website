import React from 'react'
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Quote from "./Components/Quote";
import Books from './Components/Books';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <Header /> 
     <Main />
     <Quote />
     <Books />
     <Footer />
    </>
  );
}

export default App
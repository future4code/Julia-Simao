import "./styles.css";
import React, { useState } from 'react'
import MatchPage from './MatchPage/MatchPage'
import ShowMatches from "./ShowMatches/ShowMatches";
import { HomePage } from "./HomePage/HomePage"


export default function App() {

  const [currentPage, setCurrentPage] = useState('HomePage')

  const changePage = (currentPage) => {
    setCurrentPage(currentPage)
  }

  const renderCurrentPage = () => {
    if(currentPage === 'ShowMatches') {
      return <ShowMatches 
      changePage={changePage}/>
    } else if (currentPage === 'MatchPage') {
      return <MatchPage
      changePage={changePage} />
    } else {
      return <HomePage
      changePage={changePage} />
    }
  }


  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

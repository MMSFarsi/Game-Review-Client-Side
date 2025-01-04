import React from 'react'
import Banner from '../Components/Banner'
import HighestRatedGames from '../Components/HighestRatedGames'
import HowToAddReview from '../Components/HowToAddReview'
import About from '../Components/About'

const Home = () => {
  return (
 <div className='dark:bg-gray-900 dark:text-white'>
    <Banner ></Banner>
    <HighestRatedGames></HighestRatedGames>
    <HowToAddReview></HowToAddReview>
    <About></About>
 </div>
  )
}

export default Home
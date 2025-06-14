import React from 'react'
import Special from '../components/Special'
import Achievement from '../components/Achievement'
import ExploreEvents from '../components/ExploreEvents'
import JoinUs from '../components/JoinUs'
import HomeHero from '../components/HomeHero'
const Home = () => {
    return (
        <div>
            <HomeHero/>
            <Special />
            <Achievement />
            <ExploreEvents />
            <JoinUs />
        </div>
    )
}

export default Home

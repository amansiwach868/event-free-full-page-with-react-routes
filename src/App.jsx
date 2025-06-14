import './App.css'
import Header from './components/HomeHero'
import Footer from './components/common/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import UserName from './pages/UserName'
import Feed from './pages/Feed'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/user-name' element={<UserName />} />
        <Route path='/feed' element={<Feed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Home />
      <Events />
      <Feed />
      <UserName />
      <NotFound /> */}
      <Footer />
    </>
  )
}

export default App

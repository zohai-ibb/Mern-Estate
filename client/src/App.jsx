import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import PrivateRoute from './components/privateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route element={<PrivateRoute/>}> 
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing/>} />
          <Route path='/update-listing/:listingId' element={<UpdateListing/>} />
        </Route>
        <Route path='/sign-in' element={<Signin />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/listing/:listingId' element={<Listing />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

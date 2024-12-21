import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import HomeLayout from "./Layout/HomeLayout"
import Login from "./Pages/Login"
import Signup from "./Pages/SignUp"
import VerifyEmail from "./Pages/VerifyEmail"
import OAuthFailPage from "./Pages/OAuthFailPage"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
        </Route>

        <Route path="/fail" element={<OAuthFailPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verifyemail" element={<VerifyEmail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

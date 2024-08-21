import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserAuth from './pages/UserAuth'
import Content from './pages/Content'
import { RecoilRoot } from 'recoil'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/signin" element={<UserAuth type={"signin"} />} />
            <Route path="/signup" element={<UserAuth type={"signup"} />} />
            <Route path="/*" element={<Content />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  )
}

export default App

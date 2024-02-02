import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DevicesPage } from './Devices'
import { DevicePage } from './Device'
import { HomePage } from './Home'


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/devices' element={<DevicesPage />}/>
      <Route path='/devices/:name' element={<DevicePage />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import {BrowserRouter ,Routes, Route  } from 'react-router-dom'
import './App.css'
import Nav from './Components/nav/Nav'
import PartnerPage from './pages/PartnerPage'
import UsecasePage from './pages/UsecasePage'
import SingleCase from './pages/SingleCase'
import WhyUs from './pages/WhyUs'
import ClientsPage from './pages/ClientsPage'
import Privacy from './pages/privacy/Privacy'
import Certifications from './pages/certs/Certifications'
import Home from './pages/Home'
import ComputerVision from './pages/computervision/ComputerVision'
import AboutPage from './pages/about/AboutPage'
import Footer from './Components/footer/Footer'
import FinanceUseCase from './pages/usecases/FinanceUseCase'

import { CategoryContext } from './CategoryContext'
import { CategoryProvider } from './CategoryContext'



import AllExpertise from './pages/admin/ourexpertise/AllExpertise'
import Dashboard from './pages/admin/Dashboard'
import Finance from './pages/admin/usecases/Finance'
import UseCaseCategories from './pages/admin/usecases/UseCaseCategories'
import WhyUsAdmin from './pages/admin/WhyUsAdmin'
import VisionCategories from './pages/admin/visions/VisionCategories'
import ImageVisions from './pages/admin/visions/ImageVisions'
import AdminPartnerBenefits from './pages/admin/AdminPartnerBenefits'

import AllUseCases from './pages/admin/usecases/AllUseCases'
import AllAnnotationTypes from './pages/admin/annotationtypes/AllAnnotationTypes'
import Aerial from './pages/usecases/Aerial'
import Agriculture from './pages/usecases/Agriculture'
import Autonomous from './pages/usecases/Autonomous'
import Healthcare from './pages/usecases/Healthcare'
import Insurance from './pages/usecases/Insurance'
import Retail from './pages/usecases/Retail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CategoryProvider>
    <BrowserRouter>
    <div className="App">
      <Nav/>
        
      <div className="body-container container-fluid">
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-cases" element={<UsecasePage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/computer-visions" element={<ComputerVision />} />
        <Route path="/finance-services" element={<FinanceUseCase />} />

        <Route path="/aerial-services" element={<Aerial />} />
        <Route path="/autonomous-services" element={<Autonomous />} />
        <Route path="/agriculture-services" element={<Agriculture />} />
        <Route path="/insuarance-services" element={<Insurance />} />
        <Route path="/healthcare-services" element={<Healthcare />} />
        <Route path="/retail-services" element={<Retail />} />

        

        





        
        <Route path="/admin/expertise" element={<AllExpertise />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/finance" element={<Finance />} />
        <Route path="/admin/case-categories" element={<UseCaseCategories />} />
        <Route path="/admin/usecases" element={<AllUseCases />} />
        <Route path="/admin/annotation-types" element={<AllAnnotationTypes />} />
        <Route path="/admin/our-advantages" element={<WhyUsAdmin />} />
        <Route path="/admin/vision-categories" element={<VisionCategories />} />
        <Route path="/admin/image-visions" element={<ImageVisions />} />
        <Route path="/admin/partner-benefits" element={<AdminPartnerBenefits />} />
        
        
      </Routes>

      </div>
      <Footer/>
      
    </div>
    </BrowserRouter>
    </CategoryProvider>
  )
}

export default App

import './App.css'
// import { Carousel } from './components/Carousel/Carousel'
// import DoctorCard from './components/DoctorCard/DoctorCard'
import Navbar from './components/Navbar'
import StepperForm from './components/BookingForm/StepperForm'
import { TestimonialCarousel } from './components/Testimonial/TestimonialCarousel'
// import DataContext from './DataContext';


function App() {

  return (
    <div>
     <Navbar/>
      <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center bg-[url('./assets/pexels-cedric-fauntleroy-4269274.jpg')] grayscale">
      </div>
      <div className='h-60vh bg-transparent flex justify-center items-center'>
      <StepperForm />
      </div>
      <div className='h-96 bg-transparent'>
      <TestimonialCarousel/>
      </div> 
    </div>
  )
}

export default App

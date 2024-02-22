import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TestimonialCard from './TestimonialCard';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 5 },
};




export const TestimonialCarousel = () => (
    
    <AliceCarousel
        mouseTracking
        paddingLeft={0}
        paddingRight={0}
        responsive={responsive}
        autoPlay
        animationType="fadeout"
        infinite
        disableDotsControls
        disableButtonsControls
    >
         {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => (       
          <TestimonialCard/>  
   ))}
    </AliceCarousel>

);
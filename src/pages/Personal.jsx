// import Header from "../static/Header";

import Comments from "../Components/Comments";
import Freedom from "../Components/Freedom";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import PartnersOne from "../Components/PartnersOne";
import PartnersTwo from "../Components/PartnersTwo";
import SectionEight from "../Components/SectionEight";
import SectionFive from "../Components/SectionFive";
import SectionFour from "../Components/SectionFour";
import SectionSeven from "../Components/SectionSeven";
import SectionSix from "../Components/SectionSix";
import SectionThree from "../Components/SectionThree";


const Personal = () => {
    return ( <div>
      <Hero/>  
      <Info/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <Comments/>
      <PartnersOne/>
      <PartnersTwo/>
      <Freedom/>

    </div> );
}
 
export default Personal;
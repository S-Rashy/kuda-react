import styled from "styled-components";
import DownloadLink from "../Reuseables/DownloadLink";

import { GrApple } from "react-icons/gr"; 
import { FaGooglePlay } from "react-icons/fa";

import HeroImg from "../assets/heroImg.png"


const Hero = () => {
    return ( <HeroSection>

        <HeroLeft>
            <h2> The money app for Africans. </h2>
            <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda</p>
        

        <HeroLink>
            <DownloadLink Icon={<GrApple/>} Text="Download on the" Title="App Store"/>
            <DownloadLink Icon={<FaGooglePlay />} Text="GET IT ON" Title="Google Play"/>
        </HeroLink>

        <HeroP>
            <p>Fully Licensed by the CBN</p>
            <p>Deposits insured by </p>
        </HeroP>

        </HeroLeft>

        <HeroRight>
            <img src={HeroImg} alt="" />
        </HeroRight>


    </HeroSection> );
}
 
export default Hero;

const HeroSection = styled.div` 
    max-width: 1400px;
    display: flex;
    padding: 5px 50px;
    justify-content: space-around;
`
const HeroLeft = styled.div` 

border:1px solid;




`
const HeroLink = styled.div``
const HeroP = styled.div``
const HeroRight = styled.div` 
    max-width: 60%;
    img{
        width: 100%;
    }
`
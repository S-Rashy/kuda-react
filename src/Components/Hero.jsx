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
    /* height: calc(100vh-70px); */
    /* border: 1px solid; */
    display: flex;
    padding: 5px 50px;
    justify-content: space-around;
    align-items: center;
    margin: 10px auto 70px;

    @media (max-width:760px) {
           flex-direction: column;
           width: 80vw;
           text-align: center;
           padding: 5px;
        }

        @media (max-width:400px) {
            padding: 0;

        }
`
const HeroLeft = styled.div` 
    /* border:1px solid; */
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 30px;

    h2{
        font-size: 40px;
        max-width: 350px;
        color: #40196D;
        margin: 0;
    }
    p{
        width: 340px;
        font-weight: 500;
        margin: 12px;
        line-height: 25px;
    }
    @media (max-width:760px) {
           height: 400px;
           h2{
                text-align: center;
                width: 400px;
           }

        }
        @media (max-width:400px) {
           padding: 0;
           h2{
                
                width: 300px;
                font-size: 30px;
           }

        }   

`
const HeroLink = styled.div`
    display: flex;
    gap: 15px;
    width: 350px;
    h5{
        margin: 0;
    }

`
const HeroP = styled.div` 
    display: flex;
    font-size: 12px;
    gap: 10px;
    width: 350px;
    p{
        width: 200px;
        font-weight: 400;
        margin: 0;
    }

`
const HeroRight = styled.div` 
    max-width: 60%;
    @media (max-width:760px) {
            max-width: 90%;
            height: 480px;
            
        }
    img{
        width: 100%;
        height: 480px;

        @media (max-width:850px) {
            height: 300px;
            width:400px
        }

        @media (max-width:760px) {
            width: 100%;
            height: 500px;
            margin: 50px 0px;
            
        }
    }
`
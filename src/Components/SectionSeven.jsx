import styled from "styled-components";

import { FaAngleRight } from "react-icons/fa6";
import Section7Img from "../assets/section7.png"

const SectionSeven = () => {
    return ( <Section7>
        <Left7>
            <h2>We're always happy to help you.</h2>
            <p>  You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy. </p>
            <a href="#"> Get help <FaAngleRight /></a>
        </Left7>

        <Right7>
            <img src={Section7Img} alt="" />
        </Right7>

    </Section7> );
}
 
export default SectionSeven;

const Section7 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    padding: 50px;
    margin: 50px auto;
    /* border: 1px solid; */

    @media (max-width:800px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 50px;

   }

`
const Left7 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    h2{
        font-size: 35px;
        line-height: 45px;
        max-width: 350px;
        color: #40196D;
        margin: 20px auto;
    }
    p{
        font-size: 14px;
        line-height: 22px;
        max-width: 350px;
        margin: 20px auto 40px;
    }
    a{
        max-width: 350px;
        color: #40196D;
        font-weight: 600;
       
    }

    @media (max-width:700px) {
           padding: 0;
           h2{   
                width: 450px;
                font-size: 35px;
                border: 1px solid;
           }
           p{
            font-size: 13px;
            margin: 30px;
            width: 450px;
           }
           
        }  

    @media (max-width:450px) {
           h2{ 
                max-width: 300px;
                font-size: 30px;
           }
           p, a{
            width: 200px;
            font-size: 12px;
           }

        }  
    
`
const Right7 = styled.div`
    width: 60%;

    img{
        width: 100%;
        /* border: 1px solid; */
        margin: auto;

    }
    @media (max-width:800px){
    width: 90%;
    img{
        width: 80vw;
    }
    }
`
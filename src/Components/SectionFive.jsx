import styled from "styled-components";

import { FaAngleRight } from "react-icons/fa6";
import Section5Img from "../assets/section5.png"

const SectionFive = () => {
    return ( <Section5>
        <Left5>
            <h2>Save money as you spend it, seriously.</h2>
            <p>  You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.  </p>
            <a href="#"> See all our Savings <FaAngleRight /></a>
        </Left5>

        <Right5>
            <img src={Section5Img} alt="" />
        </Right5>

    </Section5> );
}
 
export default SectionFive;

const Section5 = styled.div`
    display: flex;
    justify-content: space-between;
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
const Left5 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
   
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
const Right5 = styled.div`
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
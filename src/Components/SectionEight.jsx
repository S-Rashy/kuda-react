import styled from "styled-components";

import { FaAngleRight } from "react-icons/fa6";
import Section8Img from "../assets/section8.png"

const SectionEight = () => {
    return ( <Section8>

        <Left8>
            <img src={Section8Img} alt="" />
        </Left8>

        <Right8>
            <h2>Fees as clear as glass.</h2>
            <p> We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
            <a href="#">See all our fees <FaAngleRight /></a>
        </Right8>

        

    </Section8> );
}
 
export default SectionEight;

const Section8 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    padding: 50px;
    margin: 50px auto;
    /* border: 1px solid; */

    @media (max-width:800px){
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 40px;

   }

`
const Right8 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    h2{
        font-size: 35px;
        line-height: 45px;
        max-width: 350px;
        color: #40196D;
        /* margin: 20px auto; */
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

    @media (max-width:630px) {
           padding: 0;
           h2{   
                /* width: 300px; */
                font-size: 35px;
           }
           p{
            font-size: 13px;
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
const Left8 = styled.div`
    width: 60%;
    /* border: 1px solid; */

    img{
        width: 90%;
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
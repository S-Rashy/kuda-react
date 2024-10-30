import styled from "styled-components";

import { FaAngleRight } from "react-icons/fa6";
import Section3Img from "../assets/section3.png"

const SectionThree = () => {
    return ( <Section3>
        <Left3>
            <h2>Your phone + our app + a debit card = a simpler life.</h2>
            <p>  We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.  </p>
            <a href="#"> Open An Account in Minutes <FaAngleRight /></a>
        </Left3>

        <Right3>
            <img src={Section3Img} alt="" />
        </Right3>

    </Section3> );
}
 
export default SectionThree;

const Section3 = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    padding: 50px;
    margin: 50px auto;
    /* border: 1px solid; */

    

`
const Left3 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    h2{
        font-size: 35px;
        line-height: 45px;
        width: 300px;
        color: #40196D;
        /* margin: 20px auto; */
    }
    p{
        font-size: 14px;
        line-height: 22px;
        width: 350px;
        margin: 20px auto 40px;
    }
    

`
const Right3 = styled.div`
    width: 60%;

    img{
        width: 100%;
        /* border: 1px solid; */
        margin: auto;

    }

`
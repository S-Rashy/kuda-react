import styled from "styled-components";

import Section4Img from "../assets/section4.png"
const SectionFour = () => {
    return ( <Section4>

        <Left4>
        <img src={Section4Img} alt="" />

        </Left4>

        <Right4>

            <h2>It’s your money, we just help you manage it.</h2>
            <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
        </Right4>

    
    </Section4> );
}
 
export default SectionFour;

const Section4 = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    padding: 50px;
    margin: 50px auto;

    @media (max-width:800px){
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 40px;
   
   }
`
const Right4 = styled.div`
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

    @media (max-width:680px) {
           padding: 0;
           h2{   
                width: 450px;
                font-size: 35px;
           }
           p{
            width: 300px;
            font-size: 13px;
           }
        }  

    @media (max-width:450px) {
           h2{ 
                max-width: 300px;
                font-size: 30px;
           }
           p{
            width: 200px;
            font-size: 12px;
           }

        }  
`
const Left4 = styled.div`
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
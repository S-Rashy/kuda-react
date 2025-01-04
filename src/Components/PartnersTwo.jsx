import styled from "styled-components";
import Valar from "../assets/partners2/Valar.svg"
import Entree from "../assets/partners2/entre.svg"
import Sbi from "../assets/partners2/sbi.svg"
import Target from "../assets/partners2/target.svg"
import Visa from "../assets/partners2/Visa.svg"

const PartnersTwo = () => {
    return ( <PartnersTwoDiv>
        <h2>Our Partners</h2>
        <PartnerLogo>
            <img src={Valar} alt="Valar" />
            <img src={Entree} alt="Entree" />
            <img src={Sbi} alt="Sbi" />
            <img src={Target} alt="Target" />
            <img src={Visa} alt="Visa" />

        </PartnerLogo>
    </PartnersTwoDiv> );
}
 
export default PartnersTwo;
const PartnersTwoDiv = styled.div`
    max-width: 14400px;
    background-color: #FBFBFB;
    margin: 50px auto;
    padding: 30px;

    h2{
    font-size: 32px;
    line-height: 45px;
    max-width: 250px;
    color: #40196D;
    margin: 20px auto;
    }
`
const PartnerLogo = styled.div`
   
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 50px auto;
    img{
        width: 110px;
    }
`
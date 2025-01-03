import styled from "styled-components"; 
import BBC from "../assets/partners1/bbc.svg"
import CNBC from "../assets/partners1/cnbc.svg"
import Euromoney from "../assets/partners1/euromoney.svg"
import TC from "../assets/partners1/tc.svg"
import WEF from "../assets/partners1/wef.svg"
import Fintech from "../assets/partners1/fintech.svg"

const PartnersOne = () => {
    return ( <PartnersOneDiv>
        <img src={TC} alt="TC" />
        <img src={WEF} alt="WEF" />
        <img src={Fintech} alt="Fintech" />
        <img src={BBC} alt="BBC" />
        <img src={CNBC} alt="CNBC" />
        <img src={Euromoney} alt="Euromoney" />
    </PartnersOneDiv> );
}
 
export default PartnersOne;
 
const PartnersOneDiv = styled.div`
    max-width: 14400px;
    display: flex;
    justify-content: space-evenly;
    margin: 50px auto;
    img{
        width: 110px;
    }
`
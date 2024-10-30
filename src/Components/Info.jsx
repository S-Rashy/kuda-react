import styled from "styled-components";

import InfoProps from "../Reuseables/InfoProps";

import Card from "../assets/card.png"
import Cashless from "../assets/cashless.png"
import Pay from "../assets/pay.png"
import Transfer from "../assets/transfer.png"
import Save from "../assets/save.png"

const Info = () => {
    return ( <InfoContainer>
        <InfoProps icon={Card} content="Order a Kuda card on the app with pickup and delivery options."/>
        <InfoProps icon={Cashless} content="Enjoy cashless payment options online and offline."/>
        <InfoProps icon={Pay} content="Pay your essential bills and buy gift cards easily."/>
        <InfoProps icon={Transfer} content="Get 25 free transfers to Nigerian banks every month."/>
        <InfoProps icon={Save} content="Save money automatically any time you spend."/>

    </InfoContainer>


     );
}
 
export default Info;

const InfoContainer = styled.div`
    margin: 0 auto;
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    @media (max-width:768px){
    flex-direction: column;
   }
`
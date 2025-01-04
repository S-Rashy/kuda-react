import styled from "styled-components";
import FreedomProps from "../Reuseables/FreedomProps";

const Freedom = () => {
    return ( <FreedomDiv>
        <h2> Choose the freedom you need</h2>

        <FreedomTable>
        <tr>
            <th></th>
            <th>Abc</th>
            <th>def</th>
        </tr>
            <FreedomProps one="Transfer Fee" two="Up to ₦50 plus V.A.T." three="25 free transfers every month"/>
            <FreedomProps one="Card Delivery" two="🫤" three="Yes"/>
            <FreedomProps one="Card Maintenance Fee" two="Up to ₦50 per quarter" three="No"/>
            <FreedomProps one="Alerts" two="Charge for SMS alerts" three="Free instant notifications"/>
            <FreedomProps one="Annual Interest" two="4%" three="Up to 12%"/>
            <FreedomProps one="Bill Payment Fee" two="Up to ₦100 per bill" three="No"/>
            <FreedomProps one="Instant Reversals" two="😒" three="Yes"/>
            <FreedomProps one="Maintenance" two="Yes" three="No"/>

        </FreedomTable>

    </FreedomDiv> );
}
 
export default Freedom;

const FreedomDiv = styled.div`
   margin: 50px auto ;
   max-width: 1440px;
   h2{
    font-size: 37px;
    line-height: 45px;
    max-width: 600px;
    color: #40196D;
    margin: 50px auto;
    }
`
const FreedomTable = styled.div`
    border: 1px solid;
    width: 900px;
    margin: auto;
    padding: 30px;
    td,th{
        width: 280px;
        height: 40px;
    }
    th{
        color: #40196D;
        font-size: 32px;
    }
`
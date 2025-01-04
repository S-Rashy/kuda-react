import styled from "styled-components";
import { FiMinusCircle } from "react-icons/fi";
import { MdCheckCircleOutline } from "react-icons/md";

const FreedomProps = ({one, two, three}) => {
    return ( <FreedomPropsDiv>
      
        <tr>
            <td>{one}</td>
            <td> <FiMinusCircle /> {two}</td>
            <td> <span> <MdCheckCircleOutline /> </span> {three}</td>

        </tr>

    </FreedomPropsDiv> );
}
 
export default FreedomProps;

const FreedomPropsDiv = styled.table`
    td{
        
    }
    span{
        font-weight: 500;
        color: #40196D;
    }
    
`
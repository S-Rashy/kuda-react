import styled from "styled-components";


const JoinButton = () => {
    return ( <JoinKuda>
        Join Kuda
    </JoinKuda> );
}
 
export default JoinButton;

const JoinKuda = styled.button`
    width: 120px;
    height: 45px;
    font-size: 13px;
    border-radius: 12px;
    background-color:#40196D ;
    color: white;

    &:hover{
        transition-timing-function: ease;
        transform: translateY(-5px);
    }
`
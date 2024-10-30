import styled from "styled-components";

const InfoProps = (props) => {
    return ( <Infodiv>
        <img src={props.icon} alt="" />
        <h5>{props.content}</h5>
    </Infodiv> );
}
 
export default InfoProps;

const Infodiv = styled.div`
    /* border: 1px solid; */
    width: 270px;
    height: 140px;
    padding: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   h5{
    color: #40196D;
    margin: 0;
    line-height: 18px;
   }
   img{
    width: 70px;
   }

   @media (max-width:768px){
    display: flex;
    align-items: center;
    width: 80vw;
    height: 80px;
   }
`
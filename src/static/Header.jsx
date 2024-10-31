import LogoKuda from "../assets/kuda.png"
import { FaCaretDown } from "react-icons/fa";
import styled from "styled-components";
import {Link} from "react-router-dom"

import Nigeria from "../assets/nigeria.png"
import JoinButton from "../Reuseables/JoinButton";


const Header = () => {
    return (
        <Container>
            <LogoNav>


            <Link to="/">
                <img src={LogoKuda} alt="" />
            </Link>

                <Navigations>

                    <Link to ="/">
                        <nav>
                        <span>Personal</span>
                        <FaCaretDown />
                        </nav>
                    </Link>

                    <Link to="/business">
                        <nav>
                        <span>Business</span>
                        <FaCaretDown />
                        </nav>
                    </Link>

                    <Link to="/company">    
                        <nav>
                        <span>Company</span>
                        <FaCaretDown />
                        </nav>
                    </Link>

                        <Link to >
                            <nav>
                            <span>Help</span>
                            <FaCaretDown />
                            </nav>
                        </Link>


                </Navigations>

            </LogoNav>

            <Buttons>
                <SignBtn> Sign In</SignBtn>
                <JoinBtn> <JoinButton/> </JoinBtn>
                <ConBtn> <img src={ Nigeria} alt="Nigerian flag" /></ConBtn>


            </Buttons>
        </Container>
        
    );
}
 
export default Header;


const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 50px ;
height: 60px;
/* border: 1px solid green; */
/* width: 100vw; */
align-items: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    a{
        text-decoration: none;
    }
`
const LogoNav = styled.div`
/* border:1px solid; */
display: flex;
justify-content: space-between;
width: 580px;
color: purple;
font-weight: 500;
font-size: 13px;
align-items: center;
height: 50px;

img{
    height:  45px;
    width: 70px;
}

`
const Navigations = styled.div`
/* border:1px solid; */
display: flex;
width: 450px;
justify-content: space-around;
    
@media (max-width:850px) {
           display: none;
        }


`
const SignBtn = styled.div`
    font-size: 13px;
    @media (max-width:850px) {
           display: none;
        }
`
const JoinBtn = styled.div`
    @media (max-width:850px) {
           display: none;
        }
`
const ConBtn = styled.div` 
    width: 40px;
    height: 40px;
    background-color: #b8e3b8;
    /* border: 1px solid; */
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 30px;
        height: 25px;
        border-radius: 10px;
    }
`

const Buttons = styled.div`
display: flex;
justify-content: space-between;
width: 300px;
align-items: center;

/* margin: 0px 35px; */
`



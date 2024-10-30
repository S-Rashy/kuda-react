import LogoKuda from "../assets/kuda.png"
import { MdArrowDropDownCircle } from "react-icons/md";
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
                        <MdArrowDropDownCircle />
                        </nav>
                    </Link>

                    <Link to="/business">
                        <nav>
                        <span>Business</span>
                        <MdArrowDropDownCircle />
                        </nav>
                    </Link>

                    <Link to="/company">    
                        <nav>
                        <span>Company</span>
                        <MdArrowDropDownCircle />
                        </nav>
                    </Link>

                        <Link to >
                            <nav>
                            <span>Help</span>
                            <MdArrowDropDownCircle />
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
height: 50px;
/* border: 1px solid green; */
width: 100vw;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

`
const LogoNav = styled.div`
/* border:1px solid; */
display: flex;
justify-content: space-between;
width: 650px;
color: purple;
font-weight: 500;
align-items: center;
height: 50px;

img{
    height:  50px;
}


`
const Navigations = styled.div`
/* border:1px solid; */
display: flex;
width: 500px;
justify-content: space-around;

`
const SignBtn = styled.div``
const JoinBtn = styled.div``
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
justify-content: space-around;
width: 400px;
align-items: center;

/* margin: 0px 35px; */
`



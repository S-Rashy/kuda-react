import styled from "styled-components";

const CommentProps = (props) => {
    return ( <CommentProp>
        <p>{props.SMcomment}</p>

        
        <div>
            <img src={props.DP} alt="" />
            <h5>{props.Name}</h5>
        </div>
    </CommentProp> );
}
 
export default CommentProps;

const CommentProp = styled.div`
    width: 300px;
    height: 220px;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
    img{
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
    p{
        width: 270px;
        font-size: 12px;
        font-weight: 500;
        /* margin: 20px auto; */
    }
    div{
        display: flex;
        width: 270px;
        /* margin: 20px auto; */
        gap: 15px ;

    }
`
import styled from "styled-components";

const CommentProps = (props) => {
    return ( <CommentProp>
        <img src={props.image} alt="" />
        <p>{props.comment}</p>
    </CommentProp> );
}
 
export default CommentProps;

const CommentProp = styled.div``
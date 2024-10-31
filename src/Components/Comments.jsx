import styled from "styled-components";

import CommentProps from "../Reuseables/CommentProps";

const Comments = () => {
    return ( <Comment>
        <CommentHead>Don't just take our word for it!  </CommentHead>
    </Comment> );
}
 
export default Comments;

const Comment = styled.div`
    
`
const CommentHead = styled.h2`
    /* text-align: center; */
    font-size: 32px;
    line-height: 45px;
    max-width: 550px;
    color: #40196D;
    margin: 20px auto;
`
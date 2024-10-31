import styled from "styled-components";

import CommentProps from "../Reuseables/CommentProps";

import Rash from "../assets/comments/Rash.jpg"
import Farouq from "../assets/comments/farouq.jpg"
import Hamzah from "../assets/comments/hamzah.jpg"
import Jide from "../assets/comments/jide.jpg"
import Lanre from "../assets/comments/lanre.jpg"
import Taiwo from "../assets/comments/mit.jpg"

const Comments = () => {
    return ( <Comment>
        <CommentHead>Don't just take our word for it!  </CommentHead>

        <CommentTransition>
        <CommentProps DP={Farouq} Name="Farouq Nelly" SMcomment ="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah"/>
        <CommentProps DP={Rash} Name="Sadiq Rashidah" SMcomment ="Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since i started using Kuda"/>
        {/* <CommentProps DP={Farouq} SMcomment ={ Never thought an app would stylish become my everyday way to bank and have access to physical cash. <br/> @kudabank is sleek}/> */}
        <CommentProps DP={Lanre} Name="@Lanre2222" SMcomment ="This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!"/>
        <CommentProps DP={Jide}  Name="Jide.Fullstack" SMcomment ="I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!"/>
        {/* <CommentProps DP={Farouq} SMcomment ="I highly recommend this app, it does what it says "The bank of the free". I have received my kuda card."/> */}

        <CommentProps DP={Farouq} Name="Farouq Nelly" SMcomment ="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah"/>
        <CommentProps DP={Rash} Name="Sadiq Rashidah" SMcomment ="Just joined the best Digital Bank in Nigeria. I have no complaints whatsoever since i started using Kuda"/>
        {/* <CommentProps DP={Hamzah} Name="@Honorable Hamzah"SMcomment ={ Never thought an app would stylish become my everyday way to bank and have access to physical cash. <br/> @kudabank is sleek}/> */}
        <CommentProps DP={Lanre} Name="@Lanre2222" SMcomment ="This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!"/>
        <CommentProps DP={Jide}  Name="Jide.Fullstack" SMcomment ="I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!"/>
        {/* <CommentProps DP={Taiwo} Name="@MIT" SMcomment ="I highly recommend this app, it does what it says "The bank of the free". I have received my kuda card."/> */}
        </CommentTransition>
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

const CommentTransition = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    overflow: visible;
    position: relative;
    animation-name: slide;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

   @keyframes slide {
  from  { right:0px; }

  to { right:100%; }
}
`
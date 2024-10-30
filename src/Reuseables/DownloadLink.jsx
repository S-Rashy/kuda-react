import styled from "styled-components";

const DownloadLink = (props) => {
    return ( <DownloadDiv>
        <img src={props.Icon} alt="" />
        <div>
            <p>{props.Text}</p>
            <h4>{props.Title}</h4>
        </div>

    </DownloadDiv> );
}
 
export default DownloadLink;

const DownloadDiv = styled.div`
    width: 130px;
    height: 50px;
    display: flex;
    padding: 3px;
    border:1px solid;
    border-radius: 10px;
    background-color: black;
    color: white;
    p{
        margin: 2px;
        font-size: 12px;
    }
    h4{
        margin: 0;
        /* font-size: 16px; */
    }
` 
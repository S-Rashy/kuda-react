import styled from "styled-components";

const DownloadLink = ({Icon, Text, Title  }) => {
    return ( <DownloadDiv>
        <div id="icon">{Icon} </div>
        <div>
            <h5>{Text}</h5>
            <h4>{Title}</h4>
        </div>

    </DownloadDiv> );
}
 
export default DownloadLink;

const DownloadDiv = styled.div`
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 5px;
    border:1px solid;
    border-radius: 10px;
    background-color: black;
    color: white;
    #icon{
        img{
            width: 30px;
        }
    }
    h5{
        margin: 2px;
        font-size: 11px;
        font-weight: 400;
        
    }
    h4{
        margin: 0;
        /* font-size: 16px; */
    }
` 
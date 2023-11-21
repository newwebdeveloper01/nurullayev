import styled from "styled-components";

export const Container=styled.div`
/* background: rgb(249,249,255); */
position: relative;
margin-top:300px;
text-align:start;
& > p{
    font-size: 40px;
    
}
`
Container.Card=styled.div`
padding: 40px;
    border-top: 0px solid black;
    text-align: start;
    & > h5{
        margin-top: 30px;
    }
    & > p{
        margin-top: 30px;
    }
    

`
export const Line=styled.div`
position: absolute;
top: 156px;
display: flex;
 height: 2px;
 width: 72%;
 background-color: rgb(225,225,232);
 z-index: 0;

`

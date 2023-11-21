import styled from "styled-components";

export const Container=styled.div`
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
    

`
export const Line=styled.div`
position: absolute;
top: 42px;
display: flex;
 height: 1px;
 width: 72%;
 background-color: rgb(225,225,232);
 z-index: 0;

`

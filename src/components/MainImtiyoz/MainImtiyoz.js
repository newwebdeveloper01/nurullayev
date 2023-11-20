import styled from "styled-components";

export const Container=styled.div`
margin-top:300px;
text-align:center;

& > p{
    font-size:40px;
    font-weight:bold;
    

}
    

`
export const CarsIcons=styled.div`
background: linear-gradient(148.79deg,#f82c2c 12.9%,#ec874e 29.15%,#e78b20 41.54%,#ff2633 70.18%,#ff1818 87.21%);
padding:20px;
border-radius:50%;

`
export const Card=styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content: center;
    
    

    & > p{
        text-align: center;
        color: rgb(123 125 134);

    }

    
`

export const Items=styled.div`
margin-top:70px;
height:300px;
& > div:hover{

-webkit-box-shadow: 4px 4px 23px 1px rgba(34, 60, 80, 0.59);
-moz-box-shadow: 4px 4px 23px 1px rgba(34, 60, 80, 0.59);
box-shadow: 4px 4px 23px 1px rgba(34, 60, 80, 0.59);
}
`
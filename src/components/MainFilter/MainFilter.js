import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  & > p{
    font-size:50px;
    font-weight:bold;

  }
 
.banner{
  background-image: linear-gradient(to left,  #BB2BFF , #2B59FF);
  border-radius:10px;
  color:#fff;
}
  `


export const Filtr= styled.div`
    margin-top:50px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    width: 100%;
    border:1px solid rgb(155,155,155);
    padding:30px;
    background-color:rgb(249,249,255);
    border-radius:10px;
    


`

export const Baner=styled.div`
    margin-top:100px;
    display:flex;
    font-size:30px;
    ${'' /* font-weight:bold; */}
    padding: 50px 40px;
    justify-content:space-between;
    ${'' /* background-color:#000; */}
    & > a{
      border:1px solid #fff;
      font-size:25px;
      padding: 20px;
      border-radius:10px;
      color:#fff;
      & > svg{
        margin-right:20px;
      }
    }

`
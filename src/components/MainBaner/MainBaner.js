import styled from "styled-components";
import IMG1 from '../../assets/main1.png'

export const Container = styled.div`
  margin: 100px  auto;
  padding: 0;
  width: 100vw;
  /* position: relative; */
  &::after{
    position: absolute;
    content: "";
    background: no-repeat url(${IMG1});
    background-size: contain;
    
    width: 600px;
    height: 600px;
    top: 250px;
    left: 1050px;
  }
  & > p{
 font-size: 60px;
  font-weight: bold;
      color: rgb(255,201,71) ;
  }
  & > h3{
    font-size: 60px;
  font-weight: bold;
  }
  `

Container.P= styled.div`
font-size: 30px;
max-width: 700px;
margin-bottom: 50px;
z-index: 100;
`
Container.BG= styled.div`
    position: absolute;
    right: 200px;
    bottom: 48px;
    width: 638px;
    height: 575.84px;
    background: linear-gradient(148.79deg,#f82c2c 12.9%,#ec874e 29.15%,#e78b20 41.54%,#6c3df4 54.7%,#ff2633 70.18%,#ff1818 87.21%);
    filter: blur(70px);
    border-radius: 250px 280px 300px 100px;
    z-index: 0;
`
import styled from 'styled-components'; 


export const AboutUsContainer = styled.div`
  background-color: #141414;
  
  display: flex;
  flex-direction: row;
  justify-content: center;

  .title{
    flex-direction: column;
    width: 426px;
    height: 114px;
    margin-top: 193px;
    margin-bottom: 338px;
    margin-right: 203px;
    
  }

  .description{
    flex-direction: column;
    width: 497px;
    height: 132px;
    margin-top: 120px;
    
  }

  h1{
    

    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;

  }

  p{
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #FFFFFF;
  }

  .services{
    display: flex;
    justify-content: row;
  }

  .servicesdescription{
    display: flex;
    justify-content: row;
  }

  h2{
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    padding-top: 16px;
  }

  button{
    width: 212px;
    height: 33px;
    background: transparent;
    color: white;
    margin-top: 64px;
    border: 2px solid #F5F5F5;
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #F5F5F5;
  }

  button:hover{
    background: white;
    color: #141414;
  }

  button:active{
    background-color: #1A1A1A;
    border: #1A1A1A;
    color: #FFFFFF;
  }

`;
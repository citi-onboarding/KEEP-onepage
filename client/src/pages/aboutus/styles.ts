import styled from 'styled-components'; 


export const AboutUsContainer = styled.div`
 

  background-color: #141414;
`;

export const Content = styled.div`
  display: flex;
  margin-left: 7%;
  margin-right: 7%;
  flex-direction: row;
  justify-content: space-between;

  .sidea{
    display: flex;
    flex-direction: column;

    width: 426px;
    height: 114px;

    margin-top: 193px;
    margin-bottom: 338px;
  }

  .sideb{
    display: flex;
    flex-direction: column;
  }

  h1{
    

    font-family: 'Monument Extended';
    font-style: normal;
  }

  p{
    width: 497px;
    height: 132px;

    margin-top: 120px;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #FFFFFF;
  }

  .services{
    display: flex;
    justify-content: row;
    margin-top: 40px;
  }

  h2{
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  .audiovisual{

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
  }
`;
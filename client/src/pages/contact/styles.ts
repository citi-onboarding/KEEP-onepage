import styled from 'styled-components'; 

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: 'Monument Extended';
  font-style: normal;

  background-color: #141414;

  #sidea{
    display: flex;
    flex-direction: column;
  }

  .vector1{
    width: 192px;
    margin-top: 140px;
    padding-bottom: 227px;
    align-self: start;
  }

  .vector3{
    margin-top: 60px;
    height: 100%;
    width: 350px;
    align-self: end;
  }

  .sideb{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .vector2{
    align-self: start;
    width: 288px;
  }

  .vector4{
    margin-top: 230px;
    width: 194px;
    align-self: end;
  }

  form{
  margin-right: 8%;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  margin-bottom: 112px;
  }

  h1 {
    text-align: center;
    font-size: 32px;
    margin-top: 58px;
  }

  label {
    margin-top: 40px;
    margin-bottom: 16px;
    margin-left: 10px;
  }

  input {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: white;
    padding: 7px 24px 8px; 

    width: 551px;
    height: 37px;
    background-color: transparent;
    box-sizing: border-box;
    border: 1px solid #F5F5F5;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.08);
  }

  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
   }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #141414 inset;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: white !important;
  }


  select {
    width: 100%;
    height: 37px;

    box-sizing: border-box;
    border: 1px solid #F5F5F5;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.08);

    background-color: transparent;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: black;

    padding-left: 24px;
  }

  textarea{
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: white;
    padding: 7px 24px 8px; 

    width: 551px;
    height: 80px;

    background-color: transparent;
    box-sizing: border-box;
    border: 1px solid #F5F5F5;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.08);
  }

  textarea:focus, input:focus, select:focus {
    outline: 0;
  }

  button{
    margin-top: 50px;
    width: 107px;
    height: 33px;
    background: transparent;
    border: 2px solid #F5F5F5;
    margin-left: 222px;

    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #FFFFFF;
  }

  button:hover{
    background: #F5F5F5;
    color: #1A1A1A;
  }

  button:active{
    background-color: #1A1A1A;
    border: #1A1A1A;
    color: #FFFFFF;
  }

`;
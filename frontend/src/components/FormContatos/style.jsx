import styled from "styled-components";

export const ContainerForm = styled.section`
  margin-top: -6%;
  height: 50vh;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;

    width: 100%;
    height: 100%;
    border-radius: 2%;
    border: solid;
    border-color: red;
    background-color: rgba(101, 101, 101, 1);

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1%;
      background-color: red;

      h5 {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      font-family: 'Courgette', cursive;
      color: #0b0b0b;
      }
      button {
      width: 10%;
      height: 100%;
      
      }
    }
    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5%;
      
    }
    button {
      width: 70%;
      height: 10%;
    }
  }

  @media (max-width: 440px){
    form{
      width: 52.6vw;
      div{
        width: 86%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
      }
      label{
        width: 86%;
        font-size: 12px;
      }
      input{
        width: 86%;
        font-size: 12px;
      }
      button{
        width: 86%;
        font-size: 12px;
      }
    }
  }
`;

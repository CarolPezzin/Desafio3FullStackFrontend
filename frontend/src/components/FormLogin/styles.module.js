import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3%;
  align-items: center;
  width: 40vw;
  height: 40vh;
  border-radius: 3%;
  border-color: white;
  border-style: solid;
  background-color: rgb(220,220,220);
  
  h2 {
    padding: 0%;
    margin-top: 8%;
    margin-bottom: 10%;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Courgette', cursive;
    
    color: rgba(101, 101, 101, 1);
  }
  input {
    width: 90%;
    height: 10%;
    padding: 10px 3px;
    font-size: 18px;
    
    border-color: rgb(219, 227, 233);
    border-style:solid;
    border-radius: 3%;
    color: rgba(0, 0, 0, 1);
  }
  input:focus {
    outline-color: rgba(97,218,251, 1);
  }
  input::placeholder {
    font-weight: bold;
    font-family: 'Courgette', cursive;
  }

  button{
    width: 23.3%;
    height: 10%;
    margin-top: 10%;
    margin-bottom: 10%;
    font-size: 20px;
    font-family: 'Courgette', cursive;
    font-weight: bold;
    color: rgba(101, 101, 101, 1);
    
    border-color: rgb(219, 227, 233);
    border-style: none;
    border-radius: 3%;
    background-color: white;
    cursor: pointer;
  }
  button:focus {
    outline-color: rgba(97,218,251, 1);
  }
    @media (max-width: 768px){
      height: 10vh;
      margin-left: 11%;
      margin-top: 2%;
      h2 {
      margin-top: 0%;
      font-size: 20px;
    }
    input {
      font-size: 10px;
    }
    select {
      font-size: 10px;
    }
  }
`
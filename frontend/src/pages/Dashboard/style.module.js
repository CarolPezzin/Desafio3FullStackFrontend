import styled from "styled-components";

export const Containerdash = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2%;

    width: 100%;
    height: 10%;

    background-color: rgb(220,220,220);

    h3 {
    width: 15%;
    padding: 1%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Courgette', cursive;
    
    color: rgba(101, 101, 101, 1);
    }

    button {
    width: 6.3%;
    padding: 1%;
    font-size: 20px;
    font-family: 'Courgette', cursive;
    font-weight: bold;
    color: rgba(101, 101, 101, 1);
    
    border-color: rgb(219, 227, 233);
    border-style: none;
    border-radius: 3%;
    background-color: rgb(220,220,220);
    cursor: pointer;
    }
  }

  section {
    display: flex;
    justify-content: space-between;
    width: 20%;
    height: 100%;
    padding: 2%;

    h2 {
    text-decoration: underline wavy red;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Courgette', cursive;
    
    color: rgba(101, 101, 101, 1);
    }

    button {
    width: 26%;
    height: 4%;
    padding: 1%;
    font-size: 20px;
    text-align: center;
    font-family: 'Courgette', cursive;
    font-weight: bold;
    color: rgba(101, 101, 101, 1);
    
    border-color: rgb(219, 227, 233);
    border-style: solid;
    border-radius: 10%;
    background-color: rgb(220,220,220);
    cursor: pointer;
    }
  }
`

import styled from "styled-components";

export const ContainerUl = styled.ul`
  background: purple;
  border-radius: 4px;
  

  li {
    background-color: #868e96;

    h4 {
      
      
    }

    nav {
      

      @media (max-width: 440px){
        gap: 40%;
      }

      h5 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        text-align: right;
        color: #868e96;
        padding: 0;
      }

      button {
        width: 2rem;
        height: 2rem;
        background: #121214;
        border: none;
        cursor: pointer;
      }
    }
  }
`;

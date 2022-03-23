import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1200px;
  width: 100%;

  margin: 0 auto;
  padding: 0 16px;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

  }

  button {
    background-color: var(--income-color);

    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--background-color);

    width: 40px;
    height: 40px;

    transition: filter 0.8s;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;

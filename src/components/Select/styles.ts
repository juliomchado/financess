import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }

  > div {
    width: 100%;
  }

  span {
    width: 100%;
    height: 14px;
    font-size: 1.4rem;
    color: var(--errors-color);
    margin-top: 8px;
  }
`;

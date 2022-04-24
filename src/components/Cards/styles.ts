import {TrendingDownRounded, TrendingUpRounded} from "@material-ui/icons";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 200px;

  background-color: var(--background-sections-color);

  border-radius: 10px;

  margin: 16px auto 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 0;
`;

export const CardContent = styled.div`
  padding: 0 32px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  border-right: 2px solid var(--separator-color);



  &:last-child {
    border: none;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 16px;
    margin-top: 20px;

    font-size: 3.2rem;
    font-weight: 500;

    color: var(--primary-text-color);
  }

  p:first-child {
    font-size: 2rem;
    font-weight: 400;

    color: var(--secondary-text-color);
  }

  p:last-child {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--tertiary-text-color);
  }

  svg {
    margin-left: 1.6rem;

    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const IncomeIcon = styled(TrendingUpRounded)`
  color: var(--income-color);
`;

export const OutcomeIcon = styled(TrendingDownRounded)`
  color: var(--outcome-color);
`;


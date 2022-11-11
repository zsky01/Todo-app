import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 375px) {
    padding: 0 2rem;
  }
`;
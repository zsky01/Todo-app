import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

interface NavigationProps {
  forMobile: boolean,
  path: string | undefined
}

const NavMobile = styled.div`
  margin-top: 1rem;
  padding: 1.2rem 1rem;
  background: var(--colors-item-bg);
  border-radius: var(--radii);
  font-weight: bold;
  color: var(--colors-2);
  font-size: 0.9rem;
  text-align: center;

  @media (min-width: 480px) {
    display: none;
  }
`;

const NavDesktop = styled.div`
  display: none;

  @media (min-width: 480px) {
    display: block;
    font-weight: bold;
  }
`;

const Button = styled(Link)<{$active: boolean}>`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: inherit;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  margin: 0 0.5rem;
  text-decoration: none;
  
  ${props => props.$active && css`
    color: var(--primary-colors);
  `};
`;

const Navigation = ({forMobile, path}: NavigationProps) => {
  const buttons = (<>
    <Button $active={path !== 'active' && path !== 'completed'} to='/'>All</Button>
    <Button $active={path === 'active'} to='/active'>Active</Button>
    <Button $active={path === 'completed'} to='/completed'>Completed</Button>
  </>);

  if (!forMobile) {
    return <NavDesktop>{buttons}</NavDesktop>;
  }

  return <NavMobile>{buttons}</NavMobile>;
};

export {Navigation};
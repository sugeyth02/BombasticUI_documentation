import { styled } from 'styled-components';
import { theme } from '../../../../styles/theme';

export const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  cursor: pointer;
  display: none;
  background: unset;
  border:unset ;
  span {
    display: block;
    width: 24px;
    height: 3px;
    background-color: ${theme.colors.white};
    position: relative;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: rotate(0deg);
    margin: 5px 0;
  }
  span:nth-child(1) {
    transform: ${({ $isOpen }) =>
        $isOpen
            ? 'rotate(45deg)  translateX(5px) translateY(6px)'
            : 'rotate(0deg)'};
  }
  span:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }
  span:nth-child(3) {
    transform: ${({ $isOpen }) =>
        $isOpen
            ? 'rotate(-45deg)  translateX(5px) translateY(-6px)'
            : 'rotate(0deg)'};
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`;
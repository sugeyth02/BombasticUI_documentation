import { styled } from 'styled-components';
import { theme } from '../../../styles/theme';

export const NavbarContainer = styled.div<{$transparent:boolean}>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ $transparent }) => ($transparent ? 'transparent' : theme.colors.black)};;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    gap: 4px;
    img {
      height: 63px;
      width: 79px;
    }
    p {
      margin-bottom: 8px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .navigation {
    display: flex;
    gap: 24px;
  }
  .navigation-mobile {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 24px;
    .logo {
      img {
        height: 43px;
        width: 59px;
      }
    }
    .navigation {
      display: none;
    }

    .navigation-mobile {
      display: block;
    }
  }
`;

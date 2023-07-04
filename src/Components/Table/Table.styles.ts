import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const TableWapper = styled.div`
    overflow: hidden;
     div[role='cell'],
      div[role='row'] {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-overflow: unset !important;
        div {
          white-space: break-spaces !important;
        }
      }
       @media (max-width: ${theme.breakpoints.md}) {
         max-width: 500px;
  }
     @media (max-width: ${theme.breakpoints.md}) {
         max-width: calc(100vw - 32px);
  }
`
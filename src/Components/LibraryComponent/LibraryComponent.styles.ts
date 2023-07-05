import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const ComponentWrapper = styled.div`
overflow: hidden;

input{
    max-width: 150px;
}

 @media (max-width: ${theme.breakpoints.sm}) {
      max-width: calc(100vw - 32px);
    .code{
        overflow: hidden;
        max-width: calc(100vw - 32px);

    }
  }
`
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const DocumentationWrapper = styled.div`
  display: flex;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px 60px 80px 60px;
    width: 100%;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    .content {
      padding: 40px 16px 80px 16px;
    }
  }
`;

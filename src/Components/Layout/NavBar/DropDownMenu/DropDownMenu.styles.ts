import { styled } from 'styled-components';
import { theme } from '../../../../styles/theme';

export const DropdownMenuContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  overflow: hidden;
  top: 83px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100vw')};
  z-index: 1;
  height: calc(100vh - 83px);
  width: 100vw;
  background-color: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  .content {
    height: calc(100vh - 83px);
    overflow-y: scroll;
    width: 100%;
    display: flex;
    padding: 24px 0;
    flex-direction: column;
    align-items: center;
    gap:24px;
    .documentation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:16px;
      .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .options {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 16px;
        }
      }
    }
  }
`;

import { styled } from 'styled-components';
import { theme } from '../../../styles/theme';

export const NavbarContainer = styled.div`
background-color: transparent;
padding: 20px 40px;
display: flex;
align-items: center;
justify-content: space-between;
.logo{
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    gap:4px;
    img{
        height: 63px;
        width: 79px;
     }
     p{
        margin-bottom: 8px;
     }
      &:hover{
      cursor: pointer;
      
    }
}
.navigation{
    display: flex;
    gap:24px;
}

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 24px;
    .logo{
        img{
        height: 43px;
        width: 59px;
     }
    }  
   }


`
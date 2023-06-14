import { styled } from 'styled-components';

export const NavbarContainer = styled.div`
background-color: transparent;
padding: 20px 40px;
display: flex;
align-items: center;
justify-content: space-between;
.logo{
    display: flex;
    align-items: flex-end;
    gap:4px;
    img{
        height: 63px;
        width: 79px;
     }
     a{
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


`
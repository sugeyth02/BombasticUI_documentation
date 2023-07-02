import { styled } from 'styled-components';
import { theme } from '../../../styles/theme';

export const FooterWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px 40px;

img{
    height: 85px;
    width: 100px;
}

p{
    font-family: 'Montserrat';
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color:${theme.colors.white}
}
 @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap:16px;
 
    img{
        height: 73px;
        width: 83px;
    }
       
    p{
        font-size: 16px;
        order: 3;
        margin:0;
        
    }
   }
`
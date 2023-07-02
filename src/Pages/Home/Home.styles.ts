import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const HomeContainer = styled.div`
overflow: hidden;
width: 100vw;
height: 100vh;
background: radial-gradient(130.88% 52.39% at 50.87% 47.61%, #3C3169 5.33%, rgba(3, 3, 3, 0) 100%);

.content{
    padding: 0 116px;
    margin-top: 20vh;
    h1{
        max-width:928px ;
    }

    a{
        margin-top: 80px;
        display: flex;
        align-items: center;
        gap:12px;
        
        img{
            width: 28px;
            height: 38px;
        }
    }
}
 @media (max-width: ${theme.breakpoints.lg}) {
     .content{
        padding: 0 24px;
     }


 }
  @media (max-width: ${theme.breakpoints.sm}) {
    .content{
        margin-top: 120px;
        a{
            img{
                width: 24px;
                height: 34px;
            }
        }
    }
       
   }
`
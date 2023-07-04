import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const AboutUsWrapper = styled.div`
background-color: ${theme.colors.lightBlack};
min-height: calc(100vh - 204px);
display: flex;
padding: 0 84px;
align-items: center;
justify-content: space-between;

img{
    height: 390px;
    width: 369px;
}

.content{
    display: flex;
    flex-direction: column;

    p{
        max-width: 663px;
        ul{
            list-style: none;
            padding-inline-start: unset;
            li{
                margin-left: unset;
            }
        }
        a{
            text-decoration: none;
            color:${theme.colors.yellow}

        }
        a:hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
}
@media (max-width: ${theme.breakpoints.lg}) {
 background-color: ${theme.colors.black};
 flex-direction: column;
 justify-content: center;
 gap:24px;

img{
    height: 290px;
    width: 269px;
}

 .content{
    order: 2;
    align-items: center;
    p{
        text-align: center;
    }
 }
}

`
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const SideBarWrapper = styled.div`
overflow: hidden;
position: sticky;
z-index: 1;
top:103px;
background-color: ${theme.colors.lightBlack};
height: calc(100vh - 103px);
width: 20vw;
min-width: 120px;
display: flex;
flex-direction: column;
padding: 0 24px;
.section{
    display: flex;
    flex-direction: column;
    gap:20px;
    padding:20px 0 ;
    .options{
        display: flex;
        flex-direction: column;
        gap:16px;
    }
}
&:hover {
  overflow-y: scroll;
}
&::-webkit-scrollbar
{
	width: 3px;
	background-color: ${theme.colors.black};
}
&::-webkit-scrollbar-thumb {
  background: ${theme.colors.white};
  border-radius: 5px;
}

@media (max-width: ${theme.breakpoints.sm}) {
 display: none;
}
`
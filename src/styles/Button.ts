import styled from 'styled-components';
import { theme } from './Theme';

export const PrimaryButton = styled.button`
 width: fit-content;
 background-color: transparent;
 border: 1.5px solid ${theme.colors.pink};
 border-radius: 10px;
 color:${theme.colors.white};
 box-shadow: 1px 1px 4px 1px ${theme.colors.yellow};;
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 23px;
 letter-spacing: 0.1em;
 padding: 14px 19px;
 text-decoration: none;
 &:hover{
    cursor: pointer;
 }
`
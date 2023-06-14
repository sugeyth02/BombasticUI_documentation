import styled from 'styled-components';
import { theme } from './theme';

export const PrimaryTitle = styled.h1`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 900;
   font-size: 64px;
   line-height: 78px;
   letter-spacing: 0.05em;
   color: ${theme.colors.white};
   @media (max-width: ${theme.breakpoints.lg}) {
    //TODO
   }
`
export const Logo = styled.a`
    font-family: 'Montserrat';
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${theme.colors.white};
    span {
       font-weight: 400; 
    }

    @media (max-width: ${theme.breakpoints.lg}) {
    //TODO
   }

`
export const PrimaryParagrah = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;    
    line-height: 34px;
    letter-spacing: 0.05em;
    color: ${theme.colors.white};
   @media (max-width: ${theme.breakpoints.lg}) {
    //TODO
   }
`
export const Title = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakpoints.lg}) {
    //TODO
   }
`
export const Paragraph = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.lg}) {
    //TODO
   }
`

export const SectionTitle = styled.a`
    font-family: 'Montserrat';
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.white};
    @media (max-width: ${theme.breakpoints.lg}) {
       //TODO
   }
`
export const Tag = styled.a`
    font-family: 'Montserrat';
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.white};
    @media (max-width: ${theme.breakpoints.lg}) {
       //TODO
   }
`
export const NavigationTag = styled.a < {active: boolean} >`
    font-family: 'Montserrat';
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${({ active }) => (active ? theme.colors.yellow : theme.colors.white)};
    &:hover{
      cursor: pointer;
      color: ${theme.colors.yellow};
    }
    @media (max-width: ${theme.breakpoints.lg}) {
       //TODO
   }
`
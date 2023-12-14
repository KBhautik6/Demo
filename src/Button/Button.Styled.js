import styled from 'styled-components';
import {theme} from "../theme"

export const PrimaryButton = styled.button`
    color: ${theme.offwhite};
    font:14px 'Arial';
    border: none;
    background-color:${theme.primarycolor};
    padding:11px 28px;
    margin:10px;
    cursor: pointer;
`;

export const SecondaryButton = styled.button`
    color: ${theme.defaultcolor};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color: ${theme.secondarycolor};
    padding:11px 28px;
    cursor: pointer;
`;

export const SuccesonButton=styled.button`
    color: ${theme.offwhite};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color:${theme.successcolor};
    padding:11px 28px;
    cursor: pointer;
`;

export const WarningButton=styled.button`
    color: #f6f9fc ${theme.offwhite};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color:${theme.warningcolor};
    padding:11px 28px;
    cursor: pointer;
`;

/* new stories is going to begining */

export const Primarybuttonhover=styled.button`
    border:1px solid black;
    color:  ${theme.primarycolor};
    font:14px 'Arial';
    border: none;
    background-color:${theme.primaryhover};
    padding:11px 28px;
    margin:10px;
    cursor: pointer;

    &:hover,
    active{
        background-color:${theme.primarycolor};
        color:${theme.offwhite};
    }
`

export const SecondButtonhover = styled.button`
    color: ${theme.defaultcolor};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color:#f6f9fc ${theme.offwhite};
    padding:11px 28px;
    cursor: pointer;

    &:hover,
    active{
        background-color: ${theme.defaultcolor};
        color: ${theme.offwhite};
    }
`;

export const SuccesonButtonhover=styled.button`
    color: ${theme.successcolor};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color: ${theme.offwhite};
    padding:11px 28px;
    cursor: pointer;

    &:hover,
    active{
        background-color: ${theme.successcolor}; 
        color:${theme.offwhite};
    }
`
export const WarningButtonhover=styled.button`
    color: ${theme.dangercolor};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color:#f6f9fc;
    padding:11px 28px;
    cursor: pointer;

    &:hover,
    active{
        background-color: ${theme.successcolor};
        color: ${theme.whiteoff};
    }
`
/* new stories is going to begining */

export const SaveHover=styled.button`
  border: 2px solid; // Add a unit (e.g., pixels)
  background-color:  ${theme.secondarycolor};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color:  ${theme.primarycolor};
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${theme.primarycolor};
    color: ${theme.white};
  }
`

export const SaveNew=styled.button`
  border: 2px solid  ${theme.primarycolor}; // Add a unit (e.g., pixels)
  background-color:  ${theme.primarycolor};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: ${theme.white};
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color:  ${theme.primarycolor};
    color: ${theme.black};
  }
`
/* new stories is going to begining */

export const PrimaryLink =styled.button`
    color:  ${theme.primarycolor};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color:${theme.offwhite};
    padding:11px 28px;
    cursor: pointer;
`;

export const SecondaryLink =styled.button`
   color: ${theme.defaultcolor};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color: ${theme.offwhite};
    padding:11px 28px;
    cursor: pointer;
`

export const SuccesonLink =styled.button`
   color: ${theme.defaultcolor};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color:${theme.offwhite}; 
    padding:11px 28px;
    cursor: pointer;
`

export const WarningLink =styled.button`
    color: ${theme.warningcolor};
    margin:10px;
    border: none;
    font:14px 'Arial';
    background-color: ${theme.offwhite};
    padding:11px 28px;
    cursor: pointer;
    align-items:center;
`

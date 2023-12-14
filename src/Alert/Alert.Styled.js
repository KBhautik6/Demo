import styled,{css} from "styled-components";
import { theme } from "../theme";

// import theme from '../theme';
export const common=css`
   width: 70%;
   border-radius: 10px;
   padding: 1rem 1.5rem;
   opacity: 0.9;
   margin: 0.5rem 0;
   font-size: 1.4rem; 
   border:1px solid black;
  
`

export const Primary=styled.div`
  ${common};
  background-color:${theme.primarycolor};
  color:${theme.offwhite};

`;
export const Secondary=styled.div`
 ${common};
 background-color:${theme.secondaryhover};
  color:${theme.defaultcolor};

`;
export const Sucesson=styled.div`
   ${common}
   background-color:${theme.successcolor};
  color:${theme.offwhite};

`;

export const Warning=styled.div`
   ${common}
   background-color:${theme.warningcolor};
   color:${theme.offwhite}
`;

export const Primaryoutline=styled.div`
   ${common}
   background-color:${theme.offwhite};
  color:${theme.primarycolor};

`
export const Secondaryoutline=styled.div`
   ${common}
   background-color:${theme.offwhite};
   color:${theme.defaultcolor};
   
`
export const Successoutline=styled.div`
   ${common}
   background-color:${theme.offwhite};
   color:${theme.successcolor};
`
export const Warningoutline=styled.div`
   ${common}
   background-color:${theme.offwhite};
   color:${theme.warningcolor};
`
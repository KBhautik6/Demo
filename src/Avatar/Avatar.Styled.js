import styled,{css} from "styled-components";
import {avatar} from '../theme'
export const common=css`
    display: flex;
   flex-direction: row;
   justify-content: center;
   max-width: 30%; 
    height: auto;
    margin-bottom: 10px; 
    align-items:center;
    /* border-radius:50px; */
`

export const Images1=styled.img`
    ${common};
    ${avatar.small}
    border-radius:50%;
`

export const Images2=styled.img`
    ${common};
    ${avatar.medium}
    border-radius:50%;
    
`
export const Images3=styled.img`
    ${common};
    ${avatar.large}
    border-radius:50%;
    
`
// New stories is going to start

export const radiuscommon=css`
    border-radius:10px;
`

export const CircularImages1=styled.img`
    ${common};
    ${radiuscommon};
    ${avatar.small}
`

export const CircularImages2=styled.img`
    ${common};
    ${radiuscommon};
    ${avatar.medium}
`

export const CircularImages3=styled.img`
    ${common};
    ${radiuscommon};
    ${avatar.default};
`
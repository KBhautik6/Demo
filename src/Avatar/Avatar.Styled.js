import styled,{css} from "styled-components";

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
    width:50px;
    height:50px;
    border-radius:50%;
`

export const Images2=styled.img`
    ${common};
    width:60px;
    height:60px;
    border-radius:50%;
    
`
export const Images3=styled.img`
    ${common};
    width:70px;
    height: 80px;
    border-radius:50%;
    
`
// New stories is going to start

export const radiuscommon=css`
    border-radius:10px;
`

export const CircularImages1=styled.img`
    ${common};
    ${radiuscommon};
    width:50px;
    height:50px;
`

export const CircularImages2=styled.img`
    ${common};
    ${radiuscommon};
    width:60px;
    height:60px;
`

export const CircularImages3=styled.img`
    ${common};
    ${radiuscommon};
    width:70px;
    height:70px;
`
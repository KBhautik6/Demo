import React from 'react';
import { StyledButton ,SecondButton, ThridButton, FourthButton, Primarybuttonhover,SecondButtonhover,ThridButtonhover,FourthButtonhover, Save_hover,Save_new,P1,P2,P3,P4} from './Button.Styled';
export const Button= () => {
  return (
    <div>
      {/* <button>Hello</button> */}
      <StyledButton>PRIMARY BUTTON</StyledButton>
      <SecondButton>SECONDARY BUTTON</SecondButton>
      <ThridButton>SUCESSON BUTTON</ThridButton>
      <FourthButton>WARNING BUTTON</FourthButton>
    </div>
  );
};
export const Hover=()=>{
  return(
    <div>
      <Primarybuttonhover>PRIMARY BUTTON</Primarybuttonhover>
      <SecondButtonhover>
      SECONDARY BUTTON
      </SecondButtonhover>
      <ThridButtonhover>
        SUCESSON
      </ThridButtonhover>
      <FourthButtonhover>
        WARNING BUTTON
      </FourthButtonhover>
    </div>
  );
};
export const Icon=()=>{
  return(
    <div>
      <Save_hover>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z" fill="currentColor"></path>
        </svg>{" "} SAVE BUTTON
        </Save_hover>
        <Save_new>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z" fill="currentColor"></path>
        </svg>{" "} SAVE BUTTON
        </Save_new>
    </div>
  );
};
export const Text_Button=()=>{
  return(
    <div>
      <span>
      <P1>PRIMARY LINK BUTTON</P1>
      <P2>SECONDARY LINK BUTTON</P2>
      <P3>SUCESSON LINK BUTTON</P3>
      <P4>WARNING LINK BUTTON</P4>
      </span>
    </div>
  );
};


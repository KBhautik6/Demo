import React from 'react';
import { PrimaryButton ,SecondaryButton, Primarybuttonhover,SecondButtonhover, SaveHover,SaveNew,PrimaryLink,SecondaryLink,SuccesonLink,WarningLink, SuccesonButton,WarningButton, SuccesonButtonhover,WarningButtonhover} from './Button.Styled';
export const Button= () => {
  return (
    <div>
      {/* <button>Hello</button> */}
      <PrimaryButton>PRIMARY BUTTON</PrimaryButton>
      <SecondaryButton>SECONDARY BUTTON</SecondaryButton>
      <SuccesonButton>SUCESSON BUTTON</SuccesonButton>
      <WarningButton>WARNING BUTTON</WarningButton>
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
      <SuccesonButtonhover>
        SUCESSON
      </SuccesonButtonhover>
      <WarningButtonhover>
        WARNING BUTTON
      </WarningButtonhover>
    </div>
  );
};
export const Icon=()=>{
  return(
    <div>
      <SaveHover>
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
        </SaveHover>
        <SaveNew>
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
        </SaveNew>
    </div>
  );
};
export const TextButton=()=>{
  return(
    <div>
      <span>
      <PrimaryLink>PRIMARY LINK BUTTON</PrimaryLink>
      <SecondaryLink>SECONDARY LINK BUTTON</SecondaryLink>
      <SuccesonLink>SUCESSON LINK BUTTON</SuccesonLink>
      <WarningLink>WARNING LINK BUTTON</WarningLink>
      </span>
    </div>
  );
};


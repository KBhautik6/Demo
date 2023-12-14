import React from "react";
import {Button,Hover,Icon,TextButton}  from "../Button/Button";

// import Buttonhover from "../Button/Buttonhover";


export default {
    title :'Button',
    component:Button,
};

export const Contained_Button= () => <Button/>
export const Outline_Floating_Button=()=><Hover/>
export const Icon_Button=()=><Icon/>
export const Text=()=><TextButton/>
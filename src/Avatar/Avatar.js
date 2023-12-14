import React from 'react'
import { Images1,Images2,Images3,CircularImages1,CircularImages2,CircularImages3 } from './Avatar.Styled';
const c={
    divcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: '30%', 
        height: 'auto',
        marginLeft:'50px',
        marginBottom: '10px', 
        borderRadius:'50px',
      },
}
export const Avatar = () => {
  return (
    <div style={c.divcontainer}>
        <Images1 src='https://i.pravatar.cc/60'>
        </Images1>
        <Images2 src="https://i.pravatar.cc/100">
        </Images2>
        <Images3 src="https://i.pravatar.cc/150">
        </Images3>
    </div>
  );
};
export const CircularAvtar=()=>{
    return (
        <div style={c.divcontainer}>
            <CircularImages1 src='https://i.pravatar.cc/60'>
            </CircularImages1>
            <CircularImages2 src="https://i.pravatar.cc/100">
            </CircularImages2>
            <CircularImages3 src="https://i.pravatar.cc/150">
            </CircularImages3>
        </div>
      );
};
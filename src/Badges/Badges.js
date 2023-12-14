import React from 'react';
import { Badges1,Badges2,Badges3 } from './Badges.Styled'
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
      icon:{
        position:'relative',
        top: 0,
        right: 0,
        width: '20px',
        height: '20px',
        backgroundColor: 'green',
        borderRadius: '50%',
        border: '2px solid white',

      }
}
export const Badges=()=>{
    return(
        <div style={c.divcontainer}>
            <Badges1 src="https://i.pravatar.cc/60">
            </Badges1>
            <div className={c.icon}></div>
            <Badges2 src="https://i.pravatar.cc/100">
            </Badges2>
            <Badges3 src="https://i.pravatar.cc/150">
            </Badges3>
        </div>
    );
};
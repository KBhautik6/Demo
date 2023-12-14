import React from 'react'
import { Primary,Primaryoutline,Secondary,Secondaryoutline,Successoutline,Sucesson,Warning, Warningoutline } from './Alert.Styled'

export  const Alert = () => {
  return (
    <div>
      <div>
        <Primary>
          Primary! This is a Primary Alert - Check it now!
        </Primary>
      </div>
      <div>
        <Secondary>
          Secondary! This is a Secondary Alert - Check it now!
        </Secondary>
      </div>
      <div>
      <Sucesson>
        Success! This is a Success Alert - Check it now!
      </Sucesson>
      </div>
      <div>
      <Warning>
        Warning! This is a Warning Alert - Check it now!
      </Warning>
      </div>
    </div>
  );
};

export const OutlineAlert=()=>{
  return(
    <div>
      <div>
        <Primaryoutline>
        Primary! This is a Primary Alert - Check it now!
        </Primaryoutline>
      </div>
      <div>
        <Secondaryoutline>
        Secondary! This is a Secondary Alert - Check it now!
        </Secondaryoutline>
      </div>
      <div>
        <Successoutline>
        Success! This is a Success Alert - Check it now!
        </Successoutline>
      </div>
      <div>
        <Warningoutline>
        Warning! This is a Warning Alert - Check it now!
        </Warningoutline>
      </div>

    </div>
  );
}
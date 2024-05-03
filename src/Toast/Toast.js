import React from 'react'
import {Container, Dangercomponent, Succesoncomponent, Warningcomponent} from './Toast.Styled'
 export const Toast = () => {
  return (
    <div>
        <Container>
            <Succesoncomponent>
                Successful toast for user action.
            </Succesoncomponent>
            <Warningcomponent>
                Warning toast for user action.  
            </Warningcomponent>
            <Dangercomponent>
                danger toast for user action.
            </Dangercomponent>
        </Container>
    </div>
  )
}


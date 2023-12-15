import styled,{css} from "styled-components";

export const marginvaluezero=css`
    margin-bottom :0px;
    margin-left: 0px;
    margin-right :0px;
    margin-top: 0px;
`

export const paddingvaluezero =css`
    padding-left:0;
    padding-right:0;
    padding-top:0;
    padding-bottom:0;
`

export const bordervaluefive=css`
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius :5px;
    border-top-right-radius: 5px;`

export const paddingvalueten=css`
    padding-bottom: 10px;
    padding-left :10px;
    padding-right: 10px;
    padding-top: 10px;
`

export const Container=styled.div`
    align-items :center;
    ${bordervaluefive};
    column-gap :10px;
    display :flex;
    flex-wrap: wrap;
    font-family: Rubik, sans-serif;
    font-size :6px;
    height :129.875px;
    justify-content :center;
    ${marginvaluezero};
    padding-bottom: 15px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top :15px;
    row-gap :10px;
    width: 904px;
`

export const Containercomponent=styled.div`
    background-color :rgb(246, 249, 252);
    ${bordervaluefive};
    column-gap :10px;
    display :flex;
    flex-direction: column;
    flex-wrap :nowrap;
    font-family: Rubik, sans-serif;
    font-size :6px;
    height :109.875px;
    ${marginvaluezero};
    max-width: 300px;
    padding-bottom: 10px;
    padding-left :10px;
    padding-right :10px;
    padding-top :10px;
    row-gap: 10px;
    transition-delay :0s;
    transition-duration: 0.5s;
    transition-property :all;
    transition-timing-function: ease;
    width :300px;
`
export const Titlecomponenet=styled.div`
    color :rgb(255, 78, 84);
    display: block;
    font-family :Rubik, sans-serif;
    font-size: 18px;
    font-weight: 500;
    height :21.5px;
    ${marginvaluezero}
    ${paddingvaluezero}
    width :300px;
`
export const Textcomponent=styled.div`
    color :rgb(74, 74, 104);
    display: block;
    font-family: Rubik, sans-serif;
    font-size: 14px;
    font-weight: 400;
    height :78.375px;
    line-height: 19.6px;
    ${marginvaluezero}
    ${paddingvaluezero}
    width :300px;
`

//Next stories css started

export const Trainingcontainer=styled.div`
    align-items :center;
    ${bordervaluefive}
    column-gap :10px;
    display :flex;
    flex-wrap: wrap;
    font-family: Rubik, sans-serif;
    font-size :6px;
    height :360.969px;
    justify-content :center;
    ${marginvaluezero}
    padding-bottom :15px;
    padding-left: 50px;
    padding-right :50px;
    padding-top :15px;
    row-gap: 10px;
    width :904px;
`

export const BadgedContainer=styled.div`
    background-color: rgb(246, 249, 252);
    ${bordervaluefive};
    column-gap :10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    font-family: Rubik, sans-serif;
    font-size :6px;
    height :340.969px;
    ${marginvaluezero};
    max-width: 300px;
    ${paddingvalueten}
    position: relative;
    row-gap :10px;
    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-property :all;
    transition-timing-function: ease;
    width :300px;
`

export const BadgedImage=styled.div`
    display :block;
    font-family :Rubik, sans-serif;
    font-size: 6px;
    height :201.504px;
    ${marginvaluezero};
    ${paddingvaluezero};
    position: relative;
    width: 300px;
`

export const Imgcontent=styled.image`
    ${bordervaluefive};
    display :inline;
    font-family: Rubik, sans-serif;
    font-size: 6px;
    height :200.004px;
    ${marginvaluezero};
    ${paddingvaluezero};
    overflow-clip-margin :content-box;
    overflow-x :clip;
    overflow-y :clip;
    width: 300px;
`

export const Cardtoptitle=styled.div`
    background-color: rgb(255, 78, 84);
    color :rgb(246, 249, 252);
    display :block;
    font-family :Rubik, sans-serif;
    font-size :14px;
    font-weight: 600;
    height :16.5px;
    left :-1px;
    ${marginvaluezero}
    padding-bottom :5px;
    padding-left :10px;
    padding-right: 10px;
    padding-top: 5px;
    position :absolute;
    top :20px;
    width: 82.8516px;
`

export const Cardtitle=styled.div`
    color :rgb(255, 78, 84);
    display :block;
    font-family: Rubik, sans-serif;
    font-size: 18px;
    font-weight: 500;
    height :21px;
    ${marginvaluezero};
    ${paddingvaluezero};
    width: 300px;
`

export  const Badgestext=styled.div`
    color: rgb(74, 74, 104);
    display: block;
    font-family :Rubik, sans-serif;
    font-size :14px;
    font-weight: 400;
    height: 97.9688px;
    line-height: 19.6px;
    ${marginvaluezero};
    ${paddingvaluezero};
    width :300px;
`

export const HorizontalContainer=styled.div`
    align-items: center;
    background-color: rgb(255, 237, 237);
    ${bordervaluefive}
    column-gap :10px;
    display :flex;
    flex-wrap: wrap;
    font-family: Rubik, sans-serif;
    font-size :6px;
    height :139.758px;
    justify-content: center;
    ${marginvaluezero}
    padding-bottom :15px;
    padding-left :50px;
    padding-right: 50px;
    padding-top: 15px;
    row-gap: 10px;
    width: 904.02px;
`
export const Horizontalcard=styled.div`
    background-color:rgb(246, 249, 252);
    ${bordervaluefive};
    column-gap :10px;
    display :flex;
    flex-direction: row;
    flex-wrap :nowrap;
    font-family: Rubik, sans-serif;
    font-size: 6px;
    height: 119.766px;
    ${marginvaluezero};
    max-width: 600px;
    ${paddingvalueten};
    transition-delay :0s;
    transition-duration: 0.5s;
    transition-property :all;
    transition-timing-function :ease;
    width :600px;
`

export const HorizontalImageContainer=styled.div`
    display :block;
    font-family: Rubik, sans-serif;
    font-size :6px;
    height :119.766px;
    ${marginvaluezero};
    ${paddingvaluezero};
    position: relative;
    width :100.828px;
`

export const Horizontalimage=styled.img`
    ${bordervaluefive};
    display :inline;
    font-family :Rubik, sans-serif;
    font-size :6px;
    height: 67.2188px;
    ${marginvaluezero};
    overflow-clip-margin :content-box;
    overflow-x :clip;
    overflow-y :clip;
    ${paddingvaluezero};
    width :100.828px;
`


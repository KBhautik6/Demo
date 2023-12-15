import React from 'react'

import { Container, Textcomponent, Titlecomponenet,
    Containercomponent,
    Trainingcontainer,
    BadgedContainer,
    BadgedImage,
    Imgcontent,
    Cardtoptitle,
    Cardtitle,
    Badgestext,
    HorizontalContainer,
    HorizontalImageContainer,
    Horizontalimage,
    Horizontalcard

 } from "./Card.Styled";

export const Card = () => {
  return (
    <div>
        <Container>
            <Containercomponent>
                <Titlecomponenet>
                    Eren Yeager
                </Titlecomponenet>
                <Textcomponent>    
                    Eren Yeager was a former member of the Survey Corps. He was the main protagonist of Attack on Titan. He lived in Shiganshina District,
                </Textcomponent>
            </Containercomponent>
        </Container>
    </div>
  )
};

export const CardBadges=()=>{
    return(
        <>
            <Trainingcontainer>
                <BadgedContainer>
                    <BadgedImage>
                        <Imgcontent src="https://picsum.photos/300/200/?blur">
                        </Imgcontent>
                    </BadgedImage>
                    <Cardtoptitle> 
                        The training
                    </Cardtoptitle>
                    <Cardtitle>
                        Survey Corps
                    </Cardtitle>
                    <Badgestext>
                        In the year 847, Eren, Mikasa Ackerman, and Armin Arlert
                        joined the 104th Training Corps. The three graduated with Eren
                        ranking 5th best, and they joined the Survey Corps following
                        the battle of Trost District
                    </Badgestext>
                </BadgedContainer>
            </Trainingcontainer>
        </>
    );
};

export const HorizontalCard=()=>{
    return(
        <>
            <HorizontalContainer>
                <Horizontalcard>
                    <HorizontalImageContainer>
                        <Horizontalimage src="https://picsum.photos/300/200/?blur" ></Horizontalimage>
                    </HorizontalImageContainer>
                </Horizontalcard>
            </HorizontalContainer>
        </>
    );  
};

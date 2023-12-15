import React from 'react'
import {Container,ImageContainer,Containercircular} from './Images.Styled';

export const Images = () => {
  return (
        <div>
            <Container>
                <ImageContainer>
                    <img src="https://picsum.photos/350/350/?blur"></img>
                </ImageContainer>
                <ImageContainer>
                    <img src="https://picsum.photos/350/351/?blur"></img>
                </ImageContainer>
          </Container>
          </div>
  );
};

export const CircularImages = () => {
    return (
          <div>
              <Containercircular>
                  <ImageContainer>
                      <img src="https://picsum.photos/350/350/?blur"></img>
                  </ImageContainer>
                  <ImageContainer>
                      <img src="https://picsum.photos/350/351/?blur"></img>
                  </ImageContainer>
            </Containercircular>
            </div>
    );
  };
  
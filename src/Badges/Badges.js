import React from 'react';
import {
  Container,
  SmImageStyled,
  BadgeContainer,
  SmallBadgesStyled,
  MlBadgesStyled,
  MlImageStyled,
  BadgemlContainer,
  BadgelgContainer,
  NumberBadgeThird,
  NumberBadgeSecond,
  NumberBadgeFirst,
  LgBadgesStyled,
  LgImageStyled,
  BadgeImageFirst,
  BadgeImageSecond,
  BadgeImageThird,
  BadgesContainerFirst,
  BadgesContainerSecond,
  BadgesContainerThird, // Corrected component name
} from './Badges.Styled';

export const YourComponent = () => {
  return (
    <Container>
      <BadgeContainer>
        <SmImageStyled src="https://i.pravatar.cc/60" alt="Your Alt Text" />
        <SmallBadgesStyled />
      </BadgeContainer>

      <BadgemlContainer>
        <MlImageStyled src="https://i.pravatar.cc/61" alt="Your Alt Text" />
        <MlBadgesStyled />
      </BadgemlContainer>

      <BadgelgContainer>
        <LgImageStyled src="https://i.pravatar.cc/64" alt="Your Alt Text" />
        <LgBadgesStyled />
      </BadgelgContainer>
    </Container>
  );
};

export const Badges = () => {
    return (
      <div>
        <Container>
          <BadgesContainerFirst>
            <BadgeImageFirst
              src="https://adorn-components.netlify.app/assets/images/cart.svg
              "
              alt="avatar-square-1"
            />
            <NumberBadgeFirst>10</NumberBadgeFirst>
          </BadgesContainerFirst>
  
          <BadgesContainerSecond>
            <BadgeImageSecond
              src="https://adorn-components.netlify.app/assets/images/cart.svg            "
              alt="avatar-square-2"
            />
            <NumberBadgeSecond>12</NumberBadgeSecond>
          </BadgesContainerSecond>
  
          <BadgesContainerThird>
            <BadgeImageThird
              src="https://adorn-components.netlify.app/assets/images/cart.svg
              "
              alt="avatar-square-3"
            />
            <NumberBadgeThird>15</NumberBadgeThird>
          </BadgesContainerThird>
        </Container>
      </div>
    );
  };
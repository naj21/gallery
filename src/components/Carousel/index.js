import React from 'react';
import styled, { css } from 'styled-components';

export const Carousel = styled.div`
  background-color: transparent;
  height: 400px;
  margin-top: 50px;
  width: 100%;
  position: relative;
`

export const Slides = styled.div`
  height: 100%;
  margin: auto;
  width: 100%;
`

export const Slide = styled.img.attrs(props => ({
  src: props.img,
}))`
  height: 100%;
  width: 100%;
  display: none;
  ${props => props.isCurrent && css`
    display: block;
  `}
`

export const SlideNav = styled.div`
  position: absolute;
  bottom: 0px;
  height: 30px;
  padding: 0 10px;
`

export const Controls = styled.div`
  background-color: transparent;
  bottom: 0;
  right: 10px;
  height: 30px;
  margin-left: 20px;
  position: absolute;
`

const SlideItem = styled.button`
  background-color: #dcdd;
  border-radius: 50%;
  height: 10px;
  left: 10px;
  margin-left: 5px;
  outline: none;
  width: 10px;
  :hover{
    cursor: pointer;
  }
  ${props => props.isCurrent && css`
    background-color: #fff;
  `}
`

const IButton = styled.button`
  background-color: transparent;
  border: 0;
  height: 20px;
  left: 10px;
  margin-left: 5px;
  outline: none;
  width: 20px;
  :hover{
    cursor: pointer;
  }
  ${props => props.isCurrent && css`
    background-color: #fff;
  `}
`

export const ProgressBar  = styled.div`
  background-color: #fff;
  bottom: 0;
  height: 10px;
  opacity: 0.4;
  position: absolute;
  width: 0px;
  animation: mymove 2s infinite;
  animation-play-state: paused;

  @keyframes mymove {
    from {width: 0%;}
    to {width: 100%;}
  }
  ${props => props.isPlaying && css`
    animation-play-state: running;
  `}
  ${props => props.isPlaying === false && css`
    width: 0%;
`}
`

export const SlideNavItem = (props) => (
  <SlideItem {...props} />
)

export const IconButton = (props) => (
  <IButton {...props} />
)
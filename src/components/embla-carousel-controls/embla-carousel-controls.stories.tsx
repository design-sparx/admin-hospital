import React from 'react';
import {DotButton, NextButton, PrevButton} from './embla-carousel-controls';

export default {
  title: 'Staff card',
  component: <>
    <DotButton onClick={() => null} selected={true}/>
    <PrevButton onClick={() => null} enabled={true}/>
    <NextButton onClick={() => null} enabled={true}/>
  </>
};

export const Default = (): JSX.Element => <>
  <DotButton onClick={() => null} selected={true}/>
  <PrevButton onClick={() => null} enabled={true}/>
  <NextButton onClick={() => null} enabled={true}/>
</>;

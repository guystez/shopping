import { AnimateKeyframes } from 'react-simple-animate';
import { Component } from 'react';



const Space = () => {
    return (
<AnimateKeyframes
play={false}
pause={true}
iterationCount="infinite"
direction="alternate"
duration={5}
keyframes={[
  'transform: rotateX(0) rotateY(0) rotateZ(0)',
  'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
]}
>
<Component />
</AnimateKeyframes>
 );
};

export default Space;
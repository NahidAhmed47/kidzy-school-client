import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../public/login-animation.json';

const LoginAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div>
            <Lottie 
	    options={defaultOptions}
        height={600}
        width={600}
      />
        </div>
    );
};

export default LoginAnimation;
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useOrientation = () => {
    const [screenInfo, SetScreenInfo] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            SetScreenInfo(result.screen);
        }

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    })

    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width,
    }
}

export default useOrientation;
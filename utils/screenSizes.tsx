import { useMediaQuery } from 'react-responsive';

interface IScreenSizes {
    isMobileAndSmaller: boolean,
    isLaptopAndBigger: boolean,
    isBigScreenAndBigger: boolean,
    isTabletAndBigger: boolean,
    isBiggerThanMobile: boolean
}

function useScreenSizes() :IScreenSizes  {
    const isMobileAndSmaller = useMediaQuery({
        query: '(max-width: 640px)'
    });

    const isBiggerThanMobile = useMediaQuery({
        query: '(min-width: 640px)'
    });

    const isLaptopAndBigger = useMediaQuery({
        query: '(max-width: 1224px)'
    });
    const isBigScreenAndBigger = useMediaQuery({ query: '(mix-width: 1824px)' });
    const isTabletAndBigger = useMediaQuery({ query: '(mix-width: 1224px)' });

    return {
        isMobileAndSmaller,
        isLaptopAndBigger,
        isBigScreenAndBigger,
        isTabletAndBigger,
        isBiggerThanMobile
    };
};

export default useScreenSizes;
export type { IScreenSizes };

import { useState, useEffect } from 'react';

const useOrientationChange = () => {
  const [isPc, setIsPortrait] = useState(
    typeof window !== 'undefined'
      ? window.innerHeight > window.innerWidth
      : false
  );
  const [width,setWidth] = useState() 

  useEffect(() => {
    const handleResize = () => {
      setWidth (window.innerWidth)
      const newIsPortrait = window.innerHeight >width;
      setIsPortrait(newIsPortrait);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {isPc,width};
};

export default useOrientationChange;

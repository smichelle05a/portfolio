import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      setScroll(window.scrollY > 5)
    })
  }, []);

  return scroll;
};

export default useScroll;
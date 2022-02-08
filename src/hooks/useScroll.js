import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrollListener = ()=>{
      setScroll(window.scrollY > 5)
    }
    window.addEventListener('scroll', scrollListener)

    return ()=> {window.removeEventListener('scroll', scrollListener)}
  }, []);

  return scroll;
};

export default useScroll;
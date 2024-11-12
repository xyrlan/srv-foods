import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useWindowInfo from './useWindowInfo'

export default function useNavbar() {
  const { isSM } = useWindowInfo();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // if (isSM)
      //   setVisible(currentScrollPos < 10 || false)
      // else
      //   setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      // setPrevScrollPos(currentScrollPos);
      // setIsNavbarAtTop(currentScrollPos === 0);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsNavbarAtTop(currentScrollPos === 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPos, visible]);

  return { visible, isNavbarAtTop };
}
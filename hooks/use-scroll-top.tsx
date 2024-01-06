import { useEffect, useState } from "react";

const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [threshold]);
  return scrolled;
};

export default useScrollTop;

import React, { useRef, useEffect } from "react";

interface ScrollableContainerProps {
  children: React.ReactNode;
  customClasses?: string;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
  customClasses = "",
}) => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className={customClasses} ref={scrollableRef}>
      {children}
    </div>
  );
};

export default ScrollableContainer;

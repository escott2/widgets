import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import video from "../../assets/Neo3.mp4";

interface ScrollVideoProps {
  customClasses?: string;
}

function ScrollVideo({ customClasses = "" }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll();

  const videoDuration = 10;
  const videoProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, videoDuration]
  );

  useEffect(() => {
    return videoProgress.onChange((latest) => {
      if (videoRef.current) {
        videoRef.current.currentTime = latest;
      }
    });
  }, [videoProgress]);

  // const handleMouseEnter = () => {
  //   if (myVideo.current) {
  //     myVideo.current.play();
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (myVideo.current) {
  //     myVideo.current.pause();
  //     // myVideo.current.currentTime = 0;
  //   }
  // };

  return (
    <video
      width="200px"
      ref={videoRef}
      muted
      loop
      className={customClasses}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <source src={video} type="video/mp4" />
      <img src="https://openweathermap.org/img/wn/10d@2x.png" />
    </video>
  );
}

export default ScrollVideo;

import React from "react";
import { ReactNode, FC } from "react";
import { CldVideo } from "next-cloudinary";
import Wrapper from "../CloudinaryVideo/wrapper";
import { useInView } from "react-intersection-observer";
import { LazyMotion, m } from "framer-motion";

const loadFeatures = () =>
  import("@components/FramerFeatures").then((res) => res.default);

interface VideoProps {
  children: ReactNode;
}

const Video: FC<VideoProps> = (props) => {
  const { children, ...rest } = props;

  const [ref7, isVisible7] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });
  const variants7 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  };
  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        className="opacity-75"
        ref={ref7}
        animate={isVisible7 ? "visible" : "hidden"}
        variants={variants7}
        transition={{ duration: 0.8, ease: "easeOut" }}
        {...rest}
      >
        <Wrapper>
          <CldVideo
            width="1000"
            height="600"
            autoPlay="on-scroll"
            src="videos/angelina_jordan_suspicious_minds"
          />
        </Wrapper>
      </m.div>
    </LazyMotion>
  );
};

export default Video;

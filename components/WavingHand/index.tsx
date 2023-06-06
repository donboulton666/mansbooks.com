import React from "react";
import { LazyMotion, m } from "framer-motion";
import * as emoji from 'node-emoji'

const loadFeatures = () =>
  import("@components/FramerFeatures").then((res) => res.default);

const WavingHand = () => (
  <LazyMotion features={loadFeatures}>
    <m.div
      style={{
        marginBottom: "-20px",
        marginRight: "-45px",
        paddingBottom: "20px",
        paddingRight: "45px",
        display: "inline-block",
      }}
      animate={{ rotate: 20 }}
      transition={{
        repeat: 25,
        repeatType: "mirror",
        duration: 0.4,
        delay: 0.5,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      👋
    </m.div>
  </LazyMotion>
);

export default WavingHand;

import React from "react";
import { useState, useEffect } from "react";
import Typist from "react-typist";
import Heart from "@components/icons/heart";

function BioTypist() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <div>
      {count ? (
        <Typist
          avgTypingDelay={50}
          onTypingDone={() => setCount(29)}
          cursor={{ hideWhenDone: true }}
        >
          <span> Lives and Works in Los Angeles Ca!</span>
          <Typist.Backspace count={34} delay={800} />
          <span>
            {" "}
            Writing Songs and Singing{" "}
            <span> Our Love to the World</span>
            <Heart />️
          </span>
        </Typist>
      ) : (
        ""
      )}
    </div>
  );
}

export default BioTypist;

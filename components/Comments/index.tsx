import React from "react";
import GiscusComments from "@components/GiscusComments";

const Comments = () => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <>
       <div className="mx-auto mb-4 mt-6 max-w-4xl">
        <GiscusComments mapping={url} />
      </div>
    </>
  );
};

export default Comments;

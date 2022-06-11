import React from "react";

function Quote({ stoic }) {
  return (
    <div>
      <div title={stoic.author}>{stoic.author}</div>

      <blockquote title={stoic.quote}>{stoic.quote}</blockquote>
    </div>
  );
}

export default Quote;

import React, { useEffect, useState } from "react";

const FadeEffect = ({ show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 0.7s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeEffect;

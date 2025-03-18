import React, { useState } from 'react';

const ProgressiveImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        filter: loaded ? 'none' : 'blur(20px)',
        transition: 'filter 0.5s ease-out'
      }}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
};

export default ProgressiveImage;

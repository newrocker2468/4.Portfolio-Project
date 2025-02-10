import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import CSS for effects

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      //   placeholderSrc='https://via.placeholder.com/300' // Example placeholder image
      className={`${className} mx-auto`}
      effect='blur' // Optional effect like "blur" or "opacity"
      width={width}
      height={height}
    />
  );
};

const MemoizedLazyImage = React.memo(LazyImage);
export default MemoizedLazyImage;

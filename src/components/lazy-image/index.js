import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { useIntersection } from './intersection-observer.js';
import styles from './styles.scss';

/**
 * Source code for LazyImage inpired by Shubham Khatri's demo
 * https://dev.to/shubhamreacts/progressively-loading-images-in-react-40lg
 */

const LazyImage = ({ url, thumb, className}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedThumb, setIsLoadedThumb] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const imgRef = useRef();

  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  // added this to make sure thumbnail is loaded first (sometimes loading is weird?)
  const handleLoadThumbnail = () => {
    setIsLoadedThumb(true)
  }

  return (
    <div
      className={classnames(styles.imageContainer, className)}
      ref={imgRef}
    >
      {isInView && (
        <>
          <img
            className={classnames(styles.thumb, {
              [styles.isLoaded]: !!isLoaded
            })}
            src={thumb}
            onLoad={handleLoadThumbnail}
          />
          {isLoadedThumb && <img
            className={classnames({
              [styles.isLoaded]: !!isLoaded
            })}
            src={url}
            onLoad={handleOnLoad}
          />}
        </>
      )}
    </div>
  );
};

export default LazyImage;
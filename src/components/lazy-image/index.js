import React, { useState, useRef, useEffect} from 'react';
import classnames from 'classnames';
import { useIntersection } from './intersection-observer.js';
import styles from './styles.scss';

/**
 * Source code for LazyImage inpired by Shubham Khatri's demo
 * https://dev.to/shubhamreacts/progressively-loading-images-in-react-40lg
 */

const LazyImage = ({ url, thumbnail, className}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedThumb, setIsLoadedThumb] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const imgRef = useRef();

  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  return (
    <div
      className={classnames(styles.imageContainer, className)}
      ref={imgRef}
    >
      {isInView && (
        <>
          <img
            className={classnames(styles.thumbnail, {
              [styles.isLoaded]: !!isLoaded
            })}
            src={thumbnail}
            // added this to make sure thumbnail is loaded first (sometimes loading is weird?)
            onLoad={() => setIsLoadedThumb(true)}
          />
          {isLoadedThumb && <img
            className={classnames({
              [styles.isLoaded]: !!isLoaded
            })}
            src={url}
            onLoad={() => setIsLoaded(true)}
          />}
        </>
      )}
    </div>
  );
};

export default LazyImage;
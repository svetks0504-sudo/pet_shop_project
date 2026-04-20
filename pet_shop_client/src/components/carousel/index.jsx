import styles from "./styles.module.css";
import { useRef } from "react";


function Carousel({ array, component: Component, path }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.sliderWrapper}>
      <button className={styles.arrowLeft} onClick={scrollLeft}>
        ←
      </button>
      <div className={styles.carousel} ref={sliderRef}>
        {array.map((item) => {
          return (
            <div  key={item.id}>
              <Component 
              elem={item} 
              key={item.id} 
              path={path}/>
            </div>
          );
        })}
      </div>
      <button className={styles.arrowRight} onClick={scrollRight}>
        →
      </button>
    </div>
  );
}

export default Carousel;

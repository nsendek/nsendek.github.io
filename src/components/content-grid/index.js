import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router-dom"
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from "./styles.scss";
import LazyImage from '../lazy-image';

const GridCell = ({data, onClick, clicked}) => (
  <div 
    onClick={onClick} 
    className="cell"
  >  
    <LazyImage 
      className={classNames(styles.thumbnail, {[styles.clicked] : clicked })} 
      src={data.thumbnail} 
    />
    <div className={styles.label} > <h2> {data.title} </h2> </div>
  </div>
);

const GridRow = (props) => {
  return (
    <div className={styles.row}> 
    </div>
  )
};

const Grid = (props) => {
  let history = useHistory();

  const gridRef = useRef();
  const [columns, setColumns] = useState(null);
  
  const defaultObjects =  props.contents.map( (datum,i) => ({
    ...datum,
    id : `cell${i}`
  }));

  const [gridObjects, setGridContents ] = useState(defaultObjects);
  const [expandedContents, setExpandedContents] = useState([]);

  useEffect(() => {
    function handleResize() {
      const gridComputedStyle = window.getComputedStyle(gridRef.current);
      const newColumns = gridComputedStyle["grid-template-columns"].split(" ").length
      if (newColumns != columns) {
        setColumns(newColumns);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  // useEffect(() => {
  //   // rearrange contents but row object between 
  //   if (columns) {
  //     let newGridObjects = [], count = 0, rowCount = 1;
      
  //     for (let i = 0; i < defaultObjects.length; i++) {
  //       newGridObjects.push(defaultObjects[i]);
  //       count++;
  //       if (count == columns) { // every <columns> items add a row containing content
  //         count = 0;
  //         newGridObjects.push({ id: `row${rowCount}` });
  //         rowCount++;
  //       }
  //     }

  //     if (!!count) newGridObjects.push({ id: `row${rowCount}` });
      
  //     setGridContents(newGridObjects);
  //   }
  // }, [columns]);

  // const handleClick = (id) => {
  //   setExpandedContents(prev => {
  //     let idx = prev.indexOf(id);
  //     if (idx != -1) {
  //       prev.splice(idx, 1);
  //       return [...prev];
  //     } else {
  //       return [...prev, id]
  //     }
  //   });
  // }

  const handleClick = (path) => {
    history.push(path);
  }
  
  return (
    <div ref={gridRef} className={classNames("grid-container", props.className)}>

      {gridObjects.map((datum,i) => (
        datum.id.includes('cell')
          ? <GridCell 
            clicked={expandedContents.includes(datum.id)} 
            onClick={() => handleClick(datum.path)} 
            key={datum.id} 
            data={datum} 
          />
          : <GridRow key={datum.id} />
      ))}

    </div>
  );
};

Grid.propTypes = {
  contents : PropTypes.arrayOf(PropTypes.shape({
    title : PropTypes.string.isRequired,
    thumbnail : PropTypes.string.isRequired,
    path : PropTypes.string.isRequired,
  })).isRequired,
  className : PropTypes.string
}

export default Grid;

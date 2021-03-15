import React, { useState } from "react";
import { slice, concat } from "lodash";
import { Button } from "react-bootstrap";
import Card from "./Card";
import Tryagain from "./Tryagain";

const LoadMore = ({ state }) => {
  const LENGTH = state.photos.length;
  const DATA = state.photos;
  const LIMIT = 12;

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  if (LENGTH === 0) {
    return <Tryagain />;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card list={list} />
      </div>
      {LENGTH <= 12
        ? null
        : showMore && (
            <div className="m-2 mb-3">
              <Button variant="danger" size="lg" block onClick={loadMore}>
                Load More Photos
              </Button>
            </div>
          )}
    </div>
  );
};

export default LoadMore;

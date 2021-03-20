import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import Loading from "../../images/loading2.gif";

const Card = ({ list }) => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      {list.map((item) => (
        <div key={item.id} className="p-2">
          <ProgressiveImage
            delay={500}
            src={item.img_src}
            className="object-cover h-full w-full"
            placeholder={Loading}
          >
            {(src) => (
              <img
                src={src}
                className="object-cover h-full w-full cursor-pointer"
                onClick={() => openInNewTab(item.img_src)}
                alt="rover"
              />
            )}
          </ProgressiveImage>
        </div>
      ))}
    </>
  );
};

export default Card;

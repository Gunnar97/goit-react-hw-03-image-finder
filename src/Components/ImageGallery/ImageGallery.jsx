import ImageGalleryItem from 'Components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({ imagesToView, handleModal }) => {
  const gallery = imagesToView.map(item => {
    return (
      <ImageGalleryItem item={item} handleModal={handleModal} key={item.id} />
    );
  });
  return <ul className="gallery">{gallery}</ul>;
};

// FilterByName.propTypes = {
//   onFilterChange: PropTypes.func.isRequired,
//   filterValue: PropTypes.string.isRequired,
// };
export default ImageGallery;

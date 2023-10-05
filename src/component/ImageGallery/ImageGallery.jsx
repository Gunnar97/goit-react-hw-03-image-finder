import ImageGalleryItem from 'component/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ imagesToView, handleModal }) => {
  const gallery = imagesToView.map(item => {
    return (
      <ImageGalleryItem item={item} handleModal={handleModal} key={item.id} />
    );
  });
  return <ul className="imageGallery">{gallery}</ul>;
};

ImageGallery.propTypes = {
  handleModal: PropTypes.func.isRequired,
  imagesToView: PropTypes.array.isRequired,
};
export default ImageGallery;

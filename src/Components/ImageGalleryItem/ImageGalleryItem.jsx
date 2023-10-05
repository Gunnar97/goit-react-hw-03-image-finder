import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const onImageGalleryItemClick = () => {
    props.handleModal(props.item.largeImageURL, props.item.tags);
  };
  return (
    <li className="imageGalleryItem" onClick={onImageGalleryItemClick}>
      <img
        className="imageGalleryItem-image"
        src={props.item.webformatURL}
        alt={props.item.tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  handleModal: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
export default ImageGalleryItem;

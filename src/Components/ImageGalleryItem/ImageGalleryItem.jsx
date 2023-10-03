import React from 'react';

const ImageGalleryItem = props => {
  const onImageGalleryItemClick = () => {
    props.handleModal(props.item.id, props.item.largeImageURL, props.item.tags);
  };
  return (
    <li className="gallery-item" onClick={onImageGalleryItemClick}>
      <img src={props.item.webformatURL} alt={props.item.tags} />
    </li>
  );
};

// FilterByName.propTypes = {
//   onFilterChange: PropTypes.func.isRequired,
//   filterValue: PropTypes.string.isRequired,
// };
export default ImageGalleryItem;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = props => {
  const loadMore = () => {
    props.onClick();
  };
  return <StyledLoadMore type="button" onClick={loadMore}></StyledLoadMore>;
};

// LoadMoreButton.propTypes = {
//   onClick: PropTypes.func,
// };

export default Button;

export const StyledLoadMore = styled.button`
  display: block;
  cursor: pointer;
  margin: 30px auto;
  padding: 15px 30px;
  border-radius: 4px;
  background-color: #1d2d44;
  color: #f0ebd8;
`;

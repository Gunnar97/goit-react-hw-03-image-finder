import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = props => {
  const loadMore = () => {
    props.onClick();
  };
  return (
    <StyledLoadMore type="button" onClick={loadMore}>
      Load More
    </StyledLoadMore>
  );
};

// LoadMoreButton.propTypes = {
//   onClick: PropTypes.func,
// };

export default Button;

export const StyledLoadMore = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 25px 25px 0;
  max-width: 450px;
  outline: none;
  border: none;
  border-radius: 4px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  background-color: #3775dd;
  box-shadow: 0 2px #21487f;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
`;

import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 80%;
  padding: 16px;
  color: black;
  font-weight: 700;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: fff;
  color: 000;
  border-right: 1px solid #bd7c2f;
  width: 100%;
  float: left;
  padding: 20px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ButtonDel = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out;
`;

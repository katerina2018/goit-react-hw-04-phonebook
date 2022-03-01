import styled from '@emotion/styled';

export const ContactForms = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContactInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const ContactLabel = styled.label`
  margin-bottom: 10px;
  display: block;
`;

export const ContactFormsButton = styled.button`
  background-color: #04aa6d;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
  transition: background-color 250ms linear;

  :hover {
    background-color: #3f7241;
  }
`;

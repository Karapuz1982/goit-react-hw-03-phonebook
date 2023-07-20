import styled from 'styled-components';



export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
 

`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  ${({ $isValid }) => $isValid === false && 'border: 1px solid red'}`;


 
export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #f44336;
  color: white;
  cursor: pointer;
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Number = styled.span``;

export const FilterLabel = styled(Label)`
  margin-top: 20px;
`;

import styled from '@emotion/styled';

export const FilterChip = styled.span`
  display : block;
  line-height : 1;
  // max-height : 18px;
  border-radius : 20px;
  background-color : ${props => props.isSelected ? "#8c8c8c": "#eaeaea"};
  color : ${props => props.isSelected ? "#fff": "#000"};
  padding : 10px 15px;
  margin : 4px;
  cursor : pointer;
  &:hover{
      box-shadow : 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  }
`;
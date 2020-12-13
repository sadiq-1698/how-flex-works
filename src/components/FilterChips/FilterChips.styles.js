import styled from '@emotion/styled';

export const FilterChip = styled.span`
  border-radius : 20px;
  background-color : ${props => props.isSelected ? "#eaeaea": "#fafafa"};
  padding : 8px 15px;
  margin : 4px;
  cursor : pointer;
  &:hover{
      box-shadow : 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  }
`;
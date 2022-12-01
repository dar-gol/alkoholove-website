import styled from "styled-components";
import { Row } from "../../styles/global.styled";

export const CommentUsability = styled(Row)`
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  background-color: ${({theme}) => theme.palette.Grey10};
  gap: 5px;
`
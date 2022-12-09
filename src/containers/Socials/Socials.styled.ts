import styled from "styled-components";
import {Description} from "../../components/Tile/Tile.styled";
import {Icon, Row} from "../../styles/global.styled";

export const DescriptionStyled = styled(Description)`
  margin-top: 10px;
`

export const RowStyled = styled(Row)`
  color: ${({theme}) => theme.palette.Grey40};
  font-size: 12px;
`

export const IconStyled = styled(Icon)`
  margin-right: 5px;
`
import styled from 'styled-components';
import { Row } from '../../styles/global.styled';

export const Progress = styled(Row)`
  min-width:100px;
  max-height:10px;
  background-color: ${({theme}) => theme.palette.Grey5};
  border-radius: 20px;
  overflow: hidden;
`

export const ProgressStatus = styled(Row)<{width: string}>`
  min-width:${({width}) => width};;
  max-height:10px;
  min-height: 10px;
  background-color: ${({theme}) => theme.palette.Primary70};
  border-radius: 20px;
`
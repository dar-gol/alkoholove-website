import 'styled-components';
import { IColors } from '../styles/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IColors;
    isHighContrast: boolean;
  }
}
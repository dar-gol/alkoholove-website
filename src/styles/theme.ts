import Colors from './colors';

const setMode = (
  mode: string,
  isHighContrast: boolean,
): 'light' | 'dark' | 'highContrastLight' | 'highContrastDark' => {
  if (isHighContrast && mode === 'light') return 'highContrastLight';
  if (isHighContrast && mode === 'dark') return 'highContrastDark';
  if (mode === 'light') return 'light';
  if (mode === 'dark') return 'dark';
  return 'light';
};

export const createTheme = (
  mode: string = 'light',
  isHighContrast: boolean = false,
) => {
  const validMode = setMode(mode, isHighContrast);
  return {
    palette: Colors[validMode],
    isHighContrast,
  };
};

export default createTheme;

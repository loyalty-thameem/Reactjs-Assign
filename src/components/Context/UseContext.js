import React from 'react';
export const ThemesProvide = React.createContext('');
export const useThemeConsumer = () => React.useContext(ThemesProvide);
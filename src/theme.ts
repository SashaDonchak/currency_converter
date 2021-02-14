import { DefaultTheme } from 'styled-components';

export const LightTheme: DefaultTheme = {
    palette: {
        mainColor: '#EAEAEA',
        shadow: '9px 9px 16px rgba(94, 94, 94, 0.25), -9px -9px 16px rgba(255, 255, 255, 0.81)'
    }
}

export const DarkTheme: DefaultTheme = {
    palette: {
        mainColor: '#26282B',
        shadow: '9px 9px 16px rgba(0, 0, 0, 0.25), -9px -9px 16px rgba(44, 47, 50, 0.81)'
    }
}
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            mainColor: string
            shadow: string
        }
    }
}
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { Theme } from '@mui/material/styles';

export const themeSettings = (mode: any) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: '#ef0938',
                        light: '#f53b61',
                        dark: '#a60627',
                        contrastText: "#fafafa",
                    },
                    secondary: {
                        main: '#e02f2f',
                        light: '#e65858',
                        dark: '#9c2020',
                        contrastText: "#fafafa",
                    },
                    text: {
                        primary: '#969696',
                        secondary: '#fcfcfc',
                        disabled: '#fef4da',
                        hint: '#f9c846',
                    },
                    background: {
                        paper: '#212121',
                        default: '#070707',
                        // nav: '#181818',
                        // paperOne: '#2d2c2c'
                    },
                    error: {
                        main: '#F44336',
                        light: '#E57373',
                        dark: '#D32F2F',
                        contrastText: '#fff',
                    },
                    warning: {
                        main: '#FF9800',
                        light: '#FFB74D',
                        dark: '#F57C00',
                        contrastText: 'rgba(0, 0, 0, 0.87)',
                    },
                    info: {
                        main: '#2196F3',
                        light: '#64B5F6',
                        dark: '#1976D2',
                        contrastText: '#fff',
                    },
                    success: {
                        main: '#4CAF50',
                        light: '#81C784',
                        dark: '#388E3C',
                        contrastText: 'rgba(0, 0, 0, 0.87)',
                    },
                    divider: "#fafafa",
                }
                : {
                    primary: {
                        main: "#212121",
                        light: "#4d4d4d",
                        dark: "#212121",
                        contrastText: "#fafafa",
                    },
                    secondary: {
                        main: "#212121",
                        light: "#141414",
                        dark: "#fcfcfc",
                        contrastText: "#fafafa",
                    },
                    text: {
                        primary: "#323232",
                        secondary: "#969696",
                        disabled: "#32280e",
                        hint: "#32280e",
                    },
                    background: {
                        default: '#fff',
                        nav: '#ededed',
                        paper: '#f5f5f5',
                        paperOne: '#e7e7e7'
                    },
                    error: {
                        main: '#F44336',
                        light: '#E57373',
                        dark: '#D32F2F',
                        contrastText: '#fff',
                    },
                    warning: {
                        main: '#FF9800',
                        light: '#FFB74D',
                        dark: '#F57C00',
                        contrastText: 'rgba(0, 0, 0, 0.87)',
                    },
                    info: {
                        main: '#2196F3',
                        light: '#64B5F6',
                        dark: '#1976D2',
                        contrastText: '#fff',
                    },
                    success: {
                        main: '#4CAF50',
                        light: '#81C784',
                        dark: '#388E3C',
                        contrastText: 'rgba(0, 0, 0, 0.87)',
                    },
                    divider: "#323232",
                }
            )
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536
            }
        },
        cssVariables: true
    }
}

interface ColorModeContextType {
    toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => { }
})

export const useMode = (): [Theme, ColorModeContextType] => {
    // const system_theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const modeInLocalStorage = localStorage.getItem('signal_flow_theme') === 'false' ? 'light' : 'dark';
    const [mode, setMode] = useState(modeInLocalStorage);
    // console.log(modeInLocalStorage, system_theme, mode)
    // console.log('mode from theme.js', mode, modeInLocalStorage)

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
            }
        }), []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode]
}
import React, { useEffect, useContext } from 'react'
import { useTheme } from '@mui/material'
import { ColorModeContext } from '../theme'

const ToggleSwitch = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    useEffect(() => {
        const toggleSwitch = document.getElementById('toggleSwitch');
        if (theme.palette.mode === 'dark') {
            // console.log('dark mode')
            toggleSwitch?.setAttribute('checked', 'true')
        } else {
            // console.log('light mode')
            toggleSwitch?.removeAttribute('checked')
        }
    }, [theme.palette.mode])

    const handleToggle = (e: any) => {
        // console.log('clicked', e.target.checked)
        colorMode.toggleColorMode()
        localStorage.setItem('signal_flow_theme', e.target.checked)
    }
    return (
        <div className="container">
            <label className="switch">
                <input type="checkbox" id="toggleSwitch" onClick={(e) => handleToggle(e)} />
                <div className="slider">
                    <div className="sun"></div>
                    <div className="moon"></div>
                    <div className="cloud cloud1"></div>
                    <div className="cloud cloud2"></div>
                    <div className="star star1"></div>
                    <div className="star star2"></div>
                    <div className="star star3"></div>
                    <div className="star star4"></div>
                    <div className="star star5"></div>
                </div>
            </label>
        </div>
    )
}

export default ToggleSwitch
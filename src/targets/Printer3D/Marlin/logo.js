/*
  logo.js - Specialise Products logo file
*/

import { h } from "preact"
import { useSettingsContext } from "../../../contexts"

const AppLogo = ({
    height = "120px",
    color = "currentColor",
    bgcolor = "white",
}) => {
    const { interfaceSettings } = useSettingsContext()
    if (
        interfaceSettings.current &&
        interfaceSettings.current.custom &&
        interfaceSettings.current.custom.logo
    )
        return (
            <span
                dangerouslySetInnerHTML={{
                    __html: interfaceSettings.current.custom.logo
                        .replace("{height}", height)
                        .replaceAll("{color}", color)
                        .replaceAll("{bgcolor}", bgcolor),
                }}
            ></span>
        )
    else
        return (
            <svg
                height={height}
                viewBox="0 0 240 240"
                xmlns="http://www.w3.org/2000/svg"
                class="esp3dlogo"
            >
                {/* Background Circle */}
                <circle cx="120" cy="120" r="118" fill="white" />

                {/* --- RINGS --- */}
                <circle cx="120" cy="120" r="116" stroke="#FBC02D" stroke-width="2.5" fill="none" />
                <circle cx="120" cy="120" r="78" stroke="#FBC02D" stroke-width="1.5" fill="none" />

                {/* --- TEXT PATHS --- */}
                <defs>
                    <path id="arcTop" d="M 23,120 A 97,97 0 0,1 217,120" />
                    <path id="arcBottom" d="M 23,120 A 97,97 0 0,0 217,120" />
                </defs>

                {/* --- TEXT --- */}
                <text font-family="'Courier New', 'Rockwell', 'Courier', serif" font-size="24" fill="#E65100" font-weight="900" letter-spacing="-0.5">
                    <textPath href="#arcTop" startOffset="50%" text-anchor="middle" dominant-baseline="central">
                        SPÉCIALISÉ PRODUCTS
                    </textPath>
                </text>

                <circle cx="23" cy="120" r="4.5" fill="#FBC02D" />
                <circle cx="217" cy="120" r="4.5" fill="#FBC02D" />

                <text font-family="'Arial', 'Helvetica', sans-serif" font-size="13" fill="#2E3192" font-weight="bold">
                    <textPath href="#arcBottom" startOffset="50%" text-anchor="middle" dominant-baseline="central">
                        Customized Solutions Company
                    </textPath>
                </text>

                {/* --- CENTRAL HIGH-PRECISION 3D PRINTER --- */}
                {/* Scaled down to 0.75 to fit nicely inside the ring with whitespace around it */}
                <g transform="translate(120, 120) scale(0.75) translate(-120, -120)">
                    
                    {/* 1. Main Aluminum Frame (Dark Blue) */}
                    <g stroke="#2E3192" stroke-width="1.5" fill="none" stroke-linecap="square">
                        {/* Vertical Pillars */}
                        <rect x="70" y="60" width="6" height="80" fill="#E65100" opacity="0.1"/>
                        <rect x="164" y="60" width="6" height="80" fill="#E65100" opacity="0.1"/>
                        <line x1="73" y1="60" x2="73" y2="140" stroke-width="2"/>
                        <line x1="167" y1="60" x2="167" y2="140" stroke-width="2"/>
                        
                        {/* Top Crossbar */}
                        <line x1="70" y1="60" x2="170" y2="60" stroke-width="2"/>
                        
                        {/* Bottom Base */}
                        <rect x="60" y="140" width="120" height="12" fill="#E65100" stroke-width="2"/>
                        <line x1="65" y1="152" x2="60" y2="157" /> {/* Feet */}
                        <line x1="175" y1="152" x2="180" y2="157" />
                    </g>

                    {/* 2. Motion System */}
                    <g stroke="#2E3192" stroke-width="1">
                        {/* Z-Axis Lead Screws */}
                        <line x1="80" y1="65" x2="80" y2="135" stroke-dasharray="2,2" opacity="0.6"/>
                        <line x1="160" y1="65" x2="160" y2="135" stroke-dasharray="2,2" opacity="0.6"/>
                        
                        {/* X-Axis Gantry Rail */}
                        <rect x="73" y="90" width="94" height="8" fill="white" stroke-width="1.5"/>
                    </g>

                    {/* 3. Extruder Head (Orange) */}
                    <g transform="translate(110, 88)">
                        <rect x="-10" y="0" width="20" height="14" fill="#E65100" stroke="#2E3192" stroke-width="1.5"/>
                        <circle cx="0" cy="7" r="5" fill="white" stroke="#2E3192" stroke-width="1"/>
                        <path d="M -3,14 L 3,14 L 0,19 Z" fill="#2E3192"/>
                    </g>

                    {/* 4. Print Bed & Object */}
                    <g transform="translate(120, 130)">
                        <path d="M -40,0 L 40,0 L 45,8 L -45,8 Z" fill="white" stroke="#2E3192" stroke-width="1.5"/>
                        <circle cx="-35" cy="10" r="2" fill="#E65100"/>
                        <circle cx="35" cy="10" r="2" fill="#E65100"/>
                        
                        {/* The Printed Object */}
                        <path d="M -12,0 L -14,-8 L -10,-18 L 10,-18 L 14,-8 L 12,0" fill="#E65100" stroke="#2E3192" stroke-width="1.2"/>
                        <line x1="-13" y1="-6" x2="13" y2="-6" stroke="white" stroke-width="0.5"/>
                        <line x1="-11" y1="-12" x2="11" y2="-12" stroke="white" stroke-width="0.5"/>
                    </g>

                    {/* 5. Electronics (LCD Screen) */}
                    <g transform="translate(150, 142)">
                         <rect x="0" y="0" width="18" height="12" fill="white" stroke="#2E3192" stroke-width="1"/>
                         <line x1="3" y1="3" x2="15" y2="3" stroke="#E65100" stroke-width="1"/>
                         <line x1="3" y1="6" x2="10" y2="6" stroke="#E65100" stroke-width="1"/>
                         <circle cx="14" cy="9" r="2" fill="#2E3192"/>
                    </g>

                    {/* 6. Filament Spool (Top Mounted) */}
                    <g transform="translate(120, 40)">
                        {/* Spool Holder Arm */}
                        <line x1="0" y1="0" x2="0" y2="20" stroke="#2E3192" stroke-width="2.5"/>
                        {/* Spool Body */}
                        <circle cx="0" cy="0" r="14" fill="white" stroke="#E65100" stroke-width="3"/>
                        <circle cx="0" cy="0" r="5" fill="none" stroke="#2E3192" stroke-width="1.5"/>
                        {/* Filament Strand */}
                        <path d="M 14,0 C 35,0 35,45 10,50" stroke="#E65100" stroke-width="2" fill="none" stroke-linecap="round"/>
                    </g>
                    
                </g>
            </svg>
        )
}

export { AppLogo }
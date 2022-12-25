import React, { FC } from "react"

const Back: FC<React.SVGAttributes<SVGElement>> = (props) => {
    return (
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <g style={{mixBlendMode:"overlay"}}>
            <rect width="300" height="300" fill="url(#pattern0)" fillOpacity="0.8"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_402_3" transform="scale(0.000244141)"/>
            </pattern>
</defs>
</svg>


    )
}

export default Back
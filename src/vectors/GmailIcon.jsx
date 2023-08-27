import React from 'react'

export default function GmailIcon({className, size}) {
  return (
    <svg width={size?.width ? size.width : '100%'} height={size?.height ? size.height : '100%'} className={className} viewBox="0 0 363 274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M82.5003 272.651V132.23L39.0041 92.3891L0 70.2803V247.871C0 261.582 11.0956 272.651 24.7506 272.651H82.5003Z" fill="#4285F4"/>
        <path d="M280.5 272.651H338.249C351.945 272.651 363 261.541 363 247.871V70.2817L318.822 95.6047L280.5 132.23V272.651Z" fill="#34A853"/>
        <path d="M82.5001 132.23L76.5815 77.3631L82.5001 24.8502L181.5 99.1908L280.5 24.8502L287.12 74.528L280.5 132.23L181.5 206.57L82.5001 132.23Z" fill="#EA4335"/>
        <path d="M280.5 24.8502V132.23L363 70.2803V37.2399C363 6.59588 328.061 -10.8734 303.601 7.50448L280.5 24.8502Z" fill="#FBBC04"/>
        <path d="M0 70.2805L37.9434 98.7737L82.5003 132.23V24.8504L59.3987 7.50469C34.8962 -10.8746 0 6.59609 0 37.2387V70.2791V70.2805Z" fill="#C5221F"/>
    </svg>

  )
}

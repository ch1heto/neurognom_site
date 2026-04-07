function AppIcon({ name, className = 'h-5 w-5' }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    'aria-hidden': 'true',
  };

  switch (name) {
    case 'sun':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path d="M12 2.5V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 19V21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4.93 4.93L6.7 6.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17.3 17.3L19.07 19.07" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M2.5 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M19 12H21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4.93 19.07L6.7 17.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17.3 6.7L19.07 4.93" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'moon':
      return (
        <svg {...props}>
          <path
            d="M19 14.5A7 7 0 0 1 9.5 5C6.9 6.02 5 8.55 5 11.5A7.5 7.5 0 0 0 12.5 19C15.45 19 17.98 17.1 19 14.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'play':
      return (
        <svg {...props}>
          <path d="M8.5 6.75L18 12L8.5 17.25V6.75Z" fill="currentColor" />
        </svg>
      );
    case 'personOff':
      return (
        <svg {...props}>
          <circle cx="12" cy="7.5" r="3" fill="currentColor" fillOpacity="0.9" />
          <path
            d="M5 18C5 14.41 7.91 11.5 11.5 11.5C15.09 11.5 18 14.41 18 18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M5 5L19 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'monitoring':
      return (
        <svg {...props}>
          <path
            d="M4 16L8 12L11 14.5L16.5 8L20 10.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M4 19H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="8" cy="12" r="1.2" fill="currentColor" />
          <circle cx="11" cy="14.5" r="1.2" fill="currentColor" />
          <circle cx="16.5" cy="8" r="1.2" fill="currentColor" />
        </svg>
      );
    case 'scale':
      return (
        <svg {...props}>
          <rect x="4" y="5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="14" y="5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="4" y="15" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M14 18H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17 15L20 18L17 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'device_thermostat':
      return (
        <svg {...props}>
          <path d="M10 5.5A2 2 0 0 1 14 5.5V13.2A4 4 0 1 1 10 13.2V5.5Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 9V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="17" r="1.8" fill="currentColor" />
        </svg>
      );
    case 'humidity_mid':
      return (
        <svg {...props}>
          <path d="M12 4C12 4 6.5 10 6.5 14C6.5 17.04 8.96 19.5 12 19.5C15.04 19.5 17.5 17.04 17.5 14C17.5 10 12 4 12 4Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9.5 14.5C10 15.5 10.9 16.3 12 16.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'light_mode':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3.5" fill="currentColor" />
          <path d="M12 3V5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 18.8V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5.64 5.64L7.2 7.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.8 16.8L18.36 18.36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M3 12H5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18.8 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5.64 18.36L7.2 16.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.8 7.2L18.36 5.64" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'water_ph':
      return (
        <svg {...props}>
          <path d="M12 4C12 4 7 9.41 7 13.3A5 5 0 0 0 17 13.3C17 9.41 12 4 12 4Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 13H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 11V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'electric_bolt':
      return (
        <svg {...props}>
          <path d="M13 2.8L6.5 12H11L10.5 21.2L17.5 11.5H13.2L13 2.8Z" fill="currentColor" />
        </svg>
      );
    case 'waves':
      return (
        <svg {...props}>
          <path d="M4 10C5.3 8.8 6.7 8.2 8 8.2C10.7 8.2 11.3 10.8 14 10.8C15.3 10.8 16.7 10.2 18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 14.5C5.3 13.3 6.7 12.7 8 12.7C10.7 12.7 11.3 15.3 14 15.3C15.3 15.3 16.7 14.7 18 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'psychology':
      return (
        <svg {...props}>
          <circle cx="8" cy="12" r="2" fill="currentColor" />
          <circle cx="16" cy="8" r="2" fill="currentColor" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
          <path d="M9.7 11L14.3 8.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.7 13L14.3 15.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 18.5C7.5 19.5 9.6 20 12 20C16.4 20 20 17.3 20 14V10C20 6.7 16.4 4 12 4C7.6 4 4 6.7 4 10V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'hub':
      return (
        <svg {...props}>
          <rect x="4" y="10" width="4" height="4" rx="1" fill="currentColor" />
          <rect x="10" y="4" width="4" height="4" rx="1" fill="currentColor" />
          <rect x="10" y="16" width="4" height="4" rx="1" fill="currentColor" />
          <rect x="16" y="10" width="4" height="4" rx="1" fill="currentColor" />
          <path d="M8 12H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default AppIcon;

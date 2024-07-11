/** @type {import('tailwindcss').Config} */
import { hairlineWidth, platformSelect } from 'nativewind/theme';

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const presets = [require("nativewind/preset")];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      border: withOpacity('border'),
      input: withOpacity('input'),
      ring: withOpacity('ring'),
      background: withOpacity('background'),
      foreground: withOpacity('foreground'),
      primary: {
        DEFAULT: withOpacity('primary'),
        foreground: withOpacity('primary-foreground'),
      },
      secondary: {
        DEFAULT: withOpacity('secondary'),
        foreground: withOpacity('secondary-foreground'),
      },
      destructive: {
        DEFAULT: withOpacity('destructive'),
        foreground: withOpacity('destructive-foreground'),
      },
      muted: {
        DEFAULT: withOpacity('muted'),
        foreground: withOpacity('muted-foreground'),
      },
      accent: {
        DEFAULT: withOpacity('accent'),
        foreground: withOpacity('accent-foreground'),
      },
      popover: {
        DEFAULT: withOpacity('popover'),
        foreground: withOpacity('popover-foreground'),
      },
      card: {
        DEFAULT: withOpacity('card'),
        foreground: withOpacity('card-foreground'),
      },
    },
    borderWidth: {
      hairline: hairlineWidth(),
    },
  },
};
export const plugins = [];

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return platformSelect({
        ios: `rgb(var(--${variableName}) / ${opacityValue})`,
        android: `rgb(var(--android-${variableName}) / ${opacityValue})`,
      });
    }
    return platformSelect({
      ios: `rgb(var(--${variableName}))`,
      android: `rgb(var(--android-${variableName}))`,
    });
  };
}

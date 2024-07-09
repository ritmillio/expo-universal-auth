import React from 'react';
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { darkTheme } from 'src/theme';

interface ButtonVariants {
  [key: string]: {
    button: (theme: any) => StyleProp<ViewStyle>;
    text: (theme: any) => StyleProp<TextStyle>;
  };
}

const buttonVariants: ButtonVariants = {
  primary: {
    button: (theme) => ({
      backgroundColor: theme.primary,
    }),
    text: (theme) => ({
      color: theme.primaryForeground,
    }),
  },
  secondary: {
    button: (theme) => ({
      backgroundColor: theme.secondary,
      borderColor: theme.primary,
      borderWidth: 1,
    }),
    text: (theme) => ({
      color: theme.primary,
    }),
  },
  outline: {
    button: (theme) => ({
      backgroundColor: 'transparent',
      borderColor: theme.primary,
      borderWidth: 1,
    }),
    text: (theme) => ({
      color: theme.primary,
    }),
  },
  destructive: {
    button: (theme) => ({
      backgroundColor: theme.destructive,
    }),
    text: (theme) => ({
      color: theme.destructiveForeground,
    }),
  },
  ghost: {
    button: (theme) => ({
      backgroundColor: 'transparent',
    }),
    text: (theme) => ({
      color: theme.primary,
    }),
  },
  link: {
    button: (theme) => ({
      backgroundColor: 'transparent',
    }),
    text: (theme) => ({
      color: theme.primary,
      textDecorationLine: 'underline',
    }),
  },
};

// SocialLoginButton component
interface SocialLoginButtonProps {
  onPress: () => void;
  title: string;
  variant?: keyof typeof buttonVariants;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  theme?: any;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  style,
  textStyle,
  theme = darkTheme,
}) => {
  const variantStyles = buttonVariants[variant];

  return (
    <Pressable
      style={({ pressed }) => [
        {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderRadius: theme.radius,
          marginVertical: 10,
          opacity: pressed ? 0.7 : 1,
        },
        variantStyles.button(theme),
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          {
            fontSize: 16,
            marginLeft: 10,
          },
          variantStyles.text(theme),
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

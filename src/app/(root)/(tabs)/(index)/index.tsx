import { Text, View } from 'react-native';
import { SocialLoginButton } from '@components/Button/social-login-button';

export default function Index() {
  return (
    <View>
      <Text className="text-light-text dark:text-dark-text pt-2 text-2xl text-bold text-center">
        Hello World
      </Text>
      <SocialLoginButton
        onPress={() => console.log('Button pressed')}
        title="Login with Google"
        variant="primary"
      />
    </View>
  );
}

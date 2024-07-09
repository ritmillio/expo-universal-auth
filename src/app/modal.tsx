import { View } from 'react-native';
import { StyledText as Text } from '@components/Text/StyledText';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center max-w-sm mx-auto">
      <Text className="text-2xl font-bold pb-5">Modal</Text>
    </View>
  );
}

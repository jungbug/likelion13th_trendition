import React, { useEffect } from "react";
import { View , Text, Button} from "react-native";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import LottieView from "lottie-react-native";

import { NAVIGATOR_BOTTOM_TAB } from "@utils/screens";


type Props = StackScreenProps<ParamListBase, "Landing Stack"	>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const handlePress = () => {
        navigation.replace(NAVIGATOR_BOTTOM_TAB);
    };

	return (
        <View className="h-full w-full justify-center px-4">
			<Text className="text-2xl font-bold text-center mt-8">
                loginScreen
			</Text>
            <Button title="클릭하세요" onPress={handlePress} />
		</View>

	);
};

export default LoginScreen;



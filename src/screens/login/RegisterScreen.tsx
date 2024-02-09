import React, { useEffect } from "react";
import { View , Text, Button} from "react-native";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import LottieView from "lottie-react-native";

import { NAVIGATOR_BOTTOM_TAB } from "@utils/screens";
import { NAVIGATOR_LOGIN } from "@utils/screens";


type Props = StackScreenProps<ParamListBase, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
    const handlePress = () => {
        navigation.replace(NAVIGATOR_LOGIN);
    };

	return (
        <View className="h-full w-full justify-center px-4">
			<Text className="text-2xl font-bold text-center mt-8">
                registerScreen
			</Text>
            <Button title="클릭하세요" onPress={handlePress} />
		</View>

	);
};

export default RegisterScreen;



import React, { useEffect } from "react";
import { View , Text, Button} from "react-native";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { createStackNavigator } from "@react-navigation/stack";

import { NAVIGATOR_BOTTOM_TAB } from "@utils/screens";
import { NAVIGATOR_REGISTER } from "@utils/screens";

type Props = StackScreenProps<ParamListBase, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const handlePress = () => {
        navigation.replace(NAVIGATOR_BOTTOM_TAB);
    };
    const registerHandler = () => {
        navigation.replace(NAVIGATOR_REGISTER);
    };

	return (
        <View className="h-full w-full justify-center px-4">
			<Text className="text-2xl font-bold text-center mt-8">
                loginScreen
			</Text>
            <Button title="클릭하세요" onPress={handlePress} />
            <Button title="회원가입" onPress={registerHandler}></Button>
		</View>

	);
};

export default LoginScreen;



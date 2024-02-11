import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import start from "@screens/start/startScreen";
import loginScreen from "@screens/login/LoginScreen";
import RegisterScreen from "@screens/login/RegisterScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import { NAVIGATOR_BOTTOM_TAB, NAVIGATOR_LOGIN, NAVIGATOR_REGISTER } from "@utils/screens";

const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false,
};

const Navigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name="start"
				component={start}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_LOGIN}
				component={loginScreen}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_REGISTER}
				component={RegisterScreen}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_BOTTOM_TAB}
				component={BottomTabNavigation}
				options={NAVIGATION_OPTIONS}
			/>
			
		</Stack.Navigator>
	</NavigationContainer>
);

export default Navigation;

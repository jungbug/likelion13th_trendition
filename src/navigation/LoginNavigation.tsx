import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import loginScreen from "@screens/login/LoginScreen";
import RegisterScreen from "@screens/login/RegisterScreen";
import { NAVIGATOR_BOTTOM_TAB, NAVIGATOR_LOGIN } from "@utils/screens";

const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false,
};

const Navigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATOR_LOGIN}
				component={loginScreen}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_BOTTOM_TAB}
				component={RegisterScreen}
				options={NAVIGATION_OPTIONS}
			/>
			
		</Stack.Navigator>
	</NavigationContainer>
);

export default Navigation;

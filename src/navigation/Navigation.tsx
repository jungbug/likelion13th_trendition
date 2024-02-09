import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import loginScreen from "@screens/login/LoginScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import { NAVIGATOR_BOTTOM_TAB, NAVIGATOR_LANDING } from "@utils/screens";

const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false,
};

const Navigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATOR_LANDING}
				component={loginScreen}
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

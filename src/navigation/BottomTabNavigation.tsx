import React from "react";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import useLocalize from "@hooks/useLocalize";
import HomeScreen from "@screens/HomeScreen";
import MenuScreen from "@screens/profile/AccountScreen";
import SearchScreen from "@screens/search/SearchScreen";
import PostScreen from "@screens/feed/PostScreen";
import {BOTTOM_TAB_SCREENS} from "@utils/screens";
import {TRANSLATION_KEYS} from "@utils/translations/translations";

const Tab = createBottomTabNavigator();

const TAB_SCREEN_OPTIONS = {
	drawerPosition: "right",
	headerLeft: () => false,
};

interface icons {
	color: string;
	size: number;
}

const HomeIcon: React.FC<icons> = ({ color, size }) => (
	<Icon name="hexagon" color={color} size={size} />
);

const SearchIcon: React.FC<icons> = ({ color, size }) => (
	<Icon name="magnify" color={color} size={size} />
);

const postIcon: React.FC<icons> = ({ color, size }) => (
	<Icon name="calendar-blank-outline" color={color} size={size} />
);

const accountIcon: React.FC<icons> = ({ color, size }) => (
	<Icon name="account" color={color} size={size} />
);

const BottomTabNavigation = () => {
	const {translate} = useLocalize();

	return (
		<Tab.Navigator screenOptions={TAB_SCREEN_OPTIONS}>
			<Tab.Screen
				// name={BOTTOM_TAB_SCREENS.HOME_SCREEN}
				name="tlqkf"
				component={HomeScreen}
				options={{
					tabBarLabel: translate(TRANSLATION_KEYS.MAIN),
					tabBarIcon: HomeIcon,
				}}
			/>
			<Tab.Screen
				name={BOTTOM_TAB_SCREENS.SEARCH_SCREEN}
				component={SearchScreen}
				options={{
					tabBarLabel: translate(TRANSLATION_KEYS.SEARCH),
					tabBarIcon: SearchIcon,
				}}
			/>
			<Tab.Screen
				name={BOTTOM_TAB_SCREENS.POST_SCREEN}
				component={PostScreen}
				options={{
					tabBarLabel: translate(TRANSLATION_KEYS.POST),
					tabBarIcon: postIcon,
				}}
			/>
			<Tab.Screen 
				name = {BOTTOM_TAB_SCREENS.ACCOUNT_SCREEN}
				component = {MenuScreen}
				options = {{
					tabBarLabel: translate(TRANSLATION_KEYS.ACCOUNT),
					tabBarIcon: accountIcon,
				}}
			/>
		</Tab.Navigator>
	);
};


export default BottomTabNavigation;

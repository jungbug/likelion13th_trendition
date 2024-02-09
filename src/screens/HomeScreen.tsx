import React from "react";
import {useLayoutEffect} from "react";
import {Text, View} from "react-native";


import {useNavigation} from "@react-navigation/native";
import moment from "moment";

import useLocalize from "@hooks/useLocalize";

const HomeScreen = () => {
	const navigation = useNavigation();
	const {translate} = useLocalize();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: translate("main"),
		});
	}, [navigation, translate]);


	return (
		<View className="h-full w-full justify-center px-4">
			<Text className="text-2xl font-bold text-center mt-8">
                Todays Date
			</Text>
			<Text className="text-center text-lg">
				{moment(new Date()).format("YYYY-MM-DD")}
			</Text>
		</View>
	);
};

export default HomeScreen;

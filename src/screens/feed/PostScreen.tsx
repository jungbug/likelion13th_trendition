import React from "react";
import {useLayoutEffect} from "react";
import {Text, View} from "react-native";


import {useNavigation} from "@react-navigation/native";

import useLocalize from "@hooks/useLocalize";

const FeedScreen = () => {
	const navigation = useNavigation();
	const {translate} = useLocalize();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: translate("post"),
		});
	}, [navigation, translate]);

	return (
		<View className="h-full w-full justify-center px-4">
			<Text className="text-2xl font-bold text-center mt-8">
                postScreen
			</Text>
		</View>
	);
};

export default FeedScreen;

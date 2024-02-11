import React, { useEffect } from "react";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { NAVIGATOR_LOGIN } from "@utils/screens";

type Props = StackScreenProps<ParamListBase, "start">;

const start: React.FC<Props> = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace(NAVIGATOR_LOGIN);
		}, 3000);
	}, [navigation]);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Icon name="hexagon" color={"pupple"} size={"300"} />
		</View>
	);
};

export default start;
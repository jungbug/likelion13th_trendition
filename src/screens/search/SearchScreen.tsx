import React from "react";
import { useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";


import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import useLocalize from "@hooks/useLocalize";

const HomeScreen = () => {
    const navigation = useNavigation();
    const { translate } = useLocalize();
    const [text, setText] = useState('');

    // TODO: This can be removed or changed according to project needs
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: translate("search"),
        });
    }, [navigation, translate]);


    return (
        <View className="h-full w-full justify-center px-4">
            {/* <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                className="text-2xl font-bold text-center mt-8"
                onChangeText={text => setText(text)}
                value={text}
            /> */}
            <Text className="text-2xl font-bold text-center mt-8">
                inputScreen
            </Text>
        </View>
    );
};

export default HomeScreen;

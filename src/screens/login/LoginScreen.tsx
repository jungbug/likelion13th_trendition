import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, } from "react-native";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { NAVIGATOR_BOTTOM_TAB } from "@utils/screens";
import { NAVIGATOR_REGISTER } from "@utils/screens";

type Props = StackScreenProps<ParamListBase, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        navigation.replace(NAVIGATOR_BOTTOM_TAB);
    };
    const registerHandler = () => {
        navigation.replace(NAVIGATOR_REGISTER);
    };

    return (
        <View className="flex h-full w-full bg-white justify-center">
            <View className="flex flex-col justify-center items-center py-12 px-4">
                <Text className="text-2xl font-poppins font-bold mb-4 text-gray-800">
                    로그인
                </Text>

                <TextInput
                    className="mb-4 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이메일 주소를 입력하세요"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    className="mb-4 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <View className="flex justify-end w-full mb-4 bg-indigo-500 rounded-full">
                    <Button
                        title="로그인"
                        onPress={handlePress}
                        color={"white"}
                    />
                </View>
                <Text className="text-gray-500">비밀번호를 잊으셨나요?</Text>

                <Text className="text-gray-500 mb-4">
                    계정이 없으신가요?
                    <Text
                        className="text-blue-500 cursor-pointer"
                        onPress={registerHandler}
                    >
                        회원가입
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default LoginScreen;



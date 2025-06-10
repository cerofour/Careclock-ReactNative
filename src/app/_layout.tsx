import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import '../../global.css';
import React from "react";

function RootLayout() {

	return (
		<>
			<Stack screenOptions={{
				animation: "slide_from_right",
				headerShadowVisible: false,
			}}>
				<Stack.Screen name="(tabs)" options={{headerShown: false}} />
				<Stack.Screen name="(add-reminder)" options={{headerShown: false}} />
			</Stack>
			<StatusBar style='auto'></StatusBar>
		</>
	);
}

export default RootLayout;
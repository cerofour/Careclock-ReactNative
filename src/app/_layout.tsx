import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import "../../global.css";
import React from "react";

import { store } from "../store/store";
import { Provider } from "react-redux";

function RootLayout() {
	return (
		<>
			<Provider store={store}>
				<Stack
					screenOptions={{
						animation: "slide_from_right",
						headerShadowVisible: false,
					}}
				>
					cc
					<Stack.Screen
						name="(add-reminder)"
						options={{ headerShown: false }}
					/>
				</Stack>
				<StatusBar style="auto"></StatusBar>
			</Provider>
		</>
	);
}

export default RootLayout;

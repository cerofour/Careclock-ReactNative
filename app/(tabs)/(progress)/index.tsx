import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "expo-router";
import IconButton from "../../../components/core/buttons/IconButton";

function Progress() {

	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: "Progreso",
			headerRight: () => (
				<IconButton buttons={[
					{
						icon: <Text>Exportar</Text>,
						onPress: () => console.log("Presionó notificaciones"),
						badge: true
					}
				]}/>
			),
			
		})
	}, [navigation]);


	
	return (
		<View className="flex-1 bg-background p-4"></View>
	);
}

export default Progress;
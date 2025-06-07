import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../../../components/core/buttons/IconButton";
import IconComponent from "../../../components/core/icons/IconComponent";
import DaysBar from "../../../components/calendar/DaysBar";
import TimeMedicationCard from "../../../components/calendar/TimeMedicationCard";

function Calendar() {

	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton buttons={[
					{
						icon: <IconComponent name="Bell" size={30}></IconComponent>,
						onPress: () => console.log("Presionó notificaciones"),
						badge: true
					}
				]}/>
			),
			
		})
	}, [navigation]);


	return (
		<View className="flex-1 bg-background p-4">
			<DaysBar></DaysBar>
			<TimeMedicationCard/>
		</View>
	);
}

export default Calendar;
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { COLORS } from "../../../components/colors";
import IconComponent from "../../../components/core/icons/IconComponent";
import DateTimeField from "../../../components/core/utils/DateTimeFIeld";
import CustomButton from "../../../components/core/buttons/CustomButton";
import ProgressBar from "../../../components/core/bars/ProgressBar";

function MedicationTimePicker() {

	const [date, setDate] = useState(new Date());
	const [hour, setHour] = useState(new Date());
	const router = useRouter();
	const params = useLocalSearchParams();

	return (
		<View className="flex-1 bg-background p-4">
			<View className="items-center mb-6">
				<IconComponent  
					name="Alarm" 
					size={64} 
					weight="duotone" 
				/>
				<Text className="text-primary text-minor-4xl font-bold text-center mt-3">¿A qué hora toma este medicamento?</Text>
			</View>
			<ScrollView>
				<View className="flex-row items-center mx-6 mb-8">
					<Text className="text-minor-lg">Selecciona la hora</Text>
					<DateTimeField className="ml-auto" mode="time" value={hour} onChange={setHour} placeholder="--:--"></DateTimeField>
				</View>
				<View className="flex-row items-center mx-6">
					<Text className="text-minor-lg w-40 flex-wrap">Selecciona la fecha de inicio</Text>
					<DateTimeField className="ml-auto" mode="date" value={date} onChange={setDate} placeholder="DD/MM/YY"></DateTimeField>
				</View>
			</ScrollView>
			<CustomButton 
				pressableClassName="mt-2 mx-2" 
				containerClassName="w-100 h-100 items-center justify-center py-3 bg-primary rounded-full" 
				onPress={() => {
					params.fixed_time = `${date.toLocaleDateString()} ${hour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
					router.push({
						pathname: 'medication/StockTracker',
						params: params
					})}}
			>
				<Text className="text-minor-lg text-white font-bold">Continuar</Text>
			</CustomButton>
			<ProgressBar color={COLORS.progress} progress='66%'/>
		</View>
	);
}

export default MedicationTimePicker;
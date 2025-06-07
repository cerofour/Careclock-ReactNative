import { View, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import IconComponent from "../../../components/core/icons/IconComponent";
import CustomButton from "../../../components/core/buttons/CustomButton";

function ReminderSavedScreen() {
	
	const router = useRouter();
	const params = useLocalSearchParams();

	return (
		<View className="flex-1 bg-background p-4">
			<View className="flex-1 items-center mb-5">
				<IconComponent  
					name="CheckCircle" 
					size={200} 
					weight="duotone" 
					duotoneColor="#1FBC00"
					color="white"
					duotoneOpacity={1}
				/>
				<Text className="text-primary text-minor-4xl font-bold text-center my-3">¡Tu recordatorio se ha guardado!</Text>
				<Text className="text-progress text-minor-lg text-center w-100">
					Puedes revisar tus recordatorios en la sección "Calendario"
				</Text>
			</View>
			<CustomButton 
				pressableClassName="mt-2 mx-2 " 
				containerClassName="w-100 h-100 items-center justify-center py-3 rounded-full" 
				onPress={() => router.replace("(add)")}
			>
				<Text className="text-minor-lg text-black font-bold">Crear otro recordatorio</Text>
			</CustomButton>
			<CustomButton 
				pressableClassName="mt-2 mx-2" 
				containerClassName="w-100 h-100 items-center justify-center py-3 bg-primary rounded-full" 
				onPress={() => router.replace("(calendar)")}
			>
				<Text className="text-minor-lg text-white font-bold">Ir al calendario</Text>
			</CustomButton>
		</View>
	);
}

export default ReminderSavedScreen;
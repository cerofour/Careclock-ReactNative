import { View, Text, ScrollView } from "react-native";
import { COLORS } from "../../../components/colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import IconComponent from "../../../components/core/icons/IconComponent";
import CustomButton from "../../../components/core/buttons/CustomButton";
import ProgressBar from "../../../components/core/bars/ProgressBar";


function MedicationFrecuency() {

	const router = useRouter();
	const params = useLocalSearchParams()

	return (
		<View className="flex-1 bg-background p-4">
			<View className="items-center">
					<IconComponent  
						name="BellSimpleRinging" 
						size={64} 
						weight="duotone" 
						duotoneOpacity={1} 
						duotoneColor="yellow"
					/>
					<Text className="text-primary text-minor-3xl font-bold text-center my-3">¿Con qué frecuencia tomas este medicamento?</Text>
			</View>
			<ScrollView >
				<CustomButton 
					pressableClassName="mb-3 w-full"
					containerClassName="px-8 py-3 mt-6"
					onPress={() => {router.push({pathname: "medication/MedicationTimePicker", params: params})}}>
					<Text className="text-minor-xl font-bold">Una vez al día</Text>
					<Text className="text-minor-lg">Elige la hora para tomar tu medicación.</Text>
				</CustomButton>
				<CustomButton pressableClassName="mb-3 w-full" containerClassName="px-7 py-3" onPress={() => {}}>
					<Text className="text-minor-xl font-bold">Cada ciertas horas</Text>
					<Text className="text-minor-lg">Elige la cantidad de horas entre cada toma.</Text>
				</CustomButton>
				<CustomButton pressableClassName="mb-3 w-full" containerClassName="px-7 py-3" onPress={() => {}}>
					<Text className="text-minor-xl font-bold">Cuando sea necesario</Text>
					<Text className="text-minor-lg">Tú eliges en qué momento tomar tu medicación.</Text>
				</CustomButton>
			</ScrollView>
			<CustomButton 
				pressableClassName="mt-2 mx-2" 
				containerClassName="w-100 h-100 items-center justify-center py-3 bg-primary rounded-full" 
				onPress={() => {}}
			>
				<Text className="text-minor-lg text-white font-bold">Continuar</Text>
			</CustomButton>
			<ProgressBar color={COLORS.progress} progress='33%'></ProgressBar>
		</View>
	);
}

export default MedicationFrecuency;
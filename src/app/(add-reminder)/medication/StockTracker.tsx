import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { COLORS } from "../../../components/colors";
import IconComponent from "../../../components/core/icons/IconComponent";
import CustomButton from "../../../components/core/buttons/CustomButton";
import ProgressBar from "../../../components/core/bars/ProgressBar";
import NumericInput from "../../../components/core/utils/NumericInput";

function StockTracker() {
	const router = useRouter();
	const params = useLocalSearchParams();
	const [stock, setStock] = useState('0');
	const [notify, setNotify] = useState('0');

	return (
		<View className="flex-1 bg-background p-4">
			<View className="items-center mb-5">
				<IconComponent  
					name="Pill" 
					size={64} 
					weight="duotone" 
					duotoneColor="red"
					duotoneOpacity={1}
				/>
				<Text className="text-primary text-minor-4xl font-bold text-center my-3">¡Casi listo!</Text>
				<Text className="text-progress text-minor-lg text-center w-100">
					Completa estos datos para avisarte cuando tu medicación está por acabarse
				</Text>
			</View>
			<ScrollView>
				<View className="flex-row items-center mx-6 mb-8">
					<Text className="text-minor-lg">Existencias</Text>
					<NumericInput containerClassName="ml-auto" value={stock} onChange={setStock} maxValue={100}/>
				</View>
				<View className="flex-row items-center mx-6">
					<Text className="text-minor-lg w-40 flex-wrap">Avisar cuando</Text>
					<NumericInput containerClassName="ml-auto" value={notify} onChange={setNotify} maxValue={parseInt(stock)}/>
				</View>
			</ScrollView>
			<CustomButton 
				pressableClassName="mt-2 mx-2" 
				containerClassName="w-100 h-100 items-center justify-center py-3 rounded-full" 
				onPress={() => router.push({pathname: "medication/ReminderSavedScreen", params: params})}
			>
				<Text className="text-minor-lg text-black font-bold">Omitir</Text>
			</CustomButton>
			<CustomButton 
				pressableClassName="mt-2 mx-2" 
				containerClassName="w-100 h-100 items-center justify-center py-3 bg-primary rounded-full" 
				onPress={() => router.push({pathname: "medication/ReminderSavedScreen", params: params})}
			>
				<Text className="text-minor-lg text-white font-bold">Continuar</Text>
			</CustomButton>
			<ProgressBar color={COLORS.progress} progress='100%'/>
		</View>
	);
}

export default StockTracker;
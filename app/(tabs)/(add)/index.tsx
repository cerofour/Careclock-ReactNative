import { View, Text, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "../../../components/core/buttons/CustomButton";

function Add() {
	const router = useRouter();

	return (
		<View className="flex-1 bg-background p-4">
			<ScrollView>
				<CustomButton onPress={() => {router.push("(add-reminder)/medication")}} containerClassName="flex-row gap-4">
					<Image
						source={require("../../../assets/medication_safety.jpg")}
						className="w-24 h-24 rounded-3xl m-1"
						style={{width: 96, height: 96}}
					/>
					<View className="flex-1">
						<Text className="text-minor-xl font-bold">
							Medicación
						</Text>
						<Text className="text-minor-base">
							Agrega recordatorios para pastillas, ampollas, jarabes, etc.
						</Text>
					</View>
				</CustomButton>
				<CustomButton onPress={() => {}} containerClassName="flex-row gap-4">
					<Image
						source={require("../../../assets/physical_activity.png")}
						className="w-24 h-24 rounded-3xl m-1"
						style={{width: 96, height: 96}}
					/>
					<View className="flex-1">
						<Text className="text-minor-xl font-bold">
							Actividad Física
						</Text>
						<Text className="text-minor-base">
							Programa una actividad física que desees realizar.
						</Text>
					</View>
				</CustomButton>
				<CustomButton onPress={() => {}} containerClassName="flex-row gap-4">
					<Image
						source={require("../../../assets/medical_appointment.png")}
						className="w-24 h-24 rounded-3xl m-1"
						style={{width: 96, height: 96}}
					/>
					<View className="flex-1">
						<Text className="text-minor-xl font-bold">
							Cita Médica
						</Text>
						<Text className="text-minor-base">
							Programa una cita médica y ten un recordatorio para no olvidarla.
						</Text>
					</View>
				</CustomButton>
			</ScrollView>
		</View>
	);
}

export default Add;
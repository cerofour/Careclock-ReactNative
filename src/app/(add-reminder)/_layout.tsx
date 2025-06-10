import { Stack } from "expo-router";
import { COLORS } from "../../components/colors";
import { SafeAreaView } from "react-native-safe-area-context";

function AddReminderLayout() {

	return (
		<SafeAreaView className="flex-1 bg-background" edges={['bottom']}>
			<Stack 
				screenOptions={{
					animation: 'fade',
					headerShadowVisible: false,
					headerTitleStyle: {
						fontSize: 30,
						color: COLORS.primary,
					},
					
			}}>
				<Stack.Screen name="medication/index" options={{title: 'Agregar'}} />
				<Stack.Screen name="medication/MedicationFrecuency" options={{title: ''}}/>
				<Stack.Screen name="medication/MedicationTimePicker" options={{title: ''}}/>
				<Stack.Screen name="medication/StockTracker" options={{title: ''}}/>
				<Stack.Screen name="medication/ReminderSavedScreen" options={{title: ''}}/>
			</Stack>
		</SafeAreaView>
		
	);
}

export default AddReminderLayout;
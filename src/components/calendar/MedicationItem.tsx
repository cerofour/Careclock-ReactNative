import { View, Text } from "react-native";
import { COLORS } from "../colors";
import IconComponent from "../core/icons/IconComponent";
import CustomButton from "../core/buttons/CustomButton";

function MedicationItem( { item }: any ) {
	//const difference = (new Date().getTime() - new Date(item.schedule_time).getTime()) / (1000 * 60);

	return (
		<CustomButton onPress={() => {}} containerClassName={`flex-row ${item.status === 'overdue'? 'bg-danger' : 'bg-white'} items-center`}>
			<View className="rounded-full bg-strokecolor p-2 items-center justify-center">
				<IconComponent name="Pill" size={25}/>
			</View>
			<View className="flex-col px-3">
				<Text className={`text-minor-base ${item.status === 'overdue'? 'text-white': 'text-black'}`}>{item.name}</Text>
				<View className="flex-row">
					<Text className={`text-minor-sm ${item.status === 'overdue'? 'text-white': 'text-black'}`}>{item.dosage_amount}</Text>
					<Text className={`text-minor-sm px-2 text-secondary ${item.status === 'overdue'? 'text-white': 'text-black'}`}>{item.dosage_unit_id}</Text>
					{
						(item.status === 'overdue') &&
							(<View className="rounded-full px-3 bg-white">
								<Text className="text-minor-sm text-danger">Olvidado</Text>
							</View>)
					}
				</View>
			</View>
			<View className={`rounded-full p-1 bg-white border ${item.status === 'overdue' ? 'border-dangerborder' : 'border-primary' } ml-auto justify-center items-center`}>
				{
					['taken', 'pending'].includes(item.status)?
						<IconComponent name="Circle" color={`${item.status === 'taken' ? COLORS.primary : 'white'}`} size={30} weight="fill"/>
					: item.status === 'overdue' &&
						<IconComponent name="WarningCircle" color={COLORS.danger} size={30} weight="fill"/>
				}
			</View>
		</CustomButton>
	);
}

export default MedicationItem;
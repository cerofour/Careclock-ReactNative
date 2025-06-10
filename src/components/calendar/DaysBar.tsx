import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

function DaysBar() {
	const [daySelected, setDaySelected] = useState(new Date().getDay());
	const days = ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'];

	return (
		<View className="flex-row justify-around mb-5">
			{days.map((item, index) => {
				const date = new Date();
				date.setDate(date.getDate() + (index - date.getDay()));

				return <TouchableOpacity key={index} onPress={() => setDaySelected(index)}>
					<View className={`flex rounded-2xl w-10 h-16 items-center justify-items-center ${(days[daySelected] === item)? 'bg-primary' : 'bg-strokecolor'}`}>
						<Text className={`${(index === daySelected)? 'text-white' : 'text-black'} text-center text-minor-lg font-bold`}>{item}</Text>
						<Text className={`${(index === daySelected)? 'text-white' : 'text-gray'} text-minor-lg`}>{date.getDate()}</Text>
					</View>
				</TouchableOpacity>
		})}
		</View>
	);
}

export default DaysBar;

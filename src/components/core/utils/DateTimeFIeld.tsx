import { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker';
import { Platform, TouchableOpacity, View, Text } from "react-native";
import IconComponent from "../icons/IconComponent";

type DateTimeFieldProps = {
	mode: 'time' | 'date';
	value: Date;
	onChange: (newDate: Date) => void;
	placeholder?: string;
	className?: string,
}

function DateTimeField({ mode, value, onChange, placeholder, className }: DateTimeFieldProps) {

	const [show, setShow] = useState(false);

	const displayText = (() => {
		if (!value) 
			return placeholder || (mode === 'time' ? '--:--' : 'DD/MM/YY');

		const pad = (n: number) => n.toString().padStart(2, '0');

		if (mode === 'time')
			return `${pad(value.getHours())}:${pad(value.getMinutes())}`;
		else
			return `${pad(value.getDate())}/${pad(value.getMonth() + 1)}/${pad(value.getFullYear() % 100)}`;
	
	})();

	const onChangeInternal = (_: DateTimePickerEvent, selected?: Date) => {
		setShow(Platform.OS === 'ios');
		if(selected) onChange(selected)
	}

	return (
		<View className={`${className}`}>
			<TouchableOpacity
				activeOpacity={0.7}
				className="flex-row items-center justify-between border border-strokecolor rounded-full w-40 px-4 py-2"
				onPress={() => setShow(true)}
			>
				<Text className="text-gray-500">{displayText}</Text>
				{mode === 'time' ? 
					(<IconComponent name="Clock" size={30} />) : 
					(<IconComponent name="Calendar" size={30} />)
				}
			</TouchableOpacity>

			{show && (
				<DateTimePicker
					value={value || new Date()}
					mode={mode}
					is24Hour
					display="default"
					onChange={onChangeInternal}
					minimumDate={new Date()}
				/>
			)}
		</View>
	);
}

export default DateTimeField;
import { TextInput, Text, Pressable } from "react-native";
import Container from "./Container";
import IconComponent from "../icons/IconComponent";


type NumericInputProps = {
	containerClassName: string,
	value: string,
	onChange: any,
	maxValue: number,
	minValue?: number
}

function NumericInput({ value, onChange, maxValue, containerClassName, minValue = 0}: NumericInputProps) {

	return (
		<Container className={`flex-row items-center ${containerClassName}`} >
			<Pressable onPress={() => {
                    const numValue = parseInt(value || "0", 10);
                    onChange(Math.max(minValue, numValue - 1).toString());
            }}>
				<IconComponent name="CaretLeft" size={30} />
			</Pressable>
			<TextInput 
				className="w-24 text-center text-black items-center focus:outline-none focus:border-0"
				value={value}
				keyboardType="numeric"
				onChangeText={text => {
					const onlyNums = text.replace(/[^0-9]/g, '');
					if(onlyNums === '') {
						onChange('0');
						return;
					}
					const num = parseInt(onlyNums, 10);
					onChange(Math.min(Math.max(num, minValue), maxValue).toString());
      			}}
			/>
			<Pressable className="flex items-center" onPress={() => {
                const numValue = parseInt(value || "0", 10);
                onChange(Math.min(numValue + 1, maxValue).toString());
            }}>
				<IconComponent name="CaretRight" size={30} />
			</Pressable>
			<Text className="mx-1 text-minor-xl">#</Text>
		</Container>
	);
}

export default NumericInput;
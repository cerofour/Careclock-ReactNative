import { Pressable } from "react-native";
import Container from "../utils/Container";
import { ReactNode } from "react";

type CustomButtonProps = {
	children: ReactNode,
	onPress: () => void,
	pressableClassName?: string,
	containerClassName?: string
}

function CustomButton({children, onPress, pressableClassName, containerClassName}: CustomButtonProps) {
	return (
		<Pressable 
			onPress={onPress}
			className={`p-0 active:scale-95 transition-transform duration-150 ${pressableClassName}`}
		>
			<Container className={`${containerClassName}`}>
				{children}
			</Container>
		</Pressable>
	);
}

export default CustomButton;
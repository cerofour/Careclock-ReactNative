import { ReactNode } from "react";
import { View } from "react-native";

type ContainerProps = {
	children: ReactNode,
	className?: string
}

function Container({ children, className }: ContainerProps) {
	const base = "w-100 h-100 border border-strokecolor overflow-hidden rounded-3xl my-2 p-2"
	return (
		<View className={`${base} ${className}`}>
			{children}
		</View>
	);
}

export default Container;
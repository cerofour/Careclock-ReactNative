import { TouchableOpacity, View} from "react-native";

type ButtonConfig = {
	icon?: React.ReactNode,
	onPress: () => void,
	badge?: boolean
}

type IconButtonProps = {
	buttons: ButtonConfig[]
}

function IconButton({buttons}: IconButtonProps) {
	return (
		<View className="flex-row items-center">
			{buttons.map((button, index) => (
				<TouchableOpacity
					key = {`header-btn-${index}`}
					onPress={button.onPress}
					className="p-1 m-1 relative"
				>
				{button.icon}
				{button.badge && 
					<View className="absolute top-[0] right-[0] w-[8px] h-[8px] rounded-[4px] bg-red-500"/>}
				</TouchableOpacity>))}
		</View>
	);
}

export default IconButton;
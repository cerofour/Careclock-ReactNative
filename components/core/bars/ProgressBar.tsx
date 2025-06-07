import { View } from "react-native";

type ProgressBarProps = {
	color: string,
	progress: string
}

function ProgressBar({ color, progress }: ProgressBarProps) {
	return (
		<View className="w-100 h-2 bg-gray-200 border-2 rounded-full m-5" style={{borderColor: color}}>
  			<View 
				className={`h-full rounded-full`}
				style={{width: progress as `${number}%`, backgroundColor: color}}
			/>
		</View>
	);
}

export default ProgressBar;
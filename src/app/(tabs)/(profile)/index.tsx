import { useLayoutEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "expo-router";
import IconButton from "../../../components/core/buttons/IconButton";
import IconComponent from "../../../components/core/icons/IconComponent";
import FamilyCard from "../../../components/profile/FamilyCard";


function Profile() {

	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton buttons={[
					{
						icon: <IconComponent name="Bell" size={30}></IconComponent>,
						onPress: () => console.log("Presionó notificaciones"),
						badge: true
					}
				]}/>
			),
			
		})
	}, [navigation]);


	return (
		<View className="flex-1 bg-background py-5 p-4">
			<View className="items-center">
				<Image
					source={{uri: "https://yt3.googleusercontent.com/ytc/AIdro_ktdDHlDIcHq7hxNcKYFxzn78MpuS5cb2PRRsaOmOFLwPea=s160-c-k-c0x00ffffff-no-rj"}}
					className="w-48 h-48 rounded-full m-4"
				/>
				<Text className="text-minor-lg font-bold">Jorge Martin Rodriguez Castro</Text>
			</View>
			<FamilyCard navigation={navigation}></FamilyCard>
			
		</View>
	);
}

export default Profile;
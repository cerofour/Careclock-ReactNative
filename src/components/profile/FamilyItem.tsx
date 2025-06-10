import { Image, View, Text } from "react-native";
import Container from "../core/utils/Container";
import CustomButton from "../core/buttons/CustomButton";

function FamilyItem( { person }: any ) {
	return (
		<Container>
			<View className="flex-row items-center">
				<Image 
					source={{uri: person.image_url}}
					className="rounded-full size-12"
				></Image>
				<Text numberOfLines={1} ellipsizeMode="tail" className="text-minor-base font-bold mx-3">{person.name}</Text>
				<CustomButton containerClassName="bg-danger rounded-full px-5 py-1" pressableClassName="ml-auto" onPress={() => {}}>
					<Text className="text-minor-base text-white font-bold">X</Text>
				</CustomButton>
			</View>
		</Container>
	);
}

export default FamilyItem;
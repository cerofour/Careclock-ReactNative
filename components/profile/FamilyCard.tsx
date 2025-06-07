import { Text } from "react-native";
import { useRouter } from "expo-router";
import FamilyItem from "./FamilyItem";
import Container from "../core/utils/Container";
import CustomButton from "../core/buttons/CustomButton";

function FamilyCard( {navigation}: any ) {
	const route = useRouter();

	return (
		<Container>
			<Text className="text-minor-base font-bold px-5 py-1">Familiares</Text>
			<FamilyItem navigation={navigation} person={{image_url: "https://avatars.githubusercontent.com/u/63680208?v=4", name: "Diego Alexis Celis Buques"}}></FamilyItem>
			<CustomButton containerClassName="flex items-center justify-center my-3 py-3 bg-primary rounded-full" onPress={() => {}}>
				<Text className="text-minor-lg text-white font-bold">Conectar</Text>
			</CustomButton>
		</Container>
	);
}

export default FamilyCard;
import { FlatList, View, Text } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import SearchBar from "../../../components/core/search-bar/SearchBar";
import Container from "../../../components/core/utils/Container";
import CustomButton from "../../../components/core/buttons/CustomButton";

import medication from "@/constants/medication.json";

type MedicationType = {
	id: string, 
	name: string,
	type: string
}

function AddMedicalReminder() {
	const [results, setResults] = useState([]);
	const router = useRouter();

	return (
		<View className="flex-1 bg-background p-4">
			<SearchBar 
				data={medication} 
				onResults={setResults} 
				filterFn={(item, query) => item.name.toLowerCase().includes(query.toLowerCase())} 
				placeholder="Buscar" ></SearchBar>
			<Container className="flex-1 w-100" >
				<FlatList 
					data={results}
					keyExtractor={((item: MedicationType) => item.id)}
					renderItem={({item}) => (
						<CustomButton containerClassName="my-1" onPress={() => {
							router.push({
								pathname: 'medication/MedicationFrecuency',
								params: item
							})
						}}>
							<Text>{item.name}, {item.type}</Text>
						</CustomButton>
					)}
				>
				</FlatList>
			</Container>
		</View>
	);
}

export default AddMedicalReminder;
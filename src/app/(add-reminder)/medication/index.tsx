import { FlatList, View, Text } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import SearchBar from "../../../components/core/search-bar/SearchBar";
import Container from "../../../components/core/utils/Container";
import CustomButton from "../../../components/core/buttons/CustomButton";


type medication = {
	id: string, 
	name: string,
	type: string
}

const data = [
	{
		id: '1',
		name: "Aspirina",
		type: "Tabletas"
	},
	{
		id: '2',
		name: "Aspirina",
		type: "Inyecciones"
	},
	{
		id: '3',
		name: "Ibuprofeno",
		type: "Jarabe"
	},
	{
		id: '4',
		name: "Ibuprofeno",
		type: "Pastillas"
	},
	{
		id: '5',
		name: "Paracetamol",
		type: "Tabletas"
	},
	{
		id: '6',
		name: "Paracetamol",
		type: "Tabletas"
	},
	{
		id: '7',
		name: "Paracetamol",
		type: "Tabletas"
	},
	{
		id: '8',
		name: "Paracetamol",
		type: "Tabletas"
	},
	{
		id: '9',
		name: "Paracetamol",
		type: "Tabletas"
	},
	{
		id: '10',
		name: "Paracetamol",
		type: "Tabletas"
	},
];

function AddMedicalReminder() {
	const [results, setResults] = useState([]);
	const router = useRouter();

	return (
		<View className="flex-1 bg-background p-4">
			<SearchBar 
				data={data} 
				onResults={setResults} 
				filterFn={(item, query) => item.name.toLowerCase().includes(query.toLowerCase())} 
				placeholder="Buscar" ></SearchBar>
			<Container className="flex-1 w-100" >
				<FlatList 
					data={results}
					keyExtractor={((item: medication) => item.id)}
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
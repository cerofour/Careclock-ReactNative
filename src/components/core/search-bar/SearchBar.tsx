import { TextInput, View} from "react-native";
import Container from "../utils/Container";
import IconComponent from "../icons/IconComponent";
import { useState, useLayoutEffect } from "react";

type SearchBarProps = {
	placeholder?: string,
	value?: string,
	data: any,
	onResults: React.Dispatch<React.SetStateAction<never[]>>,
	filterFn: (item: any, query: any) => {}
}

function SearchBar({ placeholder = "Buscar", value = '', data, onResults, filterFn }: SearchBarProps) {

	const [query, setQuery] = useState(value); 

	useLayoutEffect(() => {
		if(!query) {
			onResults(data);
			return;
		}

		const filtered = data.filter((item: any) => filterFn(item, query));

		onResults(filtered);

	}, [query, data]);


	return (
		<Container className="flex-row items-center px-3" >
			<TextInput 
				className="flex-1 text-black focus:outline-none focus:border-0 text-minor-base font-bold" 
				value={query}
				placeholderClassName="text-black"
				placeholder={placeholder}
				onChangeText={setQuery}
			/>
			<View className="ml-auto">
				<IconComponent name="MagnifyingGlass" size={30}/>
			</View>
		</Container>
	);
}

export default SearchBar;
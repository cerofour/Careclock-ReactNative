import { Text } from "react-native";
import MedicationItem from "./MedicationItem";
import Container from "../core/utils/Container";

function TimeMedicationCard({}: any) {
	return (
		<Container>
			<Text className="text-minor-2xl px-5 py-1">8:00</Text>
			<MedicationItem item={{name: 'Paracetamol', dosage_amount: 300, dosage_unit_id: 'ml', status: 'taken'}}></MedicationItem>
			<MedicationItem item={{name: 'Ibuprofeno', dosage_amount: 400, dosage_unit_id: 'ml', status: 'pending'}}></MedicationItem>
			<MedicationItem item={{name: 'Aspirina', dosage_amount: 1, dosage_unit_id: 'tableta', status: 'overdue'}}></MedicationItem>
			
		</Container>
	);
}

export default TimeMedicationCard;
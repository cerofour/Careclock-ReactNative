export type Medication = {
	id_medication_reminder: string,
	medication_name: string,
	dosage_amount: string,
	//dosage_unit_id: number,
	interval_time: string,
	fixed_time: string[];
	start_time: string,
	start_date: string,
	end_date: string,
	notes: string,
	created_at: string,
	update_at: string,
	amount_medication: string,
	quantity_limit: string,
}
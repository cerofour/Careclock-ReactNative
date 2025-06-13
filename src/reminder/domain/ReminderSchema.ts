export interface ReminderSchema {
	medicationName: string;
	reminderState: 'pending' | 'overdue' | 'taken';
	dosageAmount: number;
	dosageUnit: 'pill' | 'inj';
}
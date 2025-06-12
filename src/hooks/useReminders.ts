import { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';
import { notificationService } from '../services/notificationService';
import { Medication } from '../components/types';

export const useReminders = () => {
	const [reminders, setReminders] = useState([<Medication>{}]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadReminders();
	}, []);

	const loadReminders = async () => {
		try {
			setLoading(true);
			const stored = await storageService.loadReminders();
			setReminders(stored);
		} catch (error) {
			console.error('Error loading reminders:', error);
		} finally {
			setLoading(false);
		}
	};

	const addReminder = async (reminderData: Medication) => {
		try {

			const updatedReminders = [...reminders, reminderData];
			setReminders(updatedReminders);
			
			await storageService.saveReminders(updatedReminders);
			
			await notificationService.scheduleReminder(reminderData);

			return { success: true, reminder: reminderData };
		} catch (error) {
			console.error('Error adding reminder:', error);
			return { success: false, error: error };
		}
	};

	const updateReminder = async (reminder: Medication) => {
		try {
			const updatedReminders = reminders.map((r: Medication) => 
				r.id_medication_reminder === reminder.id_medication_reminder ? reminder : r
			);
		
			setReminders(updatedReminders);
			await storageService.saveReminders(updatedReminders);
			
			//const updatedReminder = updatedReminders.find(r => r.id_medication_reminder === id);
			
			// Cancelar notificaciones existentes y reprogramar
			await notificationService.cancelReminder(reminder.id_medication_reminder);

			await notificationService.scheduleReminder(reminder);

			return { success: true };
		} catch (error) {
			console.error('Error updating reminder:', error);
			return { success: false, error: error };
		}
	};

	const deleteReminder = async (id: string) => {
		try {
			const updatedReminders = reminders.filter(r => r.id_medication_reminder !== id);
			setReminders(updatedReminders);
			
			await storageService.saveReminders(updatedReminders);
			await notificationService.cancelReminder(id);

			return { success: true };
		} catch (error) {
			console.error('Error deleting reminder:', error);
			return { success: false, error: error };
		}
	};

	const toggleReminder = async (reminderr: Medication) => {
		const reminder = reminders.find(r => r.id_medication_reminder === reminderr.id_medication_reminder);
		if (!reminder) return { success: false, error: 'Reminder not found' };

		return await updateReminder(reminderr);
	};

	return {
		reminders,
		loading,
		addReminder,
		updateReminder,
		deleteReminder,
		toggleReminder,
		refreshReminders: loadReminders,
	};
};
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Medication } from '../components/types';

const STORAGE_KEY = 'medical_reminders';

export const storageService = {
	async saveReminders(reminders: Medication[]) {
		try {
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
			return true;
		} catch (error) {
			console.error("Error saving reminders:", error);
			return false;
		}
	},

	async addReminders(reminder: Medication | Medication[]) {
		try {
			let updated = [];

			const reminders = await this.loadReminders();
			const reminderArray = Array.isArray(reminders) ? reminders : [];
			
			if(Array.isArray(reminder)) updated = [...reminderArray, ...reminder];
			else updated = [...reminderArray, reminder];
			
			const success = await this.saveReminders(updated);

			return success;
		} catch (error) {
			console.error("Error adding reminder: ", error);
			return false;
		}
	},

	async loadReminders() {
		try {
			const stored = await AsyncStorage.getItem(STORAGE_KEY);
			return stored ? JSON.parse(stored) : [];
		} catch (error) {
			console.error("Error loading reminders:", error);
			return [];
		}
	},

	async clearReminders() {
		try {
			await AsyncStorage.removeItem(STORAGE_KEY);
			return true;
		} catch (error) {
			console.error("Error clearing reminders:", error);
			return false;
		}
	}
};
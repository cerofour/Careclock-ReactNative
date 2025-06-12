import * as Notifications from 'expo-notifications';
//import * as Device from 'expo-device';
import { Medication } from '../components/types';

// Notification behavior settings
Notifications.setNotificationHandler({
	handleNotification: async (): Promise<Notifications.NotificationBehavior> => ({
		shouldShowBanner: true,
		shouldShowList: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

export const notificationService = {
	async setupPermissions() {
		//if (!Device.isDevice) {
		//	console.log('Must use physical device for notifications');
			//return false;
		//}

		const { status: existingStatus } = await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		
		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		
		return finalStatus === 'granted';
	},

	async scheduleReminder(reminder: Medication) {
		const hasPerm = await this.setupPermissions();

		if (!hasPerm) {
			console.warn('No permissions for notifications');
			return [];
		}

		try {
		
			if (!Array.isArray(reminder.fixed_time) || reminder.fixed_time.length === 0) {
				console.warn('No fixed_time entries to schedule');
				return [];
			}

			const scheduledIds = [];

			// Tomamos sólo el primer Date
			const firstTime = reminder.fixed_time[0];
			const year = new Date(firstTime).getFullYear();
			const month = new Date(firstTime).getMonth();
			const day = new Date(firstTime).getDay();
			const hour = new Date(firstTime).getHours();
			const minute = new Date(firstTime).getMinutes();

			console.log(firstTime)

			const trigger: Notifications.NotificationTriggerInput = {
				type: Notifications.SchedulableTriggerInputTypes.DATE,
				date: new Date(reminder.fixed_time[0])
			};


			const id = await Notifications.scheduleNotificationAsync({
				identifier: `${reminder.id_medication_reminder}`, // PRUEBA
				content: {
					title: '⏰💊 Recordatorio Médico',
					body: `Es hora de tomar: ${reminder.medication_name}${reminder.dosage_amount ? ` - ${reminder.dosage_amount}` : ''}`,
					sound: 'default',
					priority: Notifications.AndroidNotificationPriority.HIGH,
					data: {
						type: 'medical_reminder',
						reminderId: reminder.id_medication_reminder,
					},
				},
				trigger,
			});

			scheduledIds.push(id);

			console.log("Se registró una alarma")

			return scheduledIds;
		} catch (error) {
			console.error('Error scheduling reminder:', error);
			return [];
		}
	},

	async cancelReminder(reminderId: string) {
		try {
			await Notifications.cancelScheduledNotificationAsync(reminderId);
			
			return true;
		} catch (error) {
			console.error('Error canceling reminder:', error);
			return false;
		}
	},

	async snoozeReminder(reminder: Medication, minutes = 5) {
		try {
			await Notifications.scheduleNotificationAsync({
				content: {
				title: '⌛💊 Recordatorio Médico (Pospuesto)',
				body: `Recordatorio: ${reminder.medication_name}`,
				sound: 'default',
				},
				trigger: {
					type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
					repeats: false,
					seconds: minutes * 60 
				},
			});
			return true;
		} catch (error) {
			console.error('Error snoozing reminder:', error);
			return false;
		}
	}
};
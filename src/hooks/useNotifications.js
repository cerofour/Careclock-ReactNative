import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { notificationService } from './../services/notificationService';

export const useNotifications = (onReminderReceived) => {
	const [permissionsGranted, setPermissionsGranted] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	useLayoutEffect(() => {
		setupNotifications();
		setupListeners();

		return () => {
			if (notificationListener.current) {
				notificationListener.current.remove();
			}
			if (responseListener.current) {
				responseListener.current.remove();
			}
		};
	}, []);

	const sendTestNotification = async () => {
		await Notifications.scheduleNotificationAsync({
			content: {
				title: '🔔 Notificación de Prueba',
				body: 'Esta es una alarma de prueba.',
				sound: 'default',
			},
			trigger: {
				type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
				seconds: 1,
				repeats: false,
			},
		});
	};

	const setupNotifications = async () => {
		const granted = await notificationService.setupPermissions();
		setPermissionsGranted(granted);
	};

	const setupListeners = () => {
		// Listener para cuando se recibe una notificación
		notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
			const { data } = notification.request.content;
			if (data?.type === 'medical_reminder' && onReminderReceived) {
				onReminderReceived(data.reminderId);
			}
		});

		// Listener para cuando el usuario toca la notificación
		responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
			const { data } = response.notification.request.content;
			if (data?.type === 'medical_reminder' && onReminderReceived) {
				onReminderReceived(data.reminderId);
			}
		});
	};

	return {
		permissionsGranted,
		requestPermissions: setupNotifications,
		sendTestNotification
	};
};
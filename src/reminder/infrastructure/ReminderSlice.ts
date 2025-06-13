import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ReminderSchema } from '../domain/ReminderSchema'

export interface RemindersState {
	reminders: Array<ReminderSchema>;
}

const initialState: RemindersState = {
	reminders: [],
}

export const RemindersSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
	addReminder(state, action: PayloadAction<ReminderSchema>) {
		state.reminders.push(action.payload);
	},
	
	// Marks the reminder in the index `action.payload` to 'taken'
	markAsTaken(state, action: PayloadAction<number>) {
		try {

			if (state.reminders.length < action.payload)
				return;

			state.reminders.at(action.payload)!.reminderState = 'pending';
		} catch {
			throw new Error('Index out of bounds');
		}
	}
  },
})

// Action creators are generated for each case reducer function
export const {  } = RemindersSlice.actions

export default RemindersSlice.reducer
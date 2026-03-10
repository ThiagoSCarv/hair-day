import { useLocalStorage } from "usehooks-ts";
import { type Schedule, SCHEDULE_KEY } from "../models/schedule";

export default function useSchedule() {
	const [schedules, setSchedule, removeSchedule] = useLocalStorage<Schedule[]>(
		SCHEDULE_KEY,
		[],
	);

	function createNewSchedule(schedule: Schedule) {
		setSchedule([...schedules, schedule]);
	}

	return {
		createNewSchedule,
		schedules,
	};
}

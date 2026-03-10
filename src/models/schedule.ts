import type { Dayjs } from "dayjs";

export const SCHEDULE_KEY = "schedule";

export interface Schedule {
	id: string;
	when: Dayjs;
	client: string;
}

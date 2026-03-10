import Icon from "./icon";
import CloudSun from "../assets/CloudSun.svg?react";
import SunHorizon from "../assets/SunHorizon.svg?react";
import MoonStars from "../assets/MoonStars.svg?react";
import Text from "./text";
import { ListItem } from "./listItem";
import dayjs, { Dayjs } from "dayjs";
import useSchedule from "../hooks/useSchedules";

const todayDate = dayjs();

interface ScheduleProps extends React.ComponentProps<"ul"> {
	date: Dayjs;
	timePeriod: string;
	className?: string;
}

export default function Schedule({
	date,
	timePeriod,
	className,
	...props
}: ScheduleProps) {
	const { schedules } = useSchedule();

	if (timePeriod === "morning") {
		return (
			<div className="flex flex-col max-w-170.5 border border-gray-600 rounded">
				<div className="px-5 flex items-center gap-3">
					<Icon iconSvg={SunHorizon} className="fill-yellow-dark" />
					<Text variant="regular-text-sm" className="text-gray-300">
						Manhã
					</Text>
					<Text variant="regular-text-sm" className="text-gray-400 ml-auto">
						09h-12h
					</Text>
				</div>
				<ul
					className="p-5 border-t border-gray-600 flex flex-col gap-0.5"
					{...props}
				>
					{schedules.map((schedule, index) => {
						const parsedDate = dayjs(schedule.when);
						const morningTime = dayjs(date).set("hour", 12).set("minute", 0);
						if (
							todayDate.isBefore(parsedDate) &&
							parsedDate.isBefore(morningTime)
						) {
							return (
								<ListItem
									id={schedule.id}
									key={`${schedule.when}-${index}`}
									hour={parsedDate.format("HH:mm")}
									name={schedule.client}
								/>
							);
						}
						return false;
					})}
				</ul>
			</div>
		);
	}
	if (timePeriod === "afternoon") {
		return (
			<div className="flex flex-col max-w-170.5 border border-gray-600 rounded">
				<div className="px-5 flex items-center gap-3">
					<Icon iconSvg={CloudSun} className="fill-yellow-dark" />
					<Text variant="regular-text-sm" className="text-gray-300">
						Tarde
					</Text>
					<Text variant="regular-text-sm" className="text-gray-400 ml-auto">
						13h-18h
					</Text>
				</div>
				<ul
					className="p-5 border-t border-gray-600 flex flex-col gap-0.5"
					{...props}
				>
					{schedules.map((schedule, index) => {
						const parsedDate = dayjs(schedule.when);
						const morningTime = dayjs(date).set("hour", 12).set("minute", 0);
						const afternoonTime = dayjs(date).set("hour", 18).set("minute", 0);

						if (
							todayDate.isBefore(parsedDate) &&
							parsedDate.isAfter(morningTime) &&
							parsedDate.isBefore(afternoonTime)
						) {
							return (
								<ListItem
									id={schedule.id}
									key={`${schedule.when}-${index}`}
									hour={parsedDate.format("HH:mm")}
									name={schedule.client}
								/>
							);
						}
						return false;
					})}
				</ul>
			</div>
		);
	}
	return (
		<div className="flex flex-col max-w-170.5 border border-gray-600 rounded">
			<div className="px-5 flex items-center gap-3">
				<Icon iconSvg={MoonStars} className="fill-yellow-dark" />
				<Text variant="regular-text-sm" className="text-gray-300">
					Noite
				</Text>
				<Text variant="regular-text-sm" className="text-gray-400 ml-auto">
					19h-21h
				</Text>
			</div>
			<ul
				className="p-5 border-t border-gray-600 flex flex-col gap-0.5"
				{...props}
			>
				{schedules.map((schedule, index) => {
					const parsedDate = dayjs(schedule.when);
					const afternoonTime = dayjs(date).set("hour", 18).set("minute", 0);
					if (
						todayDate.isBefore(parsedDate) &&
						parsedDate.isAfter(afternoonTime)
					) {
						return (
							<ListItem
								id={schedule.id}
								key={`${schedule.when}-${index}`}
								hour={parsedDate.format("HH:mm")}
								name={schedule.client}
							/>
						);
					}
					return false;
				})}
			</ul>
		</div>
	);
}

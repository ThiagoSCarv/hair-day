import { useState } from "react";
import InputDate from "./inputDate";
import Schedule from "./schedule";
import Text from "./text";
import dayjs from "dayjs";

interface ListSchedulesProps {
	className?: string;
}

export default function ListSchedules({
	className,
	...props
}: ListSchedulesProps) {
	const todayDate = dayjs();
	const [date, setDate] = useState(todayDate.format("YYYY-MM-DD"));

	const handleChangeDate: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setDate(event.target.value);
	};

	const dateObject = dayjs(date);

	return (
		<div className="mx-28 py-20 w-170.5 flex flex-col gap-8" {...props}>
			<header className="flex w-full">
				<div className="flex flex-col gap-2.5">
					<Text variant="title-lg" className="text-gray-100">
						Sua agenda
					</Text>
					<Text variant="regular-text-sm" className="text-gray-300">
						Consulte os seus cortes de cabelo agendados por dia
					</Text>
				</div>
				<InputDate
					model="sm"
					defaultValue={date}
					onChange={handleChangeDate}
					className="ml-auto"
				/>
			</header>
			<div className="flex flex-col gap-3 w-full">
				<Schedule timePeriod="morning" date={dateObject} />
				<Schedule timePeriod="afternoon" date={dateObject} />
				<Schedule timePeriod="night" date={dateObject} />
			</div>
		</div>
	);
}

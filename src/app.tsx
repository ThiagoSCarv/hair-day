import Form from "./components/form";
import LogoSvg from "../public/Logo.svg?react";
import Schedule from "./components/schedule";
import dayjs from "dayjs";

const todayDate = dayjs();

function App() {
	return (
		<main className="relative py-3 pl-6">
			<div className="absolute inset-0 w-34.75 h-14 bg-gray-600 flex justify-center items-center rounded-br-xl">
				<LogoSvg />
			</div>
			<div className="flex">
				<aside className="p-20 bg-gray-700 max-w-124.5 rounded-xl ">
					<Form />
				</aside>
				<div className="py-20 px-28">
					<Schedule date={todayDate} timePeriod="morning" />

					<Schedule date={todayDate} timePeriod="afternoon" />

					<Schedule date={todayDate} timePeriod="night" />
				</div>
			</div>
		</main>
	);
}

export default App;

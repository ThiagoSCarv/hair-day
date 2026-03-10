import InputDate from "./inputDate";
import Text from "./text";
import { hoursForSchedule } from "../utils/hoursForSchecule";
import { InputRadio } from "./inputRadio";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import InputText from "./inputText";
import Button from "./button";
import useSchedule from "../hooks/useSchedules";

const todayDate = dayjs();

interface FormProps extends React.ComponentProps<"form"> {
	className?: string;
}

export default function Form({ className, ...props }: FormProps) {
	const [hour, setHour] = React.useState("");
	const [date, setDate] = React.useState(todayDate.format("YYYY-MM-DD"));
	const [client, setClient] = React.useState("");
	const { createNewSchedule, schedules } = useSchedule();

	const handleChangeHour: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setHour(event.target.value);
	};

	const handleChangeDate: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setDate(event.target.value);
	};

	const handleChangeClient: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setClient(event.target.value);
	};

	function isAlreadySchedule(when: Dayjs) {
		const alreadyScheduledTime = schedules.some((schedule) =>
			when.isSame(schedule.when),
		);
		return alreadyScheduledTime;
	}

	function handleSubmit(e: React.SubmitEvent) {
		e.preventDefault();

		/*const form = e.target;
    const formData = new FormData(form);

    fetch("/some-api", { method: form.method, body: formData });

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);*/
		const dateString = `${date} ${hour}`;
		const dateObject = dayjs(dateString);

		if (dateObject.isBefore(todayDate) || date.trim() === "") {
			alert("Horário Indisponivel");
			return false;
		}

		if (isAlreadySchedule(dateObject)) {
			alert("Horário Indisponivel");
			return false;
		}

		if (client.trim() === "") {
			alert("Digite o nome do cliente");
			return false;
		}

		const newSchedule = {
			id: Math.random().toString(36).substring(2, 9),
			when: dateObject,
			client: client,
		};

		return createNewSchedule(newSchedule);
	}

	return (
		<form
			method="post"
			className="flex flex-col gap-8"
			onSubmit={handleSubmit}
			{...props}
		>
			<header className="flex flex-col gap-1">
				<Text as="h1" variant="title-lg" className="text-gray-100">
					Agende um atendimento
				</Text>
				<Text as="span" variant="regular-text-md" className="text-gray-300">
					Selecione data, horário e informe o nome do cliente para criar o
					agendamento
				</Text>
			</header>

			<fieldset className="flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<Text
						as="label"
						variant="title-md"
						htmlFor="date"
						className="text-gray-200"
					>
						Data
					</Text>
					<InputDate
						type="date"
						id="date"
						name="date"
						model="md"
						defaultValue={date}
						onChange={handleChangeDate}
					/>
				</div>
				<div>
					<Text as="legend" variant="title-md" className="text-gray-200 mb-2">
						Horários
					</Text>
					<div className="flex flex-col gap-3 max-w-84.5">
						<div className="max-w-full flex flex-col gap-2">
							<Text
								as="span"
								variant="regular-text-md"
								className="text-gray-300"
							>
								Manhã
							</Text>
							<div className="flex gap-2 flex-wrap">
								{hoursForSchedule.morning.map((hour, index) => {
									const dateString = `${date} ${hour}`;
									const dateObject = dayjs(dateString);
									if (
										todayDate.isAfter(dateObject) ||
										isAlreadySchedule(dateObject)
									) {
										return (
											<InputRadio
												type="radio"
												disabled
												onChange={handleChangeHour}
												key={`${index}-${hour}`}
											>
												{hour}
											</InputRadio>
										);
									}
									return (
										<InputRadio
											type="radio"
											onChange={handleChangeHour}
											key={`${index}-${hour}`}
										>
											{hour}
										</InputRadio>
									);
								})}
							</div>
						</div>
						<div className="max-w-full flex flex-col gap-2">
							<Text
								as="span"
								variant="regular-text-md"
								className="text-gray-300"
							>
								Tarde
							</Text>
							<div className="flex gap-2 flex-wrap">
								{hoursForSchedule.afternoon.map((hour, index) => {
									const dateString = `${date} ${hour}`;
									const dateObject = dayjs(dateString);
									if (
										todayDate.isAfter(dateObject) ||
										isAlreadySchedule(dateObject)
									) {
										return (
											<InputRadio
												type="radio"
												disabled
												onChange={handleChangeHour}
												key={`${index}-${hour}`}
											>
												{hour}
											</InputRadio>
										);
									}
									return (
										<InputRadio
											type="radio"
											onChange={handleChangeHour}
											key={`${index}-${hour}`}
										>
											{hour}
										</InputRadio>
									);
								})}
							</div>
						</div>
						<div className="max-w-full flex flex-col gap-2">
							<Text
								as="span"
								variant="regular-text-md"
								className="text-gray-300"
							>
								Noite
							</Text>
							<div className="flex gap-2 flex-wrap">
								{hoursForSchedule.night.map((hour, index) => {
									const dateString = `${date} ${hour}`;
									const dateObject = dayjs(dateString);
									if (
										todayDate.isAfter(dateObject) ||
										isAlreadySchedule(dateObject)
									) {
										return (
											<InputRadio
												type="radio"
												disabled
												onChange={handleChangeHour}
												key={`${index}-${hour}`}
											>
												{hour}
											</InputRadio>
										);
									}
									return (
										<InputRadio
											type="radio"
											onChange={handleChangeHour}
											key={`${index}-${hour}`}
										>
											{hour}
										</InputRadio>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<Text
						as="label"
						htmlFor="client"
						variant="title-md"
						className="text-gray-200"
					>
						Cliente
					</Text>
					<InputText
						id="client"
						onChange={handleChangeClient}
						placeholder="Nome do cliente"
						name="client"
					/>
				</div>
			</fieldset>

			<Button type="submit">AGENDAR</Button>
		</form>
	);
}

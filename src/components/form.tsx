/*import InputDate from "./inputDate";
import Text from "./text";
import { hoursForSchedule } from "../utils/hoursForSchecule";
import { InputRadio } from "./inputRadio";
import React, { type ReactEventHandler } from "react";
import dayjs, { Dayjs } from "dayjs";
import InputText from "./inputText";
import Button from "./button";

const todayDate = dayjs();

interface FormProps extends React.ComponentProps<"form"> {
  className?: string;
}

export default function Form({ className, ...props }: FormProps) {
  const [hour, setHour] = React.useState("");
  const [date, setDate] = React.useState(todayDate.format("YYYY-MM-DD"));

  /*const handleChangeHour: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setHour(event.target.value);
  };

function handleSubmit(e: React.SubmitEvent) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("/some-api", { method: form.method, body: formData });

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
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
    <div className="flex flex-col gap-2">
      <Text as="label" variant="title-md" className="text-gray-200">
        Data
      </Text>
      <InputDate type="date" model="md" defaultValue={date} />
    </div>
    <fieldset>
      <Text as="legend" variant="title-md" className="text-gray-200 mb-2">
        Horários
      </Text>

      <div className="flex flex-col gap-3 max-w-84.5">
        <div className="max-w-full flex flex-col gap-2">
          <Text as="span" variant="regular-text-md" className="text-gray-300">
            Manhã
          </Text>
          <div className="flex gap-2 flex-wrap">
            {hoursForSchedule.morning.map((hour, index) => (
              <InputRadio type="radio" key={`${index}-${hour}`}>
                {hour}
              </InputRadio>
            ))}
          </div>
        </div>
        <div className="max-w-full flex flex-col gap-2">
          <Text as="span" variant="regular-text-md" className="text-gray-300">
            Tarde
          </Text>
          <div className="flex gap-2 flex-wrap">
            {hoursForSchedule.afternoon.map((hour, index) => (
              <InputRadio type="radio" key={`${index}-${hour}`}>
                {hour}
              </InputRadio>
            ))}
          </div>
        </div>
        <div className="max-w-full flex flex-col gap-2">
          <Text as="span" variant="regular-text-md" className="text-gray-300">
            Noite
          </Text>
          <div className="flex gap-2 flex-wrap">
            {hoursForSchedule.night.map((hour, index) => (
              <InputRadio type="radio" key={`${index}-${hour}`}>
                {hour}
              </InputRadio>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Text variant="title-md" className="text-gray-200">
          Cliente
        </Text>
      </div>
    </fieldset>

    <Button type="submit">AGENDAR</Button>
  </form>
);
}*/

/*import Icon from "./icon";
import CloudSun from "../assets/CloudSun.svg?react";
import SunHorizon from "../assets/SunHorizon.svg?react";
import MoonStars from "../assets/MoonStars.svg?react";
import Text from "./text";
import { ListItem } from "./listItem";
import { exampleList } from "../utils/exampleSchedule";
import dayjs from "dayjs";

interface ScheduleProps extends React.ComponentProps<"ul"> {
  timePeriod: string;
  className?: string;
}

const todayDate = dayjs(new Date()).format("HH:mm");

export default function Schedule({
  timePeriod,
  className,
  ...props
}: ScheduleProps) {
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
          {exampleList.map((item) => {
            const parsedHour = parseInt(item.hour);
            if (parsedHour >= 9 && parsedHour <= 12) {
              return (
                <ListItem
                  key={`${item.hour}-${item.name}`}
                  hour={item.hour}
                  name={item.name}
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
          {exampleList.map((item) => {
            const parsedHour = parseInt(item.hour);
            if (parsedHour >= 13 && parsedHour <= 18) {
              return (
                <ListItem
                  key={`${item.hour}-${item.name}`}
                  hour={item.hour}
                  name={item.name}
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
        {exampleList.map((item) => {
          const parsedHour = parseInt(item.hour);
          if (parsedHour >= 19 && parsedHour <= 22) {
            return (
              <ListItem
                key={`${item.hour}-${item.name}`}
                hour={item.hour}
                name={item.name}
              />
            );
          }
          return false;
        })}
      </ul>
    </div>
  );
}*/

import Text from "./components/text";
import Trash from "./assets/Trash.svg?react";
import Icon from "./components/icon";
import Button from "./components/button";
import ButtonIcon from "./components/buttonIcon";
import InputDate from "./components/inputDate";
import InputText from "./components/input";

function App() {
	return (
		<div className="flex flex-col gap-3">
			<Text className="text-gray-900" variant="title-lg">
				Olá Mundo
			</Text>
			<Text className="text-gray-500" variant="title-sm">
				Olá Mundo
			</Text>
			<Icon iconSvg={Trash} size="size-md" />
			<Icon iconSvg={Trash} size="size-sm" />
			<Button>AGENDAR</Button>
			<Button disabled>AGENDAR</Button>
			<InputDate />
			<InputDate model="sm" />
			<InputText />
			<ButtonIcon />
			<input type="checkbox" />
		</div>
	);
}

export default App;

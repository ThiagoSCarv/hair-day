import Text from "./components/text";
import Trash from "./assets/Trash.svg?react";
import Icon from "./components/icon";
import Button from "./components/button";
import Input from "./components/input";

function App() {
	return (
		<div className="flex flex-col gap-3">
			<Text className="text-gray-900" variant="title-lg">
				Olá Mundo
			</Text>
			<Text className="text-gray-500" variant="title-sm">
				Olá Mundo
			</Text>
			<Icon iconSvg={Trash} size="size-md" iconColor="color-yellow-dark" />
			<Icon iconSvg={Trash} size="size-sm" />
			<Button>AGENDAR</Button>
			<Button disabled>AGENDAR</Button>
			<Input variant="primary" />
			<Input variant="secondary" model="md" type="date" />
			<Input variant="secondary" model="sm" type="date" />
		</div>
	);
}

export default App;

import Text from "./components/text";
import Trash from "./assets/Trash.svg?react";
import Icon from "./components/icon";

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
		</div>
	);
}

export default App;

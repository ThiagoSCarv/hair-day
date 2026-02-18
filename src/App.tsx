import Text from "./components/text";
function App() {
	return (
		<div className="flex flex-col gap-3">
			<Text className="text-gray-900" variant="title-lg">
				Olá Mundo
			</Text>
			<Text className="text-gray-500" variant="title-sm">
				Olá Mundo
			</Text>
		</div>
	);
}

export default App;

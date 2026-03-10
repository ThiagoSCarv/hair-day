import Form from "./components/form";
import Logo from "./components/logo";

function App() {
	return (
		<main>
			<Logo />
			<aside className="p-20 bg-gray-700 max-w-124.5 rounded-xl">
				<Form />
			</aside>
		</main>
	);
}

export default App;

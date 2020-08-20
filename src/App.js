import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import CustomLayout from "./components/layout/Layout";
import ItemList from "./components/layout/ItemList";

function App() {
	return (
		<CustomLayout>
			<ItemList />
		</CustomLayout>
	);
}

export default App;

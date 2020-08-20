import React, { Component } from "react";
import Item from "../containers/Item";
import axios from "axios";

export class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		axios
			.get("https://reqres.in/api/users?page=1")
			.then((response) => {
				this.setState({
					users: response.data.data
				});
				console.log(response.data.data);
			})
			.catch((err) => {
				console.log(err);
			});

		// axios
		// 	.get("https://reqres.in/api/users?page=2")
		// 	.then((response) => {
		// 		allItems.concat(response.data.data);
		// 		console.log(response.data.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}

	render() {
		return (
			<div>
				<Item data={this.state.users} />
			</div>
		);
	}
}

export default ItemList;

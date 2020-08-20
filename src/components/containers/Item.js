import React from "react";
import { List, Avatar } from "antd";

const CustomItems = (props) => {
	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 3
			}}
			dataSource={props.data}
			renderItem={(item) => (
				<List.Item key={item.id}>
					<List.Item.Meta
						avatar={<Avatar src={item.avatar} />}
						title={
							<p>
								{item.id}. {item.first_name} {item.last_name}
							</p>
						}
						description={item.email}
					/>
					{item.content}
				</List.Item>
			)}
		/>
	);
};

export default CustomItems;

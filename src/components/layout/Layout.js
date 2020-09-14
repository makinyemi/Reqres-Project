import React from "react";
import { Layout, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
	return (
		<Layout className="layout" style={{ height: "100%" }}>
			<Header>
				<div className="logo" />
				<h1 style={{ color: "white" }}>Outstrip</h1>
			</Header>
			<Content style={{ padding: "0 50px" }}>
				<Breadcrumb style={{ margin: "16px 0" }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
				</Breadcrumb>
				<div className="site-layout-content">{props.children}</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>Made by Michael Akinyemi</Footer>
		</Layout>
	);
};

export default CustomLayout;

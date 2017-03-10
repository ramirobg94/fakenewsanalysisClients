import React from 'react';


const Layout = (props) => (
	<div id="layout">
		<div id="content">
			{props.children}
		</div>
	</div>
	)

export default Layout;
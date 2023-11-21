// Imports
import React from "react";

// Component
// Wrapper with default props
const Tabs = ({ Wrapper = 'menu', buttons, children }) => {

	// Return
	return(
		<React.Fragment>
			<Wrapper>
				{ buttons }
			</Wrapper>
			{ children }
		</React.Fragment>
	);

};

// Export
export default Tabs;
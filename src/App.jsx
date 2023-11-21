// Imports
import React from "react";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

// Component
const App = () => {

	// Return
	return(
		<React.Fragment>
			<Header/>
			<main>
				<CoreConcepts/>
				<Examples/>
			</main>
		</React.Fragment>
	);

};

// Export
export default App;
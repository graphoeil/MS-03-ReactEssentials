// Imports
import Section from "./Section";
import CoreConcept from "./CoreConcept";
import { coreConcepts } from "../data";

// Component
const CoreConcepts = () => {

	// Return
	return(
		<Section id="core-concepts" title="Core Concepts">
			<ul>
				{
					coreConcepts.map((concept, index) => {
						return <CoreConcept key={ index } { ...concept }/>
					})
				}
			</ul>
		</Section>
	);

};

// Export
export default CoreConcepts;
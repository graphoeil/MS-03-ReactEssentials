// Imports

// Component
// ...props => get all props
const Section = ({ title, children, ...props }) => {

	// Return
	return(
		// Then we got id, and all others props defined like className ...
		<section { ...props }>
			{/* 1st letter of title to uppercase */}
			<h2>{ title.slice(0,1).toUpperCase() + title.slice(1) }</h2>
			{ children }
		</section>
	);

};

// Export
export default Section;
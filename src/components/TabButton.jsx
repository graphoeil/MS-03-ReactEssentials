// Imports

// Component
const TabButton = ({ isSelected, onSelect, children }) => {

	// Return
	return(
		<li>
			<button className={ isSelected ? 'active' : '' } onClick={ onSelect }>
				{ children }
			</button>
		</li>
	);
	
};

// Export
export default TabButton;
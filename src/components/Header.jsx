// Imports
import "./Header.css";
import atom from "../assets/react-core-concepts.png";

// Random descriptions
const descriptions = ['Fundamental','Crucial','Core','Cool','Great'];
const genRandomInt = (max) => {
	return Math.floor(Math.random() * (max + 1));
};

// Component
const Header = () => {

	// Random description
	const randomDescription = () => {
		return descriptions[genRandomInt(descriptions.length-1)];
	};
	// Or => in html => { randDesc }
	// const randDesc = descriptions[genRandomInt(descriptions.length-1)];
	
	// Return
	return(
		<header>
			<img src={ atom } alt="stylized atom" />
			<h1>React Essentials</h1>
			<p>{ randomDescription() } React concepts you will need 
				for almost any app you are going to build!</p>
		</header>
	);

};

// Export
export default Header;
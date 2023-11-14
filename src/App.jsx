// Imports
import React, { useState } from "react";
import { coreConcepts, tabContent, examples } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

// Component
const App = () => {

	// State
	const [selectedTopic, setSelectedTopic] = useState('');

	// Select tab btn
	const handleSelect = (selectedButton) => {
		setSelectedTopic(selectedButton);
		// Or setSelectedTopic((oldState) => {
		// 	console.log(oldState);
		// 	return selectedButton;
		// });
	};

	// Return
	return(
		<React.Fragment>
			<Header/>
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{
							coreConcepts.map((concept, index) => {
								return <CoreConcept key={ index } { ...concept }/>
							})
						}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					{ !selectedTopic && <p>Please select a topic.</p> }
					<menu>
						{/* Or in TabButton : 
						<button onClick={ (e) => { onSelect(e); } }> 
						Which allow us to pass event object, and then in handleSelect here : 
						=> e.target.innerHTML => Components, etc... ;-) */}
						{/* <TabButton isSelected={ selectedTopic === 'components' } onSelect={ () => { handleSelect('components'); } }>Components</TabButton> */}
						{/* <TabButton isSelected={ selectedTopic === 'jsx' } onSelect={ () => { handleSelect('jsx'); } }>JSX</TabButton> */}
						{/* <TabButton isSelected={ selectedTopic === 'props' } onSelect={ () => { handleSelect('props'); } }>Props</TabButton> */}
						{/* <TabButton isSelected={ selectedTopic === 'state' } onSelect={ () => { handleSelect('state'); } }>State</TabButton> */}
						{
							tabContent.map((tab, index) => {
								if (tab === 'jsx'){
									return(
										<TabButton key={ index } 
											isSelected={ selectedTopic === tab } 
											onSelect={ () => { handleSelect(tab); } }>
											JSX
										</TabButton>
									);
								}
								return(
									<TabButton key={ index } 
										isSelected={ selectedTopic === tab } 
										onSelect={ () => { handleSelect(tab); } }>
										{/* Add text-transform: capitalize; in index.css ;-) */}
										{ tab }
									</TabButton>
								);
							})
						}
					</menu>
					{
						selectedTopic && <div id="tab-content">
							<h3>{ examples[selectedTopic].title }</h3>
							<p>{ examples[selectedTopic].description }</p>
							<pre>
								<code>{ examples[selectedTopic].code }</code>
							</pre>
						</div>
					}
				</section>
			</main>
		</React.Fragment>
	);

};

// Export
export default App;
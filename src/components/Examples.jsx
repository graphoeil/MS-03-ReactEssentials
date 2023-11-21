// Imports
import React, { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";
import { tabContent, examples } from "../data";

// Component
const Examples = () => {

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
		<Section id="examples" title="examples">
			{ !selectedTopic && <p>Please select a topic.</p> }
			<Tabs Wrapper="menu" buttons={
				<React.Fragment>
					{/* Or in TabButton : 
					<button onClick={ (e) => { onSelect(e); } }> 
					Which allow us to pass event object, and then in handleSelect here : 
					=> e.target.innerHTML => Components, etc... ;-) */}
					{/* <TabButton isSelected={ selectedTopic === 'components' } onSelect={ () => { handleSelect('components'); } }>Components</TabButton> */}
					{/* <TabButton isSelected={ selectedTopic === 'jsx' } onSelect={ () => { handleSelect('jsx'); } }>JSX</TabButton> */}
					{/* <TabButton isSelected={ selectedTopic === 'props' } onSelect={ () => { handleSelect('props'); } }>Props</TabButton> */}
					{/* <TabButton isSelected={ selectedTopic === 'state' } onSelect={ () => { handleSelect('state'); } }>State</TabButton> */}
					{
						tabContent.map((tab) => {
							return(
								<TabButton key={ tab } 
									isSelected={ selectedTopic === tab } 
									onSelect={ () => { handleSelect(tab); } }>
									{/* Add text-transform: capitalize; in index.css ;-) */}
									{ tab === 'jsx' ? 'JSX' : tab }
								</TabButton>
							);
						})
					}
				</React.Fragment>
			}>
				{
					selectedTopic && <div id="tab-content">
						<h3>{ examples[selectedTopic].title }</h3>
						<p>{ examples[selectedTopic].description }</p>
						<pre>
							<code>{ examples[selectedTopic].code }</code>
						</pre>
					</div>
				}
			</Tabs>
		</Section>
	);

};

// Export
export default Examples;
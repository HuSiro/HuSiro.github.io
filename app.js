import { Header } from './src/components/index.js'

customElements.define('my-header', Header); // Register the Header component as a custom element

class HusiroApp extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<my-header></my-header>
			<main>
				<p>Welcome to my web component application!</p>
			</main>
		`;
	}
}

customElements.define('husiro-app', HusiroApp); // Register the EsiroApp component as a custom element
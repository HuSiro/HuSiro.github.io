export default class Header extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style>
				header {
					background-color: #333;
					color: white;
					padding: 10px;
					text-align: center;
				}
			</style>
			<header>
				<h1>My Web Component</h1>
			</header>
		`;
	}
}
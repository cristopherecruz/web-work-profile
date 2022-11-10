class CustomHeader extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();

        // write element functionality in here
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        const header = document.createElement('header');
        header.innerHTML = `
            <header class="cabecalho">
                <h1 class="cabecalho__logo"><a href="index.html"><img src="assets/img/home.png" alt="Logo de engrenagem"></a></h1>
                <nav class="cabecalho__nav">
                    <ul class="nav-list">
                        <li><a class="item__a item__a--active" href="skills.html">Skills</a></li>
                        <li><a class="item__a item__a--active" href="about.html">About</a></li>
                        <li><a class="item__a item__a--active" href="contact.html">Contact</a></li>
                        <li><a class="item__a item__a--active" href="https://blog.cristopher.dev.br">Blog</a></li>
                    </ul>
                </nav>
            </header>
        `;

        // Apply external styles to the shadow DOM
        const resetStyle = document.createElement("link");
        resetStyle.setAttribute("rel", "stylesheet");
        resetStyle.setAttribute("href", "assets/css/reset.css");

        const headerStyle = document.createElement("link");
        headerStyle.setAttribute("rel", "stylesheet");
        headerStyle.setAttribute("href", "assets/css/header.css");

        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "assets/css/style.css");

        // Attach the created element to the shadow DOM
        shadow.appendChild(resetStyle);
        shadow.appendChild(headerStyle);
        shadow.appendChild(style);
        shadow.appendChild(header);
    }

}

customElements.define('custom-header', CustomHeader);
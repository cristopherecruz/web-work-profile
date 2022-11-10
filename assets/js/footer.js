class CustomFooter extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();

        // write element functionality in here
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        const footer = document.createElement('header');
        footer.innerHTML = `
            <footer class="rodape">
                <nav>
                    <ul class="lista__rodape">
                        <li><a href="https://github.com/cristopherecruz"><img class="item_social" src="assets/img/logotipo-github.svg" alt="Logotipo do Github"></a></li>
                        <li><a href="https://www.linkedin.com/in/cristopher-eduardo-da-cruz-a98892136/"><img class="item_social" src="assets/img/logotipo-linkedin.svg" alt="Logotipo do Linkedin"></a></li>
                    </ul>
                </nav>
                <p>Copyright &copy; 2022 by Cristopher</p>
            </footer>
        `;

        // Apply external styles to the shadow DOM
        const resetStyle = document.createElement("link");
        resetStyle.setAttribute("rel", "stylesheet");
        resetStyle.setAttribute("href", "assets/css/reset.css");

        const footerStyle = document.createElement("link");
        footerStyle.setAttribute("rel", "stylesheet");
        footerStyle.setAttribute("href", "assets/css/footer.css");

        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "assets/css/style.css");

        // Attach the created element to the shadow DOM
        shadow.appendChild(resetStyle);
        shadow.appendChild(footerStyle);
        shadow.appendChild(style);
        shadow.appendChild(footer);
    }

}

customElements.define('custom-footer', CustomFooter);
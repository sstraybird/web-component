class Collapse extends HTMLElement{
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const tmpl = document.getElementById('collapse_tmpl');
        let cloneTemplate = tmpl.content.cloneNode(true);
        let style = document.createElement('style');

        shadow.appendChild(style);
        shadow.appendChild(cloneTemplate);
    }
}

export default Collapse
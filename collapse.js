class Collapse extends HTMLElement{
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const tmpl = document.getElementById('collapse_tmpl');
        let cloneTemplate = tmpl.content.cloneNode(true);
        let style = document.createElement('style');
        // :host 代表的是影子的根元素
        style.textContent = `
            :host{
                display:flex;
                border:3px solid #ebebeb;
                border-radius:5px;
                width:100%;
            }
             .zf-collapse{
                width:100%;
            }
        `
        shadow.appendChild(style);
        shadow.appendChild(cloneTemplate);
    }
}

export default Collapse
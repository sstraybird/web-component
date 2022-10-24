class CollapseItem extends HTMLElement{
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });
        let tmpl = document.getElementById('collapse_item_tmpl');
        let cloneTemplate = tmpl.content.cloneNode(true);
        let style = document.createElement('style');

        shadow.appendChild(style)
        shadow.appendChild(cloneTemplate);
    }
}

export default CollapseItem
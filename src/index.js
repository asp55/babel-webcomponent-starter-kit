import css from './styles.scss';
import html from './template.html';

const template = document.createElement('template');
template.innerHTML = `<style>${css}</style>${html}`;

class HelloComponent extends HTMLElement {
  
  constructor() {
    super();
    this.tabIndex = 0;
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  /*
  get option() {
    if(this.hasAttribute('min')) return this.getAttribute('min');
    else return 0; //default value
  }

  set option(newValue) {
    this.setAttribute('min', newValue);
  }
   
  static get observedAttributes() {
    return [option];
  }

  attributeChangedCallback(name, oldValue, newValue) {

  }
  */
  
}

window.customElements.define('hello-component', HelloComponent);
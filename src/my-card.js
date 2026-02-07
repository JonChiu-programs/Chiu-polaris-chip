import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://upload.wikimedia.org/wikipedia/commons/d/da/1-Light_glyph.png";
    this.alt = "Light Glyph from The Owl House";
    this.link = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      .card {
  width: 700px;
  height: 800px;
  background-color: var(--my-card-card-background-color, #eadb8fff); 
  margin: 50px;
  border: 2px solid black;
}
.glyph {
  width: 0px;
  height: 00px;
  margin: -30px 80px;
  border: none;
  text-align:center;
  font-family:"times new roman";
  font-size: 50px;
}

.text {
  background-color: var(--my-card-text-background-color, #eadb8fff);
  text-align: center;
  font-size: 50px;
  font-family:times new roman;
  padding: 10px;
}

button img{
  background-color: var(--my-card-button-img-background-color, #eadb8fff);
    margin: -5px 13px;
    width: 500px;
    height: 500px;
  }

@media (min-width: 500px) and (max-width: 800px){
  .card {
    width: 45%;
    height: 200px;
    border: none;
    background-color: white;
    display: inline-block;
  }
  .text{
    display: none;
  }
  .glyph{
    width: 500px;
    height: 500px;
    margin: auto;
    background-color: #ededed;
  }
  button img{
    background-color: #ededed;
    margin: auto;
    width: 500px;
    height: 500px;
  }
}

@media (max-width: 500px) {
  .card {
    width: 15rem;
    height: 15rem;
    display: inline-block;
  }
  .text{
    font-size:75%;
  }
  .glyph{
    margin: -215px 70px;
    width: 20px;
    height: 25px;
    background-color: white;
}
  button img{
    margin: 175px -45px;
    width: 11rem;
    height: 11rem;
  }
}
`;
  }
  render() {
    return html`
  <div class="wrapper">
    <div class="card">
      <section class="text">
        <slot></slot>
      </section>
    
      <section class="button-section">
        <a href= "${this.link}">
          <button class = "glyph"> 
            <img class="inner-glyph" src= ${this.image} alt=${this.alt}> 
            <br>
          </button>
        </a>
      </section>
    </div>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: Image },
      alt: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

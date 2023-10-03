import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
    static get properties () {
        return {
            version: {
                type: String,
                reflect: true
            }
        }
    };

    static get styles() {
        return css`
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      text-align: center;
    }
    
    .buttons {
      display: block;
    }

    #adder {
      background-color: #61a1c9;
      margin: 16px;
      padding: 8px;
    }

    #adder:hover {
      background-color: grey;
    }

    #adder:focus {
      font-size: 16px;
      background-color: #61a1c9;
    }

    #remover {
      background-color: #61a1c9;
      margin: 16px;
      padding: 8px;
    }

    #remover:hover {
      background-color: grey;
    }

    #remover:focus {
      font-size: 16px;
      background-color: #61a1c9;
    }

    #background {
      background-color: #61a1c9;
      margin: 16px;
      padding: 8px;
    }

    #background:hover {
      background-color: grey;
    }

    #background:focus {
      font-size: 16px;
      background-color: #61a1c9;
    }

    #heading-changer {
      background-color: #61a1c9;
      margin: 16px;
      padding: 8px;
    }

    #heading-changer:hover {
      background-color: grey;
    }

    #heading-changer:focus {
      font-size: 16px;
      background-color: #61a1c9;
    }

    #summary-button {
      background-color: #ff0000;
      color: #fff;
      text-decoration: none;
      padding: 8px;
      border-radius: 40px;
      display: block;
      margin: 16px auto;
      max-width: 100px;
    }

    .details-button {
      background-color: #ff0000;
      color: #fff;
      text-decoration: none;
      padding: 8px;
      border-radius: 40px;
      display: block;
      margin: 16px auto;
      max-width: 100px;
    }

    .details-button:hover {
      background-color: green;
    }

    .card {
      flex: 1;
      max-width: 200px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 20px;
      margin: 8px;
      padding: 16px;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      transition: box-shadow 0.3s ease;
    }

    .card img {
      width: 100%;
      max-width: 100%;
      height: 60%;
      border-radius: 8px;
    }

    img {
      max-height: 100px;
    }

    .card-content {
      text-align: center;
      margin-top: 8px;
    }

    #heading {
      color: black;
    }

    @media (max-width: 800px) {
      .details-button {
        display: none;
      }
      #summary-button {
        display: none;
      }
    }

    .basic {
      background: hotpink;
    }
        `;
    }
  
    constructor() {
      super();
      this.version = 'STARTING';
    }
  
    render() {
      return html`
  <div class="wrapper">
    <section class="card">
      <img
        src="https://www.brixton.com/cdn/shop/collections/Cat-M-Clothing-Sweatshirts_1024x1024.jpg?v=1690583462"
        alt="New Arrival"
      />
      <div class="card-content">
        <h2 id="heading">New Arrival</h2>
        <p>check out our new arrival.</p>
        <details>
          <summary id="summary-button">Details</summary>
          there are no deals at the moment
        </details>
      </div>
    </section>
  </div>
      `;
    }
  }

customElements.define('my-card', MyCard);
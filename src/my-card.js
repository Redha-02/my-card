import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
    static properties = {
      image: { type: String },
      alt: { type: String },
      title: { type: String },
      description: { type: String },
      link: { type: String },
      dark: { type: Boolean }
      }
    

    static styles = css`
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
    
  
    constructor() {
      super();
      this.title = 'I will meao you';
      this.description = 'the king of the jungle is basically a cat, do not underestemate us';
    }
  
  
    //name your variables. ex: this.image = link,,,,etc
    //in order to use them whenevar u want
    // add a bolean and then bg toggle, video
    //dark is stateful because other developers can pkay with the card
    // use <slot> to add links
    //for week 7: make ur card have properties and stateful, and add the buttons outside the card, and ,ale slots
    //get npm.js acount, and publish to npm (bbetweemn)
    // code not running, changed structure at top + variables, how to do dark, host necessary? where to add slot?
    //Thursday: add two cards, one card and a meme maker, they must be reusable and thats's it, watch recording
    //how to do dark and host, how to make meme-maker work
    // publish your code to npm (npm establish)
    //then start new project and do npm install + add another card and a meme-maker and link it to vercel

    
    render() {
      return html`
  <div class="wrapper">
    <section class="card">
    <img
        src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
        alt="cat boss"
      />
      <div class="card-content">
        <h2 id="heading">${this.title}</h2>
        <p>${this.description}</p>
        <details>
          <summary id="summary-button">Details</summary>
          <slot></slot>
        </details>
      </div>
    </section>
  </div>
      `;
    }
  }
  

customElements.define('my-card', MyCard);
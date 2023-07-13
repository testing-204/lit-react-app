import { LitElement, html } from "lit-element";

let users = [
  { name: "Richard", company: "PiedPiper" },
  { name: "Dinesh", company: "PiedPiper" },
  { name: "Jared", company: "PiedPiper" },
];

export class TestView extends LitElement {
  static properties = {
    items: {},
    nameAttribute: {},
    secondaryAttribute: {},
  };

  constructor() {
    super();
    this.items = users;
    this.nameAttribute = "name";
    this.secondaryAttribute = "company";
  }

  render() {
    return html`
      <fw-avatar-group
        .items=${this.items}
        nameAttribute=${this.nameAttribute}
        secondaryAttribute=${this.secondaryAttribute}
      ></fw-avatar-group>
    `;
  }
}

customElements.define("test-view", TestView);

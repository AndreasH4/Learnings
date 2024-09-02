// Importiere die erforderlichen Module und Funktionen
import { SwimlaneElement, html, css, svg, unsafeCSS } from '@swimlane/swimlane-element@1';

// Definiere die neue Webkomponente basierend auf der Funktionalität aus exampleWebComponent.html
class CustomInputComponent extends SwimlaneElement {
  constructor() {
    super();
    this.innerHTML = `
      <form>
          <label for="inputField">Custom Input:</label>
          <input type="text" id="inputField" />
          <button type="submit">Submit</button>
      </form>
      <div role="status" id="customResult"></div>
    `;

    this.form = this.querySelector('form');
    this.inputField = this.querySelector('#inputField');
    this.customResult = this.querySelector('#customResult');

    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    const inputValue = this.inputField.value.trim();
    if (inputValue) {
        this.customResult.textContent = `You entered: "${inputValue}"`;
    } else {
        this.customResult.textContent = 'Please enter something.';
    }
    this.inputField.value = ''; // Clear the input field
  }
}

// Füge die neue Webkomponente zur Rendermethode hinzu
render() {
  if (!(this.record && Array.isArray(checklistFields) && checklistFields.length)) return html``;

  return html`
    <ul class="task-checklist--list top">
      <div class="task-checklist--header">${widgetHeader}</div>
      ${checklistFields.map((field, i) =>
        checklistTemplate(field, this.clickHandler, this.record[checkboxesFieldKey])
      )}
      <li class="task-checklist--list-item">
        <custom-input></custom-input>
      </li>
    </ul>
  `;
}
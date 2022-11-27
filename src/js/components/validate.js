import validator from '../validator';

export default class Validate {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this.input = document.querySelector('.input');
    this.button = document.querySelector('.button');

    this.onCheckCart = this.onCheckCart.bind(this);
    this.onValidateClick = this.onValidateClick.bind(this);
    this.element = element;
    this.input.addEventListener('input', this.onCheckCart);
    this.button.addEventListener('click', this.onValidateClick);
  }

  onCheckCart(e) {
    e.preventDefault();

    // if(this._timeout) {
    //   clearTimeout(this._timeout);
    // }
    if (this.input.value[0] === '4') {
      this.addDesabledClass('visa');
    } else if (this.input.value[0] === '2') {
      this.addDesabledClass('mir');
    } else if (this.input.value[0] === '5') {
      this.addDesabledClass('masterCard');
    } else {
      this.deleteDasableClass();
    }

    // this._timeout = setTimeout(() => this._filterHandler(text), 300);
  }

  addDesabledClass(nameCard) {
    const cardItems = this.element.querySelectorAll('.card-item');
    for (const item of cardItems) {
      if (!item.classList.contains(nameCard)) {
        if (!item.classList.contains('disabled')) {
          item.classList.add('disabled');
        }
      }
    }
  }

  deleteDasableClass() {
    const cardItems = this.element.querySelectorAll('.card-item');
    for (const item of cardItems) {
      item.classList.remove('disabled');
    }
  }

  onValidateClick(e) {
    e.preventDefault();
    if (this.input.value.length !== 0) {
      const isValidate = document.querySelector('.validate-result');
      if (validator(this.input.value)) {
        isValidate.textContent = 'isValidate';
        isValidate.classList.add('isValidate');
        isValidate.classList.remove('isNotValidate');
        console.log(true);
      } else {
        isValidate.textContent = 'isNotValidate';
        isValidate.classList.add('isNotValidate');
        isValidate.classList.remove('isValidate');
        console.log(false);
      }
    }
  }
}

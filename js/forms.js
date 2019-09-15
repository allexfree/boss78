'use strict';

(function () {

  var sum = 0;

  var existеnceLink = document.querySelector('.content-block__head-link');

  var productFilter = document.querySelector('.form-product');
  var pageTitle = document.querySelector('.content-block__head-title');
  var pagePrice = document.querySelector('.content-block__head-price > span');
  var btnOrder = productFilter.querySelector('.form-product__btn');
  var formCardOverlay = document.querySelector('#form-card-overlay');

  var inputRadioKit = productFilter.querySelectorAll('.form-product__input-radio');
  var inputCheckboxKit = productFilter.querySelectorAll('.form-product__input-checkbox');
  var labelCheckboxKit = productFilter.querySelectorAll('.form-product__label-checkbox');
  var newLabelCheckboxKit = [];

  var formOrder = document.querySelector('.form-card');
  var formOrderBtnClose = formOrder.querySelector('.btn-close');
  var modelName = formOrder.querySelector('#model-name');
  var modelPrice = formOrder.querySelector('#model-price');
  var color = formOrder.querySelector('#selected-color');
  var price = formOrder.querySelector('#price');
  var optionsBlock = document.querySelector('#selected-options');

  var existеnceLinkClickHandler = function () {
    window.popupsmain.popupOverlay.classList.remove('hidden');
    window.popupsmain.body.classList.add('modal-open');
  };

  var fillFormOrder = function () {
    var newInputCheckboxKit = [];
    formCardOverlay.classList.remove('hidden');
    window.popupsmain.body.classList.add('modal-open');
    modelName.textContent = pageTitle.textContent;
    modelPrice.textContent = pagePrice.textContent + ' рублей';

    for (var i = 0; i < inputRadioKit.length; i++) {
      if (inputRadioKit[i].checked) {
        color.value = (inputRadioKit[i].value);
      }
    }

    for (i = 0; i < inputCheckboxKit.length; i++) {
      if (inputCheckboxKit[i].checked) {
        sum += (+inputCheckboxKit[i].value);
        newInputCheckboxKit.push(inputCheckboxKit[i].name);
        var createdInput = document.createElement('input');
        createdInput.classList.add('form-card__group-options');
        createdInput.setAttribute('readonly', '');
        optionsBlock.appendChild(createdInput);
        var newCreatedInput = optionsBlock.querySelectorAll('input');
        for (var j = 0; j < newCreatedInput.length; j++) {
          createdInput.value = inputCheckboxKit[i].nextElementSibling.getAttribute('data-options') + ' ' + inputCheckboxKit[i].value + ' рублей';
          createdInput.name = inputCheckboxKit[i].name;
        }
      }
    }

    price.value = +pagePrice.textContent + sum + ' рублей';
    
  };



  var closeBtnClickHandler = function () {
    formCardOverlay.classList.add('hidden');
    window.popupsmain.body.classList.remove('modal-open');
    for (var i = 0; i < inputRadioKit.length; i++) {
      inputRadioKit[i].checked = false;
    }

    for (i = 0; i < inputCheckboxKit.length; i++) {
      inputCheckboxKit[i].checked = false;
    }

    var clearedInput = document.querySelector('#selected-options').querySelectorAll('input');

    for (i = 0; i < clearedInput.length; i++) {
      optionsBlock.removeChild(clearedInput[i]);
    }
    sum = 0;
  };

  var escPressHandler = function (evt) {
    if (evt.keyCode === window.popupsmain.ESC_KEYCODE) {
      formCardOverlay.classList.add('hidden');
      window.popupsmain.body.classList.remove('modal-open');
      for (var i = 0; i < inputRadioKit.length; i++) {
        inputRadioKit[i].checked = false;
      }

      for (i = 0; i < inputCheckboxKit.length; i++) {
        inputCheckboxKit[i].checked = false;
      }

      var clearedInput = document.querySelector('#selected-options').querySelectorAll('input');

      for (i = 0; i < clearedInput.length; i++) {
        optionsBlock.removeChild(clearedInput[i]);
      }
      sum = 0;
    }
  };

  existеnceLink.addEventListener('click', existеnceLinkClickHandler);

  btnOrder.addEventListener('click', fillFormOrder);
  formOrderBtnClose.addEventListener('click', closeBtnClickHandler);
  document.addEventListener('keydown', escPressHandler);

})();

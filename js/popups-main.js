'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var body = document.querySelector('body');

  var btnCallback = document.querySelector('.link-callback');
  var btnSectionChek = document.querySelector('.check-group__btn');
  var popupOverlay = document.querySelector('.popup-overlay');
  var popupDelivery = document.querySelector('.popup-delivery-overlay');
  var btnCloseDelivery = document.querySelector('.btn-close--delivery');
  var formCallback = document.querySelector('.form-callback');
  var inputName = formCallback.querySelector('#input-name');
  var inputPhone = formCallback.querySelector('#input-phone');
  var inputEmail = formCallback.querySelector('#input-email');
  var inputText = formCallback.querySelector('#callback-textarea');

  var responseOne = document.querySelector('.response-one');
  var responseTwo = document.querySelector('.response-two');
  var responseThree = document.querySelector('.response-three');
  var popupResponeOne = document.querySelector('#response-one');
  var popupResponeTwo = document.querySelector('#response-two');
  var popupResponeThree = document.querySelector('#response-three');
  var btnCloseOne = document.querySelector('.btn-response-one');
  var btnCloseTwo = document.querySelector('.btn-response-two');
  var btnCloseThree = document.querySelector('.btn-response-three');
  var btnClose = document.querySelector('.btn-close');
  var btnDetailed = document.querySelector('.btn__delivery');
  console.log(btnCloseDelivery);

  var btnWriteUs = document.querySelector('.write-us');

  var btnDetailedClickHandler = function (evt) {
    evt.preventDefault();
    popupDelivery.classList.remove('hidden');
    body.classList.add('modal-open');
  }

  var btnCallbackClickHandler = function (evt) {
    evt.preventDefault();
    popupOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  };

  var btnCloseDeliveryClickHandler = function () {
    if (popupDelivery) {
      popupDelivery.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  }

  var btnCloseClickHandler = function () {
    popupOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  };

  var btnCloseOneClickHandler = function () {
    popupResponeOne.classList.add('hidden');
    body.classList.remove('modal-open');
  };

  var btnCloseTwoClickHandler = function () {
    popupResponeTwo.classList.add('hidden');
    body.classList.remove('modal-open');
  };

  var btnCloseThreeClickHandler = function () {
    popupResponeThree.classList.add('hidden');
    body.classList.remove('modal-open');
  };

  var responseOneClickHandler = function () {
    popupResponeOne.classList.remove('hidden');
    body.classList.add('modal-open');
  };

  var responseTwoClickHandler = function () {
    popupResponeTwo.classList.remove('hidden');
    body.classList.add('modal-open');
  };

  var responseThreeClickHandler = function () {
    popupResponeThree.classList.remove('hidden');
    body.classList.add('modal-open');
  };

  var escPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== inputName && evt.target !== inputPhone && evt.target !== inputEmail && evt.target !== inputText) {
      popupOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
      inputName.value = '';
      inputPhone.value = '';
      inputEmail.value = '';
      inputText.value = '';
      if (popupResponeOne || popupResponeTwo || popupResponeThree) {
        popupResponeOne.classList.add('hidden');
        popupResponeTwo.classList.add('hidden');
        popupResponeThree.classList.add('hidden');
        body.classList.remove('modal-open');
      }
      if (popupDelivery) {
        popupDelivery.classList.add('hidden');
      }
    }
  };

  if (btnDetailed) {
    btnDetailed.addEventListener('click', btnDetailedClickHandler);
  }

  if (btnCloseDelivery) {
    btnCloseDelivery.addEventListener('click', btnCloseDeliveryClickHandler);
  }

  btnCallback.addEventListener('click', btnCallbackClickHandler);
  if (btnSectionChek) {
    btnSectionChek.addEventListener('click', btnCallbackClickHandler);
  }

  if (btnWriteUs) {
    btnWriteUs.addEventListener('click', btnCallbackClickHandler);
  }

  if (btnClose) {
    btnClose.addEventListener('click', btnCloseClickHandler);
  }

  if (btnCloseOne) {
    btnCloseOne.addEventListener('click', btnCloseOneClickHandler);
  }

  if (btnCloseTwo) {
    btnCloseTwo.addEventListener('click', btnCloseTwoClickHandler);
  }

  if (btnCloseThree) {
    btnCloseThree.addEventListener('click', btnCloseThreeClickHandler);
  }

  if (responseOne) {
    responseOne.addEventListener('click', responseOneClickHandler);
  }

  if (responseTwo) {
    responseTwo.addEventListener('click', responseTwoClickHandler);
  }

  if (responseThree) {
    responseThree.addEventListener('click', responseThreeClickHandler);
  }

  document.addEventListener('keydown', escPressHandler);

  window.popupsmain = {
    ESC_KEYCODE: ESC_KEYCODE,
    body: body,
    btnClose: btnClose,
    btnCallback: btnCallback,
    popupOverlay: popupOverlay,
    btnCallbackClickHandler: btnCallbackClickHandler,
    btnCloseClickHandler: btnCloseClickHandler,
    escPressHandler: escPressHandler
  }

})();

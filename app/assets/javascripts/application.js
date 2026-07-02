//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

document.addEventListener("DOMContentLoaded", function(event) { 
  var selectEl = document.querySelector('#claimNationality')
 
  if (selectEl) {
    accessibleAutocomplete.enhanceSelectElement({
      autoselect: true,
      defaultValue: selectEl.options[selectEl.options.selectedIndex].innerHTML,
      minLength: 2,
      selectElement: selectEl
    });
  }
});

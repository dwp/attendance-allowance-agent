//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

import accessibleAutocomplete from 'accessible-autocomplete'

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

const countries = [
  'France',
  'Germany',
  'United Kingdom'
]

accessibleAutocomplete({
  element: document.querySelector('#my-autocomplete-container'),
  id: 'my-autocomplete', // To match it to the existing <label>.
  source: countries
})
})

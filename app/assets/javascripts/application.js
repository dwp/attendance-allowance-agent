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
  element: document.querySelector('#healthConditions'),
  id: 'healthConditions', // To match it to the existing <label>.
  source: countries
})
})


let selectElement = document.querySelector('#healthConditions')

accessibleAutocomplete.enhanceSelectElement({

  defaultValue: '',
  selectElement: selectElement

})

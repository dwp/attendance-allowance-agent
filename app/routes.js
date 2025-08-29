//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/iteration-1/verify-claimant-details-answer', function (req, res) {

    var verifyAction = req.session.data['verifyAction']

    if (verifyAction == "change"){
        res.redirect('/iteration-1/change-claimant-details')
    } else if (verifyAction == "close") {
        res.redirect('/iteration-1/close-claim')
    } else {
        req.session.data['taskVerifyStatus'] = "complete"
        res.redirect('/iteration-1/claim')
    }

})

router.post('/iteration-1/change-details-answer', function (req, res) {

    var changeDetails = req.session.data['changeClaimDetails']
     req.session.data['taskVerifyStatus'] = "inprogress"

    if (changeDetails == "name"){
        res.redirect('/iteration-1/update/name')
    } else if (changeDetails == "address") {
        res.redirect('/iteration-1/update/address')
    } else {
        res.redirect('/iteration-1/update/phone-number')
    }

})

router.post('/iteration-1/update/claim-search-postcode', function (req, res) {

    req.session.data['claimAddress1'] = "11 street"
    req.session.data['claimAddress2'] = "Heaton"
    req.session.data['claimAddress3'] = "Newcastle upon Tyne"
    req.session.data['claimAddress4'] = "Tyne Upon Wear"
    req.session.data['claimPostcode'] = "NE6 5DQ"

    res.redirect('/iteration-1/verify-claimant-details')

})
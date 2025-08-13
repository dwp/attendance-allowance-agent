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
        res.redirect('/iteration-1/claim-details')
    }

})

router.post('/iteration-1/change-details-answer', function (req, res) {

    var changeDetails = req.session.data['changeClaimDetails']

    if (changeDetails == "name"){
        res.redirect('/iteration-1/update/name')
    } else if (changeDetails == "address") {
        res.redirect('/iteration-1/update/address')
    } else if (changeDetails == "postcode") {
        res.redirect('/iteration-1/update/postcode')
    } else {
        res.redirect('/iteration-1/update/contact')
    }

})
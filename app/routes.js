//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// iteration 1

router.post('/iteration-1/search-nino-answer', function (req, res) {

    var nino = req.session.data['searchNino']

    if (nino == "QQ123456C"){
        res.redirect('/iteration-1/claimant-result')
    } else {
        res.redirect('/iteration-1/claimant-details')
    }

})

router.post('/iteration-1/decision-answer', function (req, res) {

    var decision = req.session.data['decisionAction']

    if (decision == "Disallowed"){
        res.redirect('/iteration-1/exclusion-reason')
    } else {
        res.redirect('/iteration-1/health-condition-disablity')
    }

})

router.post('/iteration-1/rfd-answer', function (req, res) {

    var decision = req.session.data['decisionAction']

    if (decision == "Disallowed"){
        res.redirect('/iteration-1/check-your-answers')
    } else {
        res.redirect('/iteration-1/payment')
    }

})

router.post('/iteration-1/bank-answer', function (req, res) {

    var bank = req.session.data['bankAction']

    if (bank == "No"){
        res.redirect('/iteration-1/search-bank')
    } else {
        res.redirect('/iteration-1/payee-details')
    }

})


// discovery concepts

router.post('/discovery-concepts/verify-claimant-details-answer', function (req, res) {

    var verifyAction = req.session.data['verifyAction']

    if (verifyAction == "change"){
        res.redirect('/discovery-concepts/change-claimant-details')
    } else if (verifyAction == "close") {
        res.redirect('/discovery-concepts/close-claim')
    } else {
        req.session.data['taskVerifyStatus'] = "complete"
        res.redirect('/discovery-concepts/claim')
    }

})

router.post('/discovery-concepts/change-details-answer', function (req, res) {

    var changeDetails = req.session.data['changeClaimDetails']
     req.session.data['taskVerifyStatus'] = "inprogress"

    if (changeDetails == "name"){
        res.redirect('/discovery-concepts/update/name')
    } else if (changeDetails == "address") {
        res.redirect('/discovery-concepts/update/address')
    } else {
        res.redirect('/discovery-concepts/update/phone-number')
    }

})

router.post('/discovery-concepts/update/claim-search-postcode', function (req, res) {

    req.session.data['claimAddress1'] = "11 street"
    req.session.data['claimAddress2'] = "Heaton"
    req.session.data['claimAddress3'] = "Newcastle upon Tyne"
    req.session.data['claimAddress4'] = "Tyne Upon Wear"
    req.session.data['claimPostcode'] = "NE6 5DQ"

    res.redirect('/discovery-concepts/verify-claimant-details')

})
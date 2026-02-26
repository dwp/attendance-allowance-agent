//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// ----------------------- User testing 3 ------------------------------

router.post('/user-testing-3/registration/register/register-answer', function (req, res) {

    var registered = req.session.data['claimRegistered']

    if (registered == "Yes"){
        res.redirect('/user-testing-3/registration/register/confirmation')
    } else {
        res.redirect('/user-testing-3/registration/claim')
    }

})

router.post('/user-testing-3/registration/personal/additional-answer', function (req, res) {

    var additional = req.session.data['claimHaveAdditionalName']

    if (additional == "Yes"){
        res.redirect('/user-testing-3/registration/personal/additional-name')
    } else {
        res.redirect('/user-testing-3/registration/personal/date-of-birth')
    }

}) 

router.post('/user-testing-3/registration/personal/still-alive-answer', function (req, res) {

    var additional = req.session.data['claimStillAlive']

    if (additional == "Yes"){
        res.redirect('/user-testing-3/registration/personal/date-of-death')
    } else {
        res.redirect('/user-testing-3/registration/personal/nationality')
    }

})

router.post('/user-testing-3/registration/address-and-contact/have-address-answer', function (req, res) {

    var haveAddress = req.session.data['claimHaveAddress']

    if (haveAddress == "Yes"){
        res.redirect('/user-testing-3/registration/address-and-contact/address')
    } else {
        res.redirect('/user-testing-3/registration/address-and-contact/address-status')
    }

})

router.post('/user-testing-3/registration/address-and-contact/have-correspondence-answer', function (req, res) {

    var haveCorrespondence = req.session.data['claimHaveCorrespondence']

    if (haveCorrespondence == "Yes"){
        res.redirect('/user-testing-3/registration/address-and-contact/correspondence')
    } else {
        res.redirect('/user-testing-3/registration/address-and-contact/phone-number')
    }

})

router.post('/user-testing-3/registration/address-and-contact/have-alternative-answer', function (req, res) {

    var haveAlternative = req.session.data['claimHaveAlternativeNumber']

    if (haveAlternative == "Yes"){
        res.redirect('/user-testing-3/registration/address-and-contact/alternative-number')
    } else {
        res.redirect('/user-testing-3/registration/address-and-contact/check-your-answers')
    }

})

router.post('/user-testing-3/registration/claim/have-formats-answer', function (req, res) {

    var haveAlternativeFormats = req.session.data['claimHaveAlternativeFlags']

    if (haveAlternativeFormats == "Yes"){
        res.redirect('/user-testing-3/registration/claim/alternative-formats')
    } else {
        res.redirect('/user-testing-3/registration/claim/have-exportability')
    }

})

router.post('/user-testing-3/registration/claim/have-exportability-answer', function (req, res) {

    var haveExportability = req.session.data['claimHaveExportability']

    if (haveExportability == "Yes"){
        res.redirect('/user-testing-3/registration/claim/exportability')
    } else {
        res.redirect('/user-testing-3/registration/claim/check-your-answers')
    }

})

router.post('/user-testing-3/payee-answer', function (req, res) {

    var nino = req.session.data['taskPayeeStatus']

    if (nino == "Complete"){
        res.redirect('/user-testing-3/claim')
    } else {
        res.redirect('/user-testing-3/payee/type')
    }

})

router.post('/user-testing-3/decision-answer', function (req, res) {

    var decision = req.session.data['decisionAction']

    if (decision == "Disallowed"){
        res.redirect('/user-testing-3/exclusion-reason')
    } else {
        res.redirect('/user-testing-3/health-condition-disablity')
    }

})

router.post('/user-testing-3/bank-answer', function (req, res) {

    var bank = req.session.data['taskBankStatus']

    if (bank == "No"){
        res.redirect('/user-testing-3/search-bank')
    } else {
        res.redirect('/user-testing-3/claim')
    }

})

router.post('/user-testing-3/finalise-answer', function (req, res) {

    var finalise = req.session.data['claimFinalised']

    if (finalise == "Yes"){
        res.redirect('/user-testing-3/confirmation')
    } else {
        res.redirect('/user-testing-3/claim')
    }

})

router.post('/user-testing-3/entitlement-answer', function (req, res) {

    var entitlement = req.session.data['entitlementAction']

    if (entitlement == "Yes"){
        res.redirect('/user-testing-3/award/entitlement-start-date')
    } else {
        res.redirect('/user-testing-3/exclusion-periods')
    }

})

router.post('/user-testing-3/exclusion-answer', function (req, res) {

    var exclusion = req.session.data['exclusionAction']

    if (exclusion == "Yes"){
        res.redirect('/user-testing-3/award/exclusion-start-date')
    } else {
        res.redirect('/user-testing-3/reason-for-decision')
    }

})

router.post('/user-testing-3/accountholder-answer', function (req, res) {

    var account = req.session.data['accountholderCheck']

    if (account == "Yes"){
        res.redirect('/user-testing-3/payee-type')
    } else {
        res.redirect('/user-testing-3/accountholder-name')
    }

})


// ----------------------- User testing 2 ------------------------------

router.post('/user-testing-2/payee-answer', function (req, res) {

    var nino = req.session.data['taskPayeeStatus']

    if (nino == "Complete"){
        res.redirect('/user-testing-2/claim')
    } else {
        res.redirect('/user-testing-2/payee/type')
    }

})

router.post('/user-testing-2/search-nino-answer', function (req, res) {

    var nino = req.session.data['searchNino']

    if (nino == "QQ123456C"){
        res.redirect('/user-testing-2/claimant-result')
    } else {
        res.redirect('/user-testing-2/claim')
    }

})

router.post('/user-testing-2/decision-answer', function (req, res) {

    var decision = req.session.data['decisionAction']

    if (decision == "Disallowed"){
        res.redirect('/user-testing-2/exclusion-reason')
    } else {
        res.redirect('/user-testing-2/health-condition-disablity')
    }

})

router.post('/user-testing-2/bank-answer', function (req, res) {

    var bank = req.session.data['taskBankStatus']

    if (bank == "No"){
        res.redirect('/user-testing-2/search-bank')
    } else {
        res.redirect('/user-testing-2/claim')
    }

})

router.post('/user-testing-2/finalise-answer', function (req, res) {

    var finalise = req.session.data['claimFinalised']

    if (finalise == "Yes"){
        res.redirect('/user-testing-2/confirmation')
    } else {
        res.redirect('/user-testing-2/claim')
    }

})

router.post('/user-testing-2/entitlement-answer', function (req, res) {

    var entitlement = req.session.data['entitlementAction']

    if (entitlement == "Yes"){
        res.redirect('/user-testing-2/award/entitlement-start-date')
    } else {
        res.redirect('/user-testing-2/exclusion-periods')
    }

})

router.post('/user-testing-2/exclusion-answer', function (req, res) {

    var exclusion = req.session.data['exclusionAction']

    if (exclusion == "Yes"){
        res.redirect('/user-testing-2/award/exclusion-start-date')
    } else {
        res.redirect('/user-testing-2/reason-for-decision')
    }

})

router.post('/user-testing-2/accountholder-answer', function (req, res) {

    var account = req.session.data['accountholderCheck']

    if (account == "Yes"){
        res.redirect('/user-testing-2/payee-type')
    } else {
        res.redirect('/user-testing-2/accountholder-name')
    }

})

// ----------------------- User testing 1

router.post('/user-testing-1/search-nino-answer', function (req, res) {

    var nino = req.session.data['searchNino']

    if (nino == "QQ123456C"){
        res.redirect('/user-testing-1/claimant-result')
    } else {
        res.redirect('/user-testing-1/claim')
    }

})

router.post('/user-testing-1/decision-answer', function (req, res) {

    var decision = req.session.data['decisionAction']

    if (decision == "Disallowed"){
        res.redirect('/user-testing-1/exclusion-reason')
    } else {
        res.redirect('/user-testing-1/health-condition-disablity')
    }

})

router.post('/user-testing-1/bank-answer', function (req, res) {

    var bank = req.session.data['bankAction']

    if (bank == "No"){
        res.redirect('/user-testing-1/search-bank')
    } else {
        res.redirect('/user-testing-1/payment-summary')
    }

})

router.post('/user-testing-1/finalise-answer', function (req, res) {

    var finalise = req.session.data['claimFinalised']

    if (finalise == "Yes"){
        res.redirect('/user-testing-1/confirmation')
    } else {
        res.redirect('/user-testing-1/claim')
    }

})

router.post('/user-testing-1/entitlement-answer', function (req, res) {

    var entitlement = req.session.data['entitlementAction']

    if (entitlement == "Yes"){
        res.redirect('/user-testing-1/award/entitlement-start-date')
    } else {
        res.redirect('/user-testing-1/exclusion-periods')
    }

})

router.post('/user-testing-1/exclusion-answer', function (req, res) {

    var exclusion = req.session.data['exclusionAction']

    if (exclusion == "Yes"){
        res.redirect('/user-testing-1/award/exclusion-start-date')
    } else {
        res.redirect('/user-testing-1/reason-for-decision')
    }

})

router.post('/user-testing-1/accountholder-answer', function (req, res) {

    var account = req.session.data['accountholderCheck']

    if (account == "Yes"){
        res.redirect('/user-testing-1/payee-type')
    } else {
        res.redirect('/user-testing-1/accountholder-name')
    }

})

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
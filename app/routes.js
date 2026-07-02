//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// ----------------------- User testing 3 ------------------------------


router.post('/version-1/registration/personal/still-alive-answer', function (req, res) {

    var additional = req.session.data['claimStillAlive']

    if (additional == "Yes"){
        res.redirect('/registration/registration/personal/date-of-death')
    } else {
        res.redirect('/registration/registration/personal/nationality')
    }

})


router.post('/version-1/registration/claim/have-exportability-answer', function (req, res) {

    var haveExportability = req.session.data['claimHaveExportability']

    if (haveExportability == "Yes"){
        res.redirect('/registration/registration/claim/exportability')
    } else {
        res.redirect('/registration/registration/claim/check-your-answers')
    }

})

router.post('/version-1/payee-answer', function (req, res) {

    var nino = req.session.data['taskPayeeStatus']

    if (nino == "Complete"){
        res.redirect('/registration/claim')
    } else {
        res.redirect('/registration/payee/type')
    }

})

router.post('/version-1/decision-answer', function (req, res) {

    var decision = req.session.data['decisionAction']

    if (decision == "Disallowed"){
        res.redirect('/registration/exclusion-reason')
    } else {
        res.redirect('/registration/health-condition-disablity')
    }

})

router.post('/version-1/bank-answer', function (req, res) {

    var bank = req.session.data['taskBankStatus']

    if (bank == "No"){
        res.redirect('/registration/search-bank')
    } else {
        res.redirect('/registration/claim')
    }

})

router.post('/version-1/finalise-answer', function (req, res) {

    var finalise = req.session.data['claimFinalised']

    if (finalise == "Yes"){
        res.redirect('/registration/confirmation')
    } else {
        res.redirect('/registration/claim')
    }

})

router.post('/version-1/entitlement-answer', function (req, res) {

    var entitlement = req.session.data['entitlementAction']

    if (entitlement == "Yes"){
        res.redirect('/registration/award/entitlement-start-date')
    } else {
        res.redirect('/registration/exclusion-periods')
    }

})

router.post('/version-1/exclusion-answer', function (req, res) {

    var exclusion = req.session.data['exclusionAction']

    if (exclusion == "Yes"){
        res.redirect('/registration/award/exclusion-start-date')
    } else {
        res.redirect('/registration/reason-for-decision')
    }

})

router.post('/version-1/accountholder-answer', function (req, res) {

    var account = req.session.data['accountholderCheck']

    if (account == "Yes"){
        res.redirect('/registration/payee-type')
    } else {
        res.redirect('/registration/accountholder-name')
    }

})

// -----------------------------

router.post('/version-1/registration/claim/have-formats-answer', function (req, res) {

    var haveAlternativeFormats = req.session.data['claimHaveAlternativeFlags']

    if (haveAlternativeFormats == "Yes"){
        res.redirect('/version-1/registration/claim/alternative-formats')
    } else {
        res.redirect('/version-1/registration/claim/suppress')
    }

})

router.post('/version-1/registration/register/register-answer', function (req, res) {

    var registered = req.session.data['claimRegistered']

    if (registered == "Yes"){
        res.redirect('/version-1/registration/register/confirmation')
    } else {
        res.redirect('/version-1/registration/task-list')
    }

}) 

router.post('/version-1/registration/address-and-contact/welsh-answer', function (req, res) {

    var welshPostcode = req.session.data['claimPostcode']

    if (welshPostcode == "CF10 1NS"){
        res.redirect('/version-1/registration/address-and-contact/welsh-contact')
    } else {
        res.redirect('/version-1/registration/address-and-contact/have-correspondence-address')
    }

})

router.post('/version-1/registration/address-and-contact/have-correspondence-answer', function (req, res) {

    var haveCorrespondence = req.session.data['claimHaveCorrespondence']

    if (haveCorrespondence == "To a different address"){
        res.redirect('/version-1/registration/address-and-contact/correspondence')
    } else {
        res.redirect('/version-1/registration/address-and-contact/contact-number')
    }

})

router.post('/version-1/registration/address-and-contact/have-address-answer', function (req, res) {

    var haveAddress = req.session.data['claimHaveAddress']

    if (haveAddress == "Yes"){
        res.redirect('/version-1/registration/address-and-contact/address')
    } else {
        res.redirect('/version-1/registration/address-and-contact/address-status')
    }

})

router.post('/version-1/registration/personal/has-death-answer', function (req, res) {

    var hasDoD = req.session.data['claimIsDoD']

    if (hasDoD == "Yes"){
        res.redirect('/version-1/registration/personal/date-of-death')
    } else {
        res.redirect('/version-1/registration/personal/nationality')
    }

})

router.post('/version-1/registration/personal/requested-name-answer', function (req, res) {

    var dobVerified = req.session.data['claimDOB']
    var dodVerified = req.session.data['claimDOD']

    if (dobVerified == "Yes"){
        if (dodVerified == "Yes"){
            res.redirect('/version-1/registration/personal/nationality')
        } else {
            res.redirect('/version-1/registration/personal/has-date-of-death')
        }
    } else {
        res.redirect('/version-1/registration/personal/date-of-birth')
    }

})

router.post('/version-1/registration/personal/requested-answer', function (req, res) {

    var requested = req.session.data['claimHasRequestedName']

    if (requested == "Yes"){
        res.redirect('/version-1/registration/personal/requested-name')
    } else {
        res.redirect('/version-1/registration/personal/date-of-birth')
    }

})

router.post('/version-1/registration/claim-continue-answer', function (req, res) {

    var Claimcontinue = req.session.data['continue-claim']
    var PIPInterest = req.session.data['claimPIPInterest']
    var dla65Interest = req.session.data['claimDLA65Interest']
    var padpInterest = req.session.data['claimPADPInterest']
    var scottishBenefit = req.session.data['claimScottishBenefit']
    var statePentionAge = req.session.data['claimStatePensionAge']
    var ADPInterest = req.session.data['claimADPInterest']

    if (PIPInterest == "Yes") {
        res.redirect('/version-1/errors/pip')
    } else if (ADPInterest == "Yes") {
        res.redirect('/version-1/errors/adp')
    } else if (dla65Interest == "Yes") {
        res.redirect('/version-1/errors/dla65')
    } else if (padpInterest == "Yes") {
        res.redirect('/version-1/errors/padp')
    } else if (scottishBenefit == "Yes") {
        res.redirect('/version-1/errors/scottish-benefit')
    } else if (statePentionAge == "No") {
        res.redirect('/version-1/errors/state-pention-age')
    } else if (Claimcontinue == "Yes") {
        res.redirect('/version-1/registration/task-list')
    } else {
        res.redirect('/version-1/search-nino')
    }

})


// ----------------------- decsion old routes ------------------------------


router.post('/decision-old/payee-answer', function (req, res) {

    var nino = req.session.data['taskPayeeStatus']

    if (nino == "Complete"){
        res.redirect('/decision-old/claim')
    } else {
        res.redirect('/decision-old/payee/type')
    }

})

router.post('/decision-old/search-nino-answer', function (req, res) {

    var nino = req.session.data['searchNino']

    if (nino == "QQ123456C"){
        res.redirect('/decision-old/claimant-result')
    } else {
        res.redirect('/decision-old/claim')
    }

})

router.post('/decision-old/decision-answer', function (req, res) {

    var decision = req.session.data['decisionAction']

    if (decision == "Disallowed"){
        res.redirect('/decision-old/exclusion-reason')
    } else {
        res.redirect('/decision-old/health-condition-disablity')
    }

})

router.post('/decision-old/bank-answer', function (req, res) {

    var bank = req.session.data['taskBankStatus']

    if (bank == "No"){
        res.redirect('/decision-old/search-bank')
    } else {
        res.redirect('/decision-old/claim')
    }

})

router.post('/decision-old/finalise-answer', function (req, res) {

    var finalise = req.session.data['claimFinalised']

    if (finalise == "Yes"){
        res.redirect('/decision-old/confirmation')
    } else {
        res.redirect('/decision-old/claim')
    }

})

router.post('/decision-old/entitlement-answer', function (req, res) {

    var entitlement = req.session.data['entitlementAction']

    if (entitlement == "Yes"){
        res.redirect('/decision-old/award/entitlement-start-date')
    } else {
        res.redirect('/decision-old/exclusion-periods')
    }

})

router.post('/decision-old/exclusion-answer', function (req, res) {

    var exclusion = req.session.data['exclusionAction']

    if (exclusion == "Yes"){
        res.redirect('/decision-old/award/exclusion-start-date')
    } else {
        res.redirect('/decision-old/reason-for-decision')
    }

})

router.post('/decision-old/accountholder-answer', function (req, res) {

    var account = req.session.data['accountholderCheck']

    if (account == "Yes"){
        res.redirect('/decision-old/payee-type')
    } else {
        res.redirect('/decision-old/accountholder-name')
    }

})
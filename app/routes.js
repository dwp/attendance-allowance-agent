//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Find an address plugin
const findAddressPlugin = require("find-an-address-plugin");

findAddressPlugin(router);

// Logging session data  
// This code shows in the terminal what session data has been saved.
router.use((req, res, next) => {    
    const log = {  
      method: req.method,  
      url: req.originalUrl,  
      data: req.session.data  
    }  
    console.log(JSON.stringify(log, null, 2))  
   
  next()  
})  

// This code shows in the terminal what page you are on and what the previous page was.
router.use('/', (req, res, next) => {  
    res.locals.currentURL = req.originalUrl; //current screen  
    res.locals.prevURL = req.get('Referrer'); // previous screen
  
  console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
  
    next();  
  });

  // Routing for the example journey. 
  router.post('/country-answer', function(request, response) {

    var country = request.session.data['country']
    if (country == "England"){
        response.redirect("example/complete")
    } else {
        response.redirect("example/ineligible")
    }
})


  // Verification route

  router.post('/verify', function(request, response) {

    request.session.data['verification-completed'] = true;
    response.redirect('/claim/tasks');
});

router.get('/claim/tasks', function(request, response, next) {

  response.locals.verify = request.session.data['verification-completed'];
  return next()
});

// Eligibility route

router.post('/eligible', function(request, response) {

  request.session.data['eligibility-completed'] = true;
  response.redirect('/claim/tasks');
});

router.get('/claim/tasks', function(request, response, next) {

response.locals.eligible = request.session.data['eligibility-completed'];
return next()
});

// Decision route

router.post('/decided', function(request, response) {

  request.session.data['decision-completed'] = true;
  response.redirect('/claim/tasks');
});

router.get('/claim/tasks', function(request, response, next) {

response.locals.decided = request.session.data['decision-completed'];
return next()
});

// Awarded route (this needs to speak to the quick ref on each page it sits on too to change the task outstanding status)

router.post('/awarded', function(request, response) {

  request.session.data['award-completed'] = true;
  response.redirect('/claim/tasks');
});

router.get('/claim/tasks', function(request, response, next) {
response.locals.awarded = request.session.data['award-completed'];
return next()
});

router.get('/claim/personal-details', function(request, response, next) {
response.locals.awarded = request.session.data['award-completed'];
return next()
});

router.get('/claim/claim-details', function(request, response, next) {
response.locals.awarded = request.session.data['award-completed'];
return next()
});

router.get('/claim/documents', function(request, response, next) {
response.locals.awarded = request.session.data['award-completed'];
return next()
});
  
router.get('/claim/timeline', function(request, response, next) {
response.locals.awarded = request.session.data['award-completed'];
return next()
});

router.get('/claim/timeline/add-event', function(request, response, next) {
response.locals.awarded = request.session.data['award-completed'];
return next()
});
    
router.get('/claim/timeline/add-a-note', function(request, response, next) {
response.locals.awarded = request.session.data['award-completed'];
return next()
});
    
router.get('/claim/award-summary', function(request, response, next) {
response.locals.awarded = request.session.data['award-completed'];
return next()
});

// Name Tracing

router.post('/name-trace', function(request, response) {

  var name = request.session.data['nametrace']
  if (name == "yes"){
      response.redirect("/sc2/trace/enter-name")
  } else {
      response.redirect("/sc2/verification")
  }
})

router.post('/nameenter', function(request, response) {

  request.session.data['full-name'];
  response.redirect('/sc2/trace/name-reasons');
});

router.post('/namereasons', function(request, response) {

  request.session.data['name-reasons'];
  response.redirect('/sc2/trace/trace-address');
});

// Address Tracing

router.post('/address-trace', function(request, response) {

  var name = request.session.data['addresstrace']
  if (name == "yes"){
      response.redirect("/sc2/trace/enter-address")
  } else {
      response.redirect("/sc2/verification")
  }
})

router.post('/addressenter', function(request, response) {

  request.session.data['address-line-1'];
  request.session.data['address-line-2'];
  request.session.data['address-town'];
  request.session.data['address-postcode'];
  response.redirect('/sc2/trace/address-reasons');
});

router.post('/addressreasons', function(request, response) {

  request.session.data['address-reasons'];
  response.redirect('/sc2/trace/trace-dob');
});

// DoB Tracing

router.post('/dob-trace', function(request, response) {

  var name = request.session.data['dobtrace']
  if (name == "yes"){
      response.redirect("/sc2/trace/enter-dob")
  } else {
      response.redirect("/sc2/verification")
  }
})

router.post('/dobenter', function(request, response) {

  request.session.data['enter-dob'];
  response.redirect('/sc2/trace/dob-reasons');
});

router.post('/dobreasons', function(request, response) {

  request.session.data['dob-reasons'];
  response.redirect('/sc2/verification');
});
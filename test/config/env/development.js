module.exports = {
       //mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
        mongoUri: 'mongodb://admin:password@localhost:27017/test',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google: {
              clientID: '686874508160-r5vs4r9eboibt10ea5u7klgmabhimfdi.apps.googleusercontent.com',
              clientSecret: 'aisrtPuffq-wtM4Nb0aG4bdH',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }

}

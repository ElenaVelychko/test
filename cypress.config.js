const { defineConfig } = require('cypress')

module.exports = defineConfig({
  loginName: 'uberclassic2017@gmail.com',
  chromeWebSecurity: false,
  password: 'qazwsxedc',
  phone: '0677961133',
  viewportWidth: 1280,
  viewportHeight: 1024,
  pageLoadTimeout: 600000,
  requestTimeout: 3600000,
  responseTimeout: 3600000,
  numTestsKeptInMemory: 0,
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://stage2.finmap.online',
    excludeSpecPattern: '*.js',
    specPattern:
      'cypress/e2e/CreateAccount.feature,AddProjectWithMultibox.feature,ChangeAccountWithMultibox.feature,AddIncomeCategory.feature,ChangePassword.feature,CheckLogo.feature,CreateAccount.feature,CheckUrlsOnDifferentLanguages.feature,CreateCompanyFromBegin.feature,CreatePayment.feature,CreateDebit.feature,GetTelegramToken.feature,Import.feature,CreatePayment.feature,ImportKaspiy.feature,LangSwitcher.feature,LogInWithInvalidPassword.feature,LoginWithRegisteredUser.feature,LogInWithValidCredentials.feature,NoValidPhoneNumber.feature,OnboardPageStatic.feature,SeeHomePage.feature,SignUpPlaceholder.feature,SignUpStaticCZ.feature,SignUpStaticEN.feature,SignUpStaticES.feature,SignUpStaticPL.feature,SignUpStaticRU.feature,SignUpStaticTR.feature,SignUpStaticUA.feature,SignUpWithRegisteredUser.feature,SignUpWithValidPhoneNumber.feature,TabsNavigation.feature,Version.feature,AddBTCandETCAccount.feature,AddAccountInNon-CompanyCurrency.feature',
  },
})

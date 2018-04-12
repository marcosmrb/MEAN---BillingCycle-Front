angular.module('primeiraApp').constant('consts', {
  appName: 'MEAN - MyBillBook',
  version: '1.0',
  owner: 'Marcos',
  year: '2018',
  site: 'https://www.linkedin.com/in/marcos-borba-5926906b/',
  apiUrl: 'https://mrb-moneyapp-backend.herokuapp.com/api',
  oapiUrl: 'https://mrb-moneyapp-backend.herokuapp.com/oapi',
  userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])

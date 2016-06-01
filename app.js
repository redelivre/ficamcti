angular.module('senado', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
})
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.senadores = [
    {
      nome: 'Romário', 
      partido: 'PSB', 
      email: 'romario@senado.gov.br', 
      twitter: '@romario', 
      facebook: 'http://facebook.com/romario', 
      posicao: 'contra',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: '@renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'contra',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: '@renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'contra',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: '@renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros',
      posicao: 'contra',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: '@renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'contra',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: '@renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros' 
      posicao: 'contra',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: '@renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'contra',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: '@renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros' 
      posicao: 'contra',
    },

  ];
}]);

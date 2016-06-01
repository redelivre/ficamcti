angular.module('senado', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
})
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.superSubject = function() {
    return "Senad@r se posicione em defesa do MCTI!";
  }
  $scope.superBody = function() {
    return "Senad@r, \n"+
      "Viemos por meio desta mensagem pedir que vote contra o fechamento do MCTI.";
  }
  $scope.emails = function(senadores) {
    var emails = 'contato@redelivre.org.br';
    angular.forEach(senadores, function(senador) {
      if ( 'renan.calheiros@senador.leg.br' != senador.email)
        emails += ', '+senador.email;
    }, emails);
    return emails;
  }
  $scope.subject = function(senador) {
    return "Senador "+senador.nome+" se posicione em defesa do MCTI!"
  }
  $scope.body = function(senador) {
    return "Senad@r "+senador.nome+", \n"+
           "Viemos por meio desta mensagem pedir que vote contra o fechamento do MCTI.";
  }
  $scope.senadores = [
    {
      nome: 'Romário', 
      partido: 'PSB', 
      email: 'romario@senado.gov.br', 
      twitter: 'romario', 
      facebook: 'http://facebook.com/romario', 
      posicao: 'favoravel',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan.calheiros@senador.leg.br', 
      twitter: 'renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'contrario',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: 'renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'contrario',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: 'renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros',
      posicao: 'contrario',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: 'renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'favoravel',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: 'renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'favoravel',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: 'renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros', 
      posicao: 'contra',
    },
    {
      nome: 'Renan Calheiros', 
      partido: 'PMDB', 
      email: 'renan@senado.gov.br', 
      twitter: 'renancalheiros', 
      facebook: 'http://facebook.com/renancalheiros',
      posicao: 'contra',
    },

  ];
}]);

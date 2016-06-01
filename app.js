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
    return "Senador(a) posicione-se em defesa do MCTI!";
  }
  $scope.superBody = function() {
    return "Senador(a), \n"+
      "Vimos por meio desta mensagem pedir que V. Exca. vote contra a extinção do Ministério da Ciência, Tecnologia e Inovação - MCTI.";
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
    return "Senador(a) "+senador.nome+", posicione-se em defesa do MCTI!"
  }
  $scope.body = function(senador) {
    return "Senador(a) "+senador.nome+", \n"+
           "Vimos por meio desta mensagem pedir que V. Exca. vote contra a extinção do Ministério da Ciência, Tecnologia e Inovação - MCTI.";
  }
  $scope.senadores = [
    {
      nome: 'Lasier Martins', 
      partido: 'PDT',
      uf: 'RS',
      email: 'lasier.martins@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://www.facebook.com/LasierMartinsOficial', 
      posicao: '#',
    },
    {
      nome: 'Hélio José', 
      partido: 'PMDB', 
      uf: 'DF',
      email: 'heliojose@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://facebook.com/#', 
      posicao: '#',
    },
    {
      nome: 'Walter Pinheiro ', 
      partido: 'Sem Partido', 
      uf: 'BA',
      email: 'pinheiro@senador.gov.br', 
      twitter: '#', 
      facebook: 'http://facebook.com/#', 
      posicao: '#',
    },
    {
      nome: 'Angela Portela', 
      partido: 'PT', 
      uf:'CE',
      email: 'angela.portela@senadora.leg.br', 
      twitter: '#', 
      facebook: 'http://www.facebook.com/angelaportela13',
      posicao: '#',
    },
    {
      nome: 'Ivo Cassol ', 
      partido: 'PP', 
      uf:'RO',
      email: 'ivo.cassol@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://facebook.com/#', 
      posicao: '#',
    },
    {
      nome: 'Valdir Raupp ', 
      partido: 'PMDB',
      uf:'RO',
      email: 'valdir.raupp@senador.leg.br', 
      twitter: 'senadorraupp', 
      facebook: 'http://facebook.com/#', 
      posicao: '#',
    },
    {
      nome: 'João Alberto Souza', 
      partido: 'PMDB',
      uf: 'MA',
      email: 'joao.alberto.souza@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://facebook.com/#', 
      posicao: '#',
    },
    {
      nome: 'Sérgio Petecão', 
      partido: 'PSD', 
      uf:'AC',
      email: 'sergio.petecao@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://facebook.com/#',
      posicao: '#',
    },
    {
      nome: 'Omar Aziz', 
      partido: 'PSD', 
      uf:'AM',
      email: 'omar.aziz@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://facebook.com/#',
      posicao: '#',
    },
    {
      nome: 'Davi Alcolumbre', 
      partido: 'DEM', 
      uf:'AP',
      email: 'davi.alcolumbre@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://facebook.com/#',
      posicao: '#',
    },
    {
      nome: 'Aloysio Nunes Ferreira', 
      partido: 'PSDB', 
      uf:'SP',
      email: 'aloysionunes.ferreira@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://facebook.com/#',
      posicao: '#',
    },
    {
      nome: 'Flexa Ribeiro', 
      partido: 'PSDB', 
      uf:'PA',
      email: 'flexa.ribeiro@senador.leg.br', 
      twitter: 'senadorflexa', 
      facebook: 'http://www.facebook.com/senadorflexaribeiro',
      posicao: '#',
    },
    {
      nome: 'Cristovam Buarque', 
      partido: 'PPS', 
      uf:'DF',
      email: 'cristovam.buarque@senador.leg.br', 
      twitter: 'sen_cristovam', 
      facebook: 'http://www.facebook.com/Cristovam.Buarque',
      posicao: '#',
    },
    {
      nome: 'Randolfe Rodrigues', 
      partido: 'REDE', 
      uf:'AP',
      email: 'randolfe.rodrigues@senador.leg.br', 
      twitter: 'randolfeap', 
      facebook: 'http://www.facebook.com/randolferodrigues',
      posicao: '#',
    },
    {
      nome: 'Marcelo Crivella', 
      partido: 'PRB', 
      uf:'RJ',
      email: 'marcelo.crivella@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://www.facebook.com/#',
      posicao: '#',
    },
    {
      nome: 'Eduardo Amorim', 
      partido: 'PSC', 
      uf:'SE',
      email: 'eduardo.amorim@senador.leg.br', 
      twitter: '#', 
      facebook: 'http://www.facebook.com/#',
      posicao: '#',
    },

  ];
}]);

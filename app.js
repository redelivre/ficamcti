angular.module('senado', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
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
      foto: 'lasier_martins',
      email: 'lasier.martins@senador.leg.br', 
      twitter: 'lasierm', 
      facebook: 'https	://www.facebook.com/LasierMartinsOficial', 
      posicao: '#',
    },
    {
      nome: 'Hélio José', 
      partido: 'PMDB', 
      uf: 'DF',
      foto: 'helio_jose',
      email: 'heliojose@senador.leg.br', 
      twitter: 'senador_helio', 
      facebook: 'https://www.facebook.com/senadorheliojose', 
      posicao: '#',
    },
    {
      nome: 'Walter Pinheiro ', 
      partido: 'Sem Partido', 
      uf: 'BA',
      foto: 'walter_pinheiro',
     email: 'pinheiro@senador.gov.br', 
      twitter: 'pinheirosenador', 
      facebook: 'https://www.facebook.com/pinheiro.senador', 
      posicao: '#',
    },
    {
      nome: 'Angela Portela', 
      partido: 'PT', 
      uf:'CE',
      foto: 'angela_portela',
      email: 'angela.portela@senadora.leg.br', 
      twitter: 'angelaportelarr', 
      facebook: 'https://www.facebook.com/angelaportela13',
      posicao: '#',
    },
    {
      nome: 'Ivo Cassol ', 
      partido: 'PP', 
      uf:'RO',
      foto: 'ivo_cassol',
      email: 'ivo.cassol@senador.leg.br', 
      twitter: 'senadorcassol', 
      facebook: 'https://www.facebook.com/IVO-CASSOL-1481362108788369', 
      posicao: '#',
    },
    {
      nome: 'Valdir Raupp ', 
      partido: 'PMDB',
      uf:'RO',
      foto: 'valdir_raupp',
      email: 'valdir.raupp@senador.leg.br', 
      twitter: 'senadorraupp', 
      facebook: 'https://www.facebook.com/senadorrauppro', 
      posicao: '#',
    },
    {
      nome: 'João Alberto Souza', 
      partido: 'PMDB',
      uf: 'MA',
      foto: 'joao_alberto_souza',
      email: 'joao.alberto.souza@senador.leg.br', 
      twitter: 'senjoaoalberto', 
      facebook: 'https://www.facebook.com/joaoalbertosenador', 
      posicao: '#',
    },
    {
      nome: 'Sérgio Petecão', 
      partido: 'PSD', 
      uf:'AC',
      foto: 'sergio_petecao',
      email: 'sergio.petecao@senador.leg.br', 
      twitter: 'senadorpetecao', 
      facebook: 'https://www.facebook.com/sergiopetecao',
      posicao: '#',
    },
    {
      nome: 'Omar Aziz', 
      partido: 'PSD', 
      uf:'AM',
      foto: 'omar_aziz',
      email: 'omar.aziz@senador.leg.br', 
      twitter: 'omarazizpsd', 
      facebook: 'https://www.facebook.com/OmarAzizPSD',
      posicao: '#',
    },
    {
      nome: 'Davi Alcolumbre', 
      partido: 'DEM', 
      uf:'AP',
      foto: 'davi_alcolumbre',
      email: 'davi.alcolumbre@senador.leg.br', 
      twitter: 'davialcolumbre', 
      facebook: 'https://www.facebook.com/davi.alcolumbre',
      posicao: '#',
    },
    {
      nome: 'Aloysio Nunes Ferreira', 
      partido: 'PSDB', 
      uf:'SP',
      foto: 'aloysio_nunes',
      email: 'aloysionunes.ferreira@senador.leg.br', 
      twitter: 'aloysio_nunes', 
      facebook: 'https://www.facebook.com/aloysionunes',
      posicao: '#',
    },
    {
      nome: 'Flexa Ribeiro', 
      partido: 'PSDB', 
      uf:'PA',
      foto: 'flexa_ribeiro',
      email: 'flexa.ribeiro@senador.leg.br', 
      twitter: 'senadorflexa', 
      facebook: 'https://www.facebook.com/senadorflexaribeiro',
      posicao: '#',
    },
    {
      nome: 'Cristovam Buarque', 
      partido: 'PPS', 
      uf:'DF',
      foto: 'cristovam_buarque',
      email: 'cristovam.buarque@senador.leg.br', 
      twitter: 'sen_cristovam', 
      facebook: 'https://www.facebook.com/Cristovam.Buarque',
      posicao: '#',
    },
    {
      nome: 'Randolfe Rodrigues', 
      partido: 'REDE', 
      uf:'AP',
      foto: 'randolfe_rodrigues',
      email: 'randolfe.rodrigues@senador.leg.br', 
      twitter: 'randolfeap', 
      facebook: 'https://www.facebook.com/randolferodrigues',
      posicao: '#',
    },
    {
      nome: 'Marcelo Crivella', 
      partido: 'PRB', 
      uf:'RJ',
      foto: 'marcelo_crivella',
      email: 'marcelo.crivella@senador.leg.br', 
      twitter: 'mcrivella', 
      facebook: 'https://www.facebook.com/marcelocrivella',
      posicao: '#',
    },
    {
      nome: 'Eduardo Amorim', 
      partido: 'PSC', 
      uf:'SE',
      foto: 'eduardo_amorim',
      email: 'eduardo.amorim@senador.leg.br', 
      twitter: 'eduardoamorimse', 
      facebook: 'https://www.facebook.com/eduardoamorim20',
      posicao: '#',
    },

  ];
}]);
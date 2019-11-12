/*
 * Arquivo: app.js
 * Autor: Paulo Alves
 * Descrição: responsável por conter as informações principais da aplicação
 * Data: 11/11/2019
*/

angular.module("alunoModulo",['ngRoute'])

.config(function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl:"templates/home.html", controller:"indexController"
    })
    .when("/contato", {
        templateUrl:"templates/contato.html", controller:"contatoController"
    })
    $routeProvider.otherwise({redirectTo:"/home"})
})
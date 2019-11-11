/*
 * Arquivo: controllers.js
 * Autor: Paulo Alves
 * Descrição: controlador responsável pela regra de negócio da aplicação e contato
 * Data: 11/11/2019
*/

angular.module("alunoModulo")
.controller("indexController", function($scope){
    $scope.titulo = "Sistema de Notas"
    $scope.alunos = [
        {nome: "Joana",email:"joana@mail.com",nota1:9.5,nota2:8.0,nota3:5.5},
        {nome: "Fabiano",email:"fabiano@mail.com",nota1:7.0,nota2:4.5,nota3:6.5},
        {nome: "Adriana",email:"adriana@mail.com",nota1:8.5,nota2:7.0,nota3:5.5},
        {nome: "Carlos",email:"carlos@mail.com",nota1:7.5,nota2:8.0,nota3:6.5},
        {nome: "Raquel",email:"raquel@mail.com",nota1:6.5,nota2:3.0,nota3:6.5},
        {nome: "Marcelo",email:"marcelo@mail.com",nota1:6.5,nota2:6.0,nota3:7.5}
    ]
})
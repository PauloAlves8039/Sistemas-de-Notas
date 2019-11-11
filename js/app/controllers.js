/*
 * Arquivo: controllers.js
 * Autor: Paulo Alves
 * Descrição: responsável pela regra de negócio da aplicação com os controladores index e contato
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

    let init = function(){
        $scope.alunos.forEach(function(aluno){
            aluno.media = media(aluno)
        })
        limparCampos()
    }

    let media = function(Aluno){
        let media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3))/3
        return media.toFixed(2)
    }

    let limparCampos = function(){
        $scope.Aluno = {nome: "",email:"",nota1:'',nota2:'',nota3:'',media:''}
    }

    init()
})

.controller("contatoController",function($scope){
    $scope.titulo = "Contato"
})
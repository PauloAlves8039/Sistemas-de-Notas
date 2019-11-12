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
        {nome: "Joana",email:"joana@mail.com",nota1:9.5,nota2:8.5,nota3:5.5},
        {nome: "Fabiano",email:"fabiano@mail.com",nota1:7.5,nota2:4.5,nota3:6.5},
        {nome: "Adriana",email:"adriana@mail.com",nota1:8.5,nota2:7.5,nota3:5.5},
        {nome: "Carlos",email:"carlos@mail.com",nota1:7.5,nota2:8.5,nota3:6.5},
        {nome: "Raquel",email:"raquel@mail.com",nota1:6.5,nota2:3.5,nota3:6.5},
        {nome: "Marcelo",email:"marcelo@mail.com",nota1:6.5,nota2:6.5,nota3:7.5}
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

    $scope.editando = false
    let alunoEditar

    $scope.abrirRegistroAluno = function(){
        $scope.editando = false
        limparCampos()
    }

    $scope.adicionarRegistroAluno = function(Aluno){
        Aluno.media = media(Aluno)
        $scope.alunos.push(Aluno)
        $('#ExemploModalCentralizado').modal('hide')
        limparCampos()
    }
    
    $scope.salvarRegistroAluno = function(Aluno){
        alunoEditar.nome = Aluno.nome
        alunoEditar.email = Aluno.email
        alunoEditar.nota1 = Aluno.nota1
        alunoEditar.nota2 = Aluno.nota2
        alunoEditar.nota3 = Aluno.nota3
        alunoEditar.media = media(Aluno)
        $('#ExemploModalCentralizado').modal('hide')
    }
    
    $scope.editarRegistroAluno = function(Aluno){
        $scope.editando = true
        angular.copy(Aluno,$scope.Aluno)
        $('#ExemploModalCentralizado').modal('show')
        alunoEditar = Aluno
    }

    $scope.deletarRegistroAluno = function(Aluno){
        for(let index in $scope.alunos){
            let aux = $scope.alunos[index]
            if(Aluno == aux){
                $scope.alunos.splice(index, 1)
            }
        }
    }

    let limparCampos = function(){
        $scope.Aluno = {nome: "",email:"",nota1:'',nota2:'',nota3:'',media:''}
    }

    init()
})

.controller("contatoController",function($scope){
    $scope.titulo = "Contato"
})
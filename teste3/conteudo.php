<?php
    header("Content-Type: application/json; charset=UTF-8");

    class Aluno {}
    $dados = new Aluno();
    $dados -> nome = "Henrique";
    $dados -> sobrenome = "Vieira";

    $dados2 = new Aluno();
    $dados2 -> nome = "Fioreli";
    $dados2 -> sobrenome = "Santos";

    $lista = array($dados, $dados2);

    echo json_encode($lista);
?>
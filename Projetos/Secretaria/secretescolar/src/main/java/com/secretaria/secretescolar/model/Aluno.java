package com.secretaria.secretescolar.model;

public class Aluno {

    private String nome;
    private int idade;
    private int id;

    public Aluno(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;

    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getNome(){
        return nome;
    }

    public void setIdade(int idade){
        this.idade = idade;
    }
    public int getidade(){
        return idade;
    }

    public void setId(int id) {
        this.id = id;
    }
    public int getId(){
        return id;
    }

    public void exibirInfo() {
        System.out.println("ID: " + id);
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
    }

    
}

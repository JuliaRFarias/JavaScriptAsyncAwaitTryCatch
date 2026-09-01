async function cadastroUsuario(nome, idade) {
    try {
        if (!nome) {
            throw new Error("O nome é obrigatório:");
        }

        if (idade < 18) {
            throw new Error("O usuário precisa ter 18 anos de idade");
        }
        console.log("Usuário cadastrado com sucesso!");
        console.log("Nome:", nome);
        console.log("Idade:", idade);

    } catch (error) {
        console.log("Erro no cadastro:", error.message)
    }
}

cadastroUsuario("Matheus", 17);
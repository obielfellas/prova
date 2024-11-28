async function buscarPokemon() {
    // Obtém o ID do input
    let idpk = document.getElementById('id-pk').value.trim();

    // Define um valor padrão caso o ID não seja informado
    let id = idpk ? idpk : 25;

    // Monta a URL da API
    let url = `https://pokeapi.co/api/v2/pokemon-form/${id}`;

    try {
        // Faz a requisição à API
        let response = await fetch(url, { method: "GET" });

        if (response.ok) {
            let data = await response.json();

            // Atualiza os campos HTML com os dados da resposta
            document.getElementById('txt-nome').innerHTML = data.name;
            document.getElementById('txt-idade').innerHTML = id;
            document.getElementById('img-perfil').src = data.sprites.front_default || "perfil.png";
        } else {
            alert("Pokémon não encontrado!");
        }
    } catch (error) {
        console.error("Erro ao buscar o Pokémon:", error);
        alert("Ocorreu um erro. Verifique o ID e tente novamente.");
    }
}

// Chama a função inicial para carregar o Pokémon padrão
buscarPokemon();

function obterDescricaoPessoal(person) {
    return `${person.name} (${person.id}) é um ${person.bio} que vive em ${person.location} com ${person.followers} seguidores.`;
}

// Não modifique as linhas abaixo
let person = {
  "login": "janainajunqueira",
  "id": 3948477,
  "type": "User",
  "name": "Janaína Junqueira",
  "blog": "https://blogjanajuju.online",
  "location": "Florianópolis",
  "bio": "Google Developer Expert • Microsoft MVP • Web Consultant",
  "public_repos": 451,
  "public_gists": 11,
  "followers": 837,
  "following": 294,
  "created_at": "2012-09-12T11:12:34Z",
};

console.log(obterDescricaoPessoal(person));
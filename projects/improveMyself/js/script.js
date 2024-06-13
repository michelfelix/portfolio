/* INÍCIO COMO DEVE FAZER CONDIÇÕES AO INVÉS DE IFS */

function isColor(data) {
    const colors = {
        red: "vermelho",
        blue: "azul",
        green: "verde"
    }
    return colors[data] || "Não está na lista"
}

console.log(isColor("red"))

/* INÍCIO COMO DEVE FAZER CONDIÇÕES AO INVÉS DE IFS */

// INÍCIO EVENT LOOP

// console.log(1)
// setTimeout(() => {
//     console.log('setTimeOut data')    
// }, 1);
    
// const promise = new Promise  (resolve => {
//     resolve('promise data')
// })

// promise.then(data=> console.log(data))
        
// console.log(2)
        
// FIM EVENT LOOP

//INÍCIO FETCH

    function getGithubInfo() {
        const githubURL = 'https://api.github.com/users/michelfelix/repos'
        const cardsContainer = document.getElementById('cards-repository')

        fetch(githubURL)
        .then((resp) => resp.json())
        .then(function (data) {
            var repositories = data

            cardsContainer.innerHTML = ''
            
            return repositories.forEach((repositories, index) => {
                var repositoryName = ((repositories.name != null) ? repositories.name : '...')
                var repositoryDescription = ((repositories.description != null) ? repositories.description : '...')
                var repositoryURL = ((repositories.homepage != null) ? repositories.homepage : repositories.git_url)
                var card = document.createElement('div')

                
                card.classList.add('card-repository')
                card.classList.add(`card-repository-${index + 1}`)
                card.innerHTML = `
                    <a href="${repositoryURL}" id="repository-link">
                        <div class="card-repository-name">
                            <p>
                                Nome: ${repositoryName}
                            </p>
                        </div>
                        
                        <div class="card-repository-description">
                            <p>
                                Descrição: ${repositoryDescription}
                            </p>
                        </div>
                    </a>
                `
                cardsContainer.appendChild(card)
            });
        })
    }

    setTimeout(getGithubInfo, 2000);
//FIM FETCH
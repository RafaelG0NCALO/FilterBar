const SearchBar = document.querySelector('.bar input');
const cards = document.querySelectorAll('.content .card')

SearchBar.addEventListener('input', filterCards)

function filterCards(){
   if(SearchBar.value != ''){
    for(let card of cards){
        let title = card.querySelector('p')
        title = title.textContent.toLocaleLowerCase()
        
        let filterText = SearchBar.value.toLocaleLowerCase()
        if(!title.includes(filterText)){
            card.style.display = 'none'
        }else{
            card.style.display = 'block'
        }
    }
   }
   else{
    for(let card of cards){
        card.style.display = 'block'
    }
   }
}

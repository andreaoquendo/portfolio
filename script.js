const cards = document.querySelectorAll('.card');
var active_card;

cards.forEach((card) => {
    card.addEventListener('click', () =>{
        removeActiveClasses();
        card.classList.add('active');
        if(active_card == card){
            card.classList.remove('active');
            active_card = 0;
        }else{
            active_card = card;
        }
        console.log('active!');
    })
});

function removeActiveClasses(){
    cards.forEach(card =>{
        card.classList.remove('active');
    })
}
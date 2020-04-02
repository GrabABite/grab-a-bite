let $doc = document.documentElement
let $link = document.querySelector('header a')
$link.addEventListener('click', event => { console.log('clicked') })
$link.getAttribute('href')




// Part carousel 
const benedicts = document.querySelector('.ben');
const cards = Array.from(benedicts.children);
const scrollSpy = document.querySelector('.scrollspy');
const dots = Array.from(scrollSpy.children);

const cardHeight = cards[0].getBoundingClientRect().height;

const setCardPosition = (card,index) => {
  card.style.top = cardHeight * index + 'px';
};
cards.forEach(setCardPosition);

const moveToSlide = (currentCard, targetCard) => {
  currentCard.classList.remove('current');
  targetCard.classList.add('current');
}

window.addEventListener('scroll',e =>{
  const currentCard = benedicts.querySelector('.current');
  const nextCard = currentCard.nextElementSibling;
  if (nextCard != null) {
  // const amountToMove = nextCard.style.top;
    currentCard.classList.remove('current');
    nextCard.classList.add('current');
  // benedicts.style.transform = 'translateY(' +amountToMove + ')';
  }
})

scrollSpy.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  
  if (!targetDot) return;

  // const currentCard = benedicts.querySelector('.current');
  // const currentDot = scrollSpy.querySelector('current');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetCard = cards[targetIndex];
  targetCard.scrollIntoView();
})
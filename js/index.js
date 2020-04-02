let $doc = document.documentElement
let $link = document.querySelector('header a')
$link.addEventListener('click', event => { console.log('clicked') })
$link.getAttribute('href')


//Part Carousel + Scrollspy
const benedicts = document.querySelector('.ben');
const cards = Array.from(benedicts.children);
const scrollSpy = document.querySelector('.scrollspy');
const dots = Array.from(scrollSpy.children);

let currentHighlightedIndex = 0;

const isCardInMiddle = (card, centreY) => {
  let rectangleCard = card.getBoundingClientRect();
  difference = Math.abs(centreY - rectangleCard.y);
  return difference < 600;
}

const highlightDot = (targetedIndex) => {
  dots[currentHighlightedIndex].classList.remove('current');
  dots[targetedIndex].classList.add('current');
  currentHighlightedIndex = targetedIndex;
}

highlightDot(currentHighlightedIndex);

const performAction = () => {
  let centerY = document.documentElement.clientHeight / 2;

  for (let index = 0; index < cards.length; index++) {
    card = cards[index];
    // Runs 5 times, with values of step 0 through 4.
    if(isCardInMiddle(card, centerY)){
        highlightDot(index);
        break;
    }
  }
}

window.addEventListener('scroll', (e) => {
  performAction();
});
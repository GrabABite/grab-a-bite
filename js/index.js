let $doc = document.documentElement
let $link = document.querySelector('header a')
$link.addEventListener('click', event => { console.log('clicked') })
$link.getAttribute('href')


//Part Carousel + Scrollspy
// const benedicts = document.querySelector('.ben');
// const cards = Array.from(benedicts.children);
const scrollSpy = document.querySelector('.scrollspy');
const dots = Array.from(scrollSpy.children);

let currentHighlightedIndex = 0;

const isCardInMiddle = (card, centreY) => {
  let rectangleCard = card.getBoundingClientRect();
  difference = Math.abs(centreY - rectangleCard.y);
  return difference < 500;
}

const highlightDot = (targetedIndex) => {
  dots[currentHighlightedIndex].classList.remove('current');
  dots[targetedIndex].classList.add('current');
  currentHighlightedIndex = targetedIndex;
}

highlightDot(currentHighlightedIndex);

const performAction = () => {
  let centerY = document.documentElement.clientHeight / 2;

  let dynamicCards= document.querySelector('.ben');
  let allCards = dynamicCards.children;

  for (let index = 0; index < 11; index++) {
    card = allCards[index];
    
    if(isCardInMiddle(card, centerY)){
        highlightDot(index);
        break;
    }
  }
  // for (let index = 0; index < cards.length; index++) {
  //   card = cards[index];
    
  //   if(isCardInMiddle(card, centerY)){
  //       highlightDot(index);
  //       break;
  //   }
  // }
}

window.addEventListener('scroll', (e) => {
  performAction();
});

//Part infinite loop

let reachLastPg = false

let theBennyList = (event) => { 
  
  let winH = document.documentElement.clientHeight
  let winW = document.documentElement.clientWidth
  let docH = document.documentElement.scrollHeight
  let docW = document.documentElement.scrollWidth
  let winY = window.scrollY
  let winX = window.scrollX
  let maxY = docH - winH
  let maxX = docW - winW
  let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
  let pctX = Math.round(winX / Math.max(maxX, 1) * 100)

  if (winY >= maxY) {
    // You have definitely hit the bottom

    // Add new content when we hit the bottom
    document.querySelector('#ben').innerHTML += `
    <section class="bennyHistory" id="bennyHistory">
    <article class="fade-in">
        <h2 class="h2"> History </h2>
        <div class="fampic">
            <img src="img/bruch.jpg" alt="Lemuel Benedict" class="lben">
        </div>
        <h1> Who was the Egg Man? </h1>
        <ul>
            <li> <h1>1860s</h1> </li>
            <li>Credit is given to Delmonico’s Restaurant, the very first restaurant or public dining room ever opened in the United States.  In the 1860’s, a regular patron of the restaurant, Mrs. LeGrand Benedict, finding nothing to her liking and wanting something new to eat for lunch, discussed this with Delmonico’s Chef Charles Ranhofer (1936-1899), Ranhofer came up with Eggs Benedict.  He has a recipe called Eggs a’ la Benedick (Eufa a’ la Benedick) in his cookbook called The Epicurean published in 1894:</li>

            <li>Eggs la Benedick – Cut some muffins in halves crosswise, toast them without allowing to brown, thn place a round of cooked ham an eighth of an inch thick and of the same diameter as the muffins one each half. Heat in a moderate oven and put a poached egg on each toast.  Cover the whole with Hollandaise sauce.  </li>      
                
            <li> <h1>1894</h1> </li>
            <li> Following story appeared in the December 19,1942 issue of the weekly New Yorker Magazine  “Talk of the Town” column and is based on an interview with Lemuel Benedict the year before he died.</li>
                
            <li>In 1894, Lemuel Benedict, a Wall Street broker, who was suffering from a hangover, ordered“some buttered toast, crisp bacon, two poached eggs, and a hooker of hollandaise sauce” at the Waldorf Hotel in New York.  The Waldorf’s legendary chef, Oscar Tschirky, was so impressed that he put the dish on his breakfast and luncheon menus after substituting Canadian bacon for crisp bacon and a toasted English muffin for toasted bread.</li>
                
            <li><h1>1896</h1> </li>
            <li>Fannie Merritt Farmer’s (1857-1915) revised, edited, and reissued Mary J. Lincoln’s cookbook called The Boston Cooking-School Cook Book. In it is a recipe for Eggs la Benedict. The recipe is as follows:</li>
                
            <li>Eggs la Benedict – Split and toast English muffins. Sautcircular pieces of cold boiled ham, place these over the halves of muffins, arrange on each a dropped egg, and pour around Hollandaise Sauce II, diluted with cream to make of such consistency to pour easily.</li>
        </ul>
    </article>   
</section>
      `

    //update the variable that's tracking our state
    reachLastPg = true
  }

}


window.addEventListener('load', theBennyList)
window.addEventListener('scroll', theBennyList)
window.addEventListener('resize', theBennyList)


// Part scroll down
function expandH() {
    document.getElementById('.bennyHistory').innerHTML = "";
}
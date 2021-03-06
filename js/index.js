let $doc = document.documentElement
let $link = document.querySelector('header a')
$link.addEventListener('click', event => { 
console.log('clicked') })
$link.getAttribute('href')


//Part A+B - Carousel + Scrollspy
// const benedicts = document.querySelector('.ben');
// const cards = Array.from(benedicts.children);
const scrollSpy = document.querySelector('.scrollspy');
const dots = Array.from(scrollSpy.children);

let currentHighlightedIndex = 0;

const isCardInMiddle = (card, centreY) => {
  let rectangleCard = card.getBoundingClientRect();
  difference = Math.abs(centreY - rectangleCard.y);
  return difference < 700;
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

  //back to top
  let fisrtBennyHistory = document.querySelector('#bennyHistory');
  
  if(fisrtBennyHistory != null) {
    let isBennyHistoryInCentre = isCardInMiddle(fisrtBennyHistory, centerY);
    
    if (isBennyHistoryInCentre) {
      let allArrowButtons = document.querySelectorAll('#btButt');
      allArrowButtons.forEach(element => element.style.visibility = "visible");
    } 
  }

  let lastCard = allCards[10];
  if (isCardInMiddle(lastCard, centerY) && fisrtBennyHistory != null) {
    let allArrowButtons = document.querySelectorAll('#btButt');
    allArrowButtons.forEach(element => element.style.visibility = "hidden");
  }

  for (let index = 0; index < 11; index++) {
    card = allCards[index];
    
    if(isCardInMiddle(card, centerY)){
        highlightDot(index);
        break;
    }
  }
}

window.addEventListener('scroll', (e) => {
  performAction();
});

//HEART BUTTON BEYBE
//I tried removing and adding class but it would only work for the first heart, then stumbled upon a research about toggleClass, tried it and it worked on all of them
//https://ultimatecourses.com/blog/javascript-hasclass-addclass-removeclass-toggleclass
//https://www.w3schools.com/jquery/html_toggleclass.asp

$(".far").click(function() {
  $(this).toggleClass("fas fa-heart far fa-heart");
});

//MORE BUTTON
const enableScrolling = (event) => {
  theBennyList(event);
  window.addEventListener('load', theBennyList);
  window.addEventListener('scroll', theBennyList);
  window.addEventListener('resize', theBennyList);
}

let moreButton= document.querySelector('.more');
moreButton.addEventListener('click', enableScrolling) 



//Part C - infinite loop
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
      <div class="bt"><a href="#top"><span id="btButt" class="material-icons back-top">arrow_upward</span></a></div>
      <article class="animated animatedfadeIn fadeIn fade-in">
        <ul>
            <li><h2 class="h2"> History </h2></li>
            <li><img src="img/bruch.jpg" alt="Lemuel Benedict" class="lben"></li>
        
            <li><h1> Who was the Egg Man? </h1></li>
        
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

// Part D - Comment Section
  function commentSection(num) {  
    let $addComment = document.querySelectorAll('.addComment' + num)
    let $commentText = document.querySelectorAll('.comments'+ num)
    let $commentList = document.querySelectorAll('.commentList'+ num)
    let commentPost = $commentText[0].value.trim();
        if (commentPost) {
          var li = document.createElement('li');
          li.appendChild(document.createTextNode(commentPost));
          $commentList[0].appendChild(li);
        }
        return
      }
      document.getElementById("addComment"+num+"").addEventListener('click', commentSection)


//heart button is before the more button
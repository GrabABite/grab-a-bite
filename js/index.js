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

//Part C: Infinte Scroll/ loop

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
    <section id="0" class="one card current">
    <img src="img/avocado.jpg" alt="Egg B1" class="benny">

    <div class="nameHeart" id="nameHeart">
        <h1>Avocado Eggs Benedict</h1>
        <a href="#"><i class="material-icons" id="fave">favorite_border</i></a>
    </div>

    <div class="description">
        <p>Avocado is known as good fat; it’s loaded with many nutrients and heart - healthy fatty acid. Avocado and eggs are like yin and yang, they’re simply perfect together. What’s a better benedict combo than avocado eggs benedict. The buttery hollandaise sauce adds the signature creaminess to it. This basic benedict is so simple, and you can easily make it from scratch at home. Truly it is the ultimate avocado-egg lover’s breakfast or brunch</p> 
    </div>

    <div class="comment" id="comment">
        <form>
            <label for="comment"></label>
            <textarea class="comments" placeholder="Let us know what you think!" name="comments" id="comments"></textarea>
        </form>
        <button class="addComment" id="addComment"> COMMENT </button>
    </div>

    <div class="commList">
        <ul class="commentList" id="commentList"></ul>
    </div>

    <div class="shareThis" id="shareThis">
        <ul>
        <li><a href="https://www.facebook.com/login"><img src="img/facebook.svg"></a></li>
        <li><a href="https://www.instagram.com/accounts/login/?hl=en"><img src="img/instagram.svg"></a></li>
        <li><a href="https://twitter.com/login"><img src="img/twitter.svg"></a><li>
        </ul>
    </div>

</section>
      `
    checkHowManyThereAre(document.querySelector('#ben'), 'section.card')

    //update the variable that's tracking our state
    reachLastPg = true
  }

}

let checkHowManyThereAre = ($where, what) => {
  let numOfThem = $where.querySelectorAll(what).length
  console.log(`You have ${numOfThem} ${what} elements`)
  return numOfThem
}
checkHowManyThereAre(document.querySelector('#ben'), 'section.card')

window.addEventListener('load', theBennyList)
window.addEventListener('scroll', theBennyList)
window.addEventListener('resize', theBennyList)







// Part D
function commentSection() {
    let $addComment = document.querySelectorAll('.addComment')
    let $commentText = document.querySelectorAll('.comments')
    let $commentList = document.querySelectorAll('.commentList')
    let commentPost = $commentText[0].value.trim();
    

    if(commentPost){
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(commentPost));
      $commentList[0].appendChild(li);
    }


    
}

document.getElementById(`addComment`).addEventListener('click', commentSection);



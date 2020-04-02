let $doc = document.documentElement
let $link = document.querySelector('header a')
let addComment = $('addComment'); 
let commentText = $('comments');
let commentList = $('commentList');





$link.addEventListener('click', event => { console.log('clicked') })
$link.getAttribute('href')











// function $(element) {
// 	return document.getElementById(element);
// }

// commentSubmit.addEventListener('click', function(e) {
// 	e.preventDefault();
  
// 	let comment  = commentText.value.trim();
// 	let newComm = document.createElement('li');
  
//   if (commentText.value.length > 1) {
  
// 	newComm.innerHTML = comment;
// 	commentList.appendChild(newComm);

//   } else {
//     null
//   }
// }, false);





















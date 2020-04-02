let $doc = document.documentElement
let $link = document.querySelector('header a')


$link.addEventListener('click', event => { console.log('clicked') })
$link.getAttribute('href')



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























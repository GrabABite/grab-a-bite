# grabAbite

#Deliverables
#A) Landmarks, orientation and scroll-spy
#Design a way to represent a user's progress through a long article, such that they can easily view the article's outline and move a desired portion of the document into the viewport at any time. An example of a "scrollspy" (see the "Table of Contents" in a desktop browser): https://create.arduino.cc/projecthub/MoritzDornseifer/iot-cloud-enabled-alarm-clock-1e5119

#INSPO:
#https://www.evanshalshaw.com/more/bondcars/c1.html 
#https://www.codeandtheory.com/

#B) Carousel or tabbed component
Design a component that can guide a user though content that is split into multiple parts. The content may be controlled by the user, the component itself (a timer, perhaps), or other. The content may be of any type or medium (text content, images, videos, etc). An example of a slide deck style survey: http://thespeakerlab.typeform.com/to/mKgF8q

#INSPO:
#https://www.supremo.co.uk/ 

#FINAL: we combined A & B, so a two in one scrollspy and carousel. The scroll-spy at the top of the gallery page, to show the outline of the gallery and current page. The carousel has the flexibility to move anywhere using the scroll-spy.

--------------------------------------------------------------------------------------

#C) Infinitely load content
#When a user reaches the bottom of a document, maintain the fluidity of the experience and engagement by loading new content. Ensure the user is made aware of new content (either upcoming, or already loading) and ensure a seamless, low-impact, responsible experience.

#INSPO:
https://richpearson.design/
https://futurism.com/
https://dribbble.com/shots/2969291-Dribbble-Infinity-Scroll 
https://yalantis.com/blog/web-animation-technologies-and-tools/

#FINAL: we have a button on the last pic of the gallery that takes you to the history page, which is right after the end of the gallery. That's when the infinitely load content starts. 

--------------------------------------------------------------------------------------

#D) One component or tool of your choosing
#Use your own experiences to design and develop a component or tool that will improve the experience of a user reading or viewing a website. Consider looking for inspirations on sites like Dribbble (or others) that demonstrate UI animations or related experience upgrades.

#INSPO:
https://yalantis.com/

#FINAL: viewer can comment and share images on the gallery photos.

--------------------------------------------------------------------------------------

#OUR WEBSITE

#NAME: Grab A BIte

#ABOUT: Eggs Benedict

#CONTENT: Different types of egg Benedicts	

--------------------------------------------------------------------------------------

#COLOUR PALETTE: 

#FAF3E7 - WHITE

#F5CA60 - YELLOW

#232122 - BLACK

--------------------------------------------------------------------------------------

#PLANNING:

#first page: 
#grab a bite (brand name)
#click the bottom arrow 
#transiotion slide up to second page

#second page:
#egg benedict definition
#when it is scrolled down it flips the page to the gallery (transition)

#later pages:
#carousel component of three picture per page
#main focus on the middle one
#scroll spy at the top of the page 
#picture with an arrow down at the bottom of the page
#once arrow clicked, info shows up (name, ingredients, heart, comment and share)
#the picture zoom out

#MORE TO BE DONE FOR CSS
#1. FIXING THE BENNY_PICS. 

#FOR JAVASCRIPT
#1. Script for the 1st pg/section jumping to the next one. Tied to this /<i class="material-icons" id="drop">arrow_drop_down_circle</i>/

#2. The <div class="scrollspy"> Script for the scrollspy

#3. The carouseL

#4. Comment Section

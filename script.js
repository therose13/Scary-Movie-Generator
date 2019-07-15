var button = document.getElementById('scary');
var description =[
  "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
  "A shape-shifting, ancient clown starts to terrorize a group of young kids and starts showing up as their worst fears",
  "A family  goes to stay at a friends hotel in order for the dad (Jack) to overcome his writer's block. Jack comes out with a lot more than an idea ",
  "2 kids go to vist their grandparents, and while at first they just brush off their odd behavior, they later discover something sinister",
  "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
  "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
  "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
  "Dr. Louis Creed and his wife, Rachel, relocate from Boston to rural Maine with their two young children. The couple soon discover a mysterious burial ground hidden deep in the woods near their new home.",
  "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets.",
  "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
  "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer",
  "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
  "After tragedy strikes, a grieving father discovers an ancient burial ground behind his home with the power to raise the dead.",
  "After a family is forced to relocate for their son's health, they begin experiencing supernatural behavior in their new home, and uncover a sinister history.",
]
var scary =[
  "downloadedPictures/getout.png",
  "downloadedPictures/it1.jpg",
  "downloadedPictures/theshining.jpg",
  "downloadedPictures/thevisit.jpg",
  "downloadedPictures/us.jpg",
  "downloadedPictures/aquietplace.jpg",
  "downloadedPictures/sixthsense.jpg",
  "downloadedPictures/petsemetary2.jpg",
  "downloadedPictures/hereditary.jpg",
  "downloadedPictures/thenun.jpg",
  "downloadedPictures/silenceofthelambs.jpg",
  "downloadedPictures/scream.jpg",
  "downloadedPictures/petsemetary1.jpg",
  "downloadedPictures/haunting.jpg", ]

  button.addEventListener("click",function(){
    //alert("the button works")
    var number =randNum(scary);
    changepara(number);
    changeImg(number);
  })
  function randNum(array){
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random= Math.floor(randBig);
 return random
}
function changepara(someNum){
  var description = document.getElementById('description');
  description.innerHTML = description[someNum];

}
randNum(scary);

function changeImg(someNum){
  var scaryImg = document.getElementById('television');
  scaryImg.src = scary[someNum];

}

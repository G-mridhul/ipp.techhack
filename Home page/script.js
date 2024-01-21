const cardOne = document.getElementById("card_base_one");
const cardOneDetails = document.getElementById("card_details_one");
const cardtwo = document.getElementById("card_base_two");
const cardtwoDetails = document.getElementById("card_details_two");
const cardthree = document.getElementById("card_base_three");
const cardthreeDetails = document.getElementById("card_details_three");




const marginSection = document.getElementById("why-choose-us");


cardOneDetails.addEventListener("mouseover", e => {
    cardOneDetails.style.display = "block";   
    cardOne.style.borderBottomLeftRadius = "0"
    cardOne.style.borderBottomRightRadius = "0"
})

cardOneDetails.addEventListener("mouseleave", e => {
    cardOneDetails.style.display = "none";
    cardOne.style.borderBottomLeftRadius = "2rem"
    cardOne.style.borderBottomRightRadius = "2rem"
})



cardtwoDetails.addEventListener("mouseover", e => {
    cardtwoDetails.style.display = "block";   
    cardtwo.style.borderBottomLeftRadius = "0"
    cardtwo.style.borderBottomRightRadius = "0"
})

cardtwoDetails.addEventListener("mouseleave", e => {
    cardtwoDetails.style.display = "none";
    cardthree.style.borderBottomLeftRadius = "2rem"
    cardtwo.style.borderBottomRightRadius = "2rem"
})


cardthreeDetails.addEventListener("mouseover", e => {
    cardthreeDetails.style.display = "block";   
    cardthree.style.borderBottomLeftRadius = "0"
    cardthree.style.borderBottomRightRadius = "0"
})

cardthree.addEventListener("mouseleave", e => {
    cardthreeDetails.style.display = "none";
    cardthree.style.borderBottomLeftRadius = "2rem"
    cardthree.style.borderBottomRightRadius = "2rem"
})


cardOne.addEventListener("mouseover", e => {
    cardOneDetails.style.display = "block";
    marginSection.style.marginTop = "15rem";
    cardOne.style.borderBottomLeftRadius = "0"
    cardOne.style.borderBottomRightRadius = "0"
})


cardOne.addEventListener("mouseleave", e => {
    cardOneDetails.style.display = "none";
    marginSection.style.marginTop = "0";
    cardOne.style.borderBottomLeftRadius = "2rem"
    cardOne.style.borderBottomRightRadius = "2rem"
})



cardtwo.addEventListener("mouseover", e => {
    cardtwoDetails.style.display = "block";
    marginSection.style.marginTop = "15rem";
    cardtwo.style.borderBottomLeftRadius = "0"
    cardtwo.style.borderBottomRightRadius = "0"
})


cardtwo.addEventListener("mouseleave", e => {
    cardtwoDetails.style.display = "none";
    marginSection.style.marginTop = "0";
    cardtwo.style.borderBottomLeftRadius = "2rem"
    cardtwo.style.borderBottomRightRadius = "2rem"
})



cardthree.addEventListener("mouseover", e => {
    cardthreeDetails.style.display = "block";
    marginSection.style.marginTop = "15rem";
    cardthree.style.borderBottomLeftRadius = "0"
    cardthree.style.borderBottomRightRadius = "0"
})


cardthree.addEventListener("mouseleave", e => {
    cardthreeDetails.style.display = "none";
    marginSection.style.marginTop = "0";
    cardthree.style.borderBottomLeftRadius = "2rem"
    cardthree.style.borderBottomRightRadius = "2rem"
})
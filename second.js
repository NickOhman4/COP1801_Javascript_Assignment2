
function getName() {
    const Fname = document.getElementById("firstname").value; // gets the firstname element from the name text box
    alert("Hello" + " " + Fname + "," + " " + "welcome to the website")//sends an alert welcoming the person to the website
    const piValue = 3.1415926; // is a constant variable of pi
    const myFavNum = document.getElementById("favoritenumber").value; // gets the favorite numbres element from the number txt box 
    myArea = Math.pow(myFavNum, 2) * piValue; // calculates the area of a circle from the input of the number input
    sentence = "Hello" + " " + Fname + " " + ", you entered" + " " + myFavNum + " as your favorite number. If that was the radius of a circle, the circle's area would be " + myArea + "."
    document.getElementById('sentence').innerHTML = sentence
}






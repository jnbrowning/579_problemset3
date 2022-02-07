/*
* Excercise 1
*
*/

document.querySelector("#color-block").addEventListener("click", changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
  const colorBox = document.querySelector("#color-block");
  const colorName = document.querySelector("#color-name");
  console.log(colorBox.style.backgroundColor);
    //Write a condition determine what color it should be changed to
    if(colorName.textContent === '#C8F2EF'){
      console.log('salmon');
        //change the background color using JS
      colorBox.style.backgroundColor = '#F08080';
        //Change the text of the color using the span id color-name
      colorName.textContent = "#F08080";

    }

    else{
      console.log('thatcolor');
      //change the background color using JS
      colorBox.style.backgroundColor = '#C8F2EF';
        //Change the text of the color using the span id color-name
      colorName.textContent = "#C8F2EF";
    }
}

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const fTemp = document.querySelector('#f-input');
const tempButton = document.querySelector('#convertbtn');
const cTemp = document.querySelector('#c-output');

tempButton.addEventListener('click', convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    console.log(fTemp.value);
    var temperature = fTemp.value - 32;
    console.log(temperature);
    temperature = temperature * (5 / 9);
    cTemp.textContent = temperature;
    //Send the calculated temperature to HTML

}

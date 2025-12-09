console.log("Football Genius");

function pete () {
    console.log("WoooHoo!");
    document.body.innerHTML = '<img src="Footge.png" alt="Pete Carroll with lazer eyes">';
   
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

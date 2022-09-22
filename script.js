console.log("this is to check if JS is connected or not ");
showNotes();

// let addbtn = document.getElementById("addbtn");
// addbtn.addEventListener("click", function (e) {
//   let addTxt = document.getElementById("addTxt");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   notesObj.push(addTxt.value);
//   localStorage.setItem("notes",JSON.stringify(notesObj));
//   addTxt.value = "";
//   showNotes();
// });
// -------------------------------------my Way
function openThis() {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
}
// ---------------------------------------

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";

  notesObj.forEach(function (element, index) {
    html += `
        <div class="maincard">
          <div class="storeCard">
            <h4>Your Note ${index + 1}</h4>
            <p>${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn">Delete</button>
          </div>
        </div>
   
        `;
  });
  let elemNotes = document.getElementById("notes");
  if (notesObj.length != 0) {
    elemNotes.innerHTML = html;
  } else {
    elemNotes.innerHTML = "Nothing Here To Show Please add Notes Here!";
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  showNotes();
}

 searchText = document.getElementById("searchTxt"); 
searchText.addEventListener("input" ,function(){
    let inputVal = searchText.value;
    let maincard = document.getElementsByClassName("maincard");
    Array.from(maincard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";

        }
    });
    
});

function addContent(){
    var headerText = document.getElementById("headerInput").value;
    var paragraphText = document.getElementById("paragraphInput").value;

    if(headerText!="" && paragraphText!=""){
        var header =document. createElement("h1");
        header.textContent = headerText ;

        var line = document.createElement("hr");


        var paragraph= document.createElement("p");
        paragraph.textContent= paragraphText;

        var output = document.getElementById("outputArea");
        output.appendChild(header);
        output.appendChild(line);
        output.appendChild(paragraph);

    }
}

    function myfunc() {
    var text= document.getElementById("Text").value;
    document.getElementById("p").innerHTML += text;
}



function displayWork() {
var work = document.getElementById("work").value;

// Using text concatenation (+)
var output = "Work Experience: " + work;

// Display the selected work experience in the paragraph
document.getElementById("workOutput").innerHTML = output;}
const nameee = "Contact"
const phoneNumber = "+123-456-7890";

const address = "123 Anywhere St., Any City";

document.getElementsByTagName("h1")[0].textContent = nameee;
document.getElementsByTagName("p")[0].textContent = phoneNumber;

document.getElementsByTagName("p")[1].textContent = address;

const skill1 = "Project Management";
const skill2 = "Public Relations";
const skill3 = "Teamwork";
const skill4 = "Time Management";
const skill5 = "Leadership";
const skill6 = "Effective Communication";
const skill7 = "Critical Thinking";

const listItems = document.getElementsByTagName("li");

listItems[0].textContent = skill1;
listItems[1].textContent = skill2;
listItems[2].textContent = skill3;
listItems[3].textContent = skill4;
listItems[4].textContent = skill5;
listItems[5].textContent = skill6;
listItems[6].textContent = skill7;



const language1 = "English";
const language2 = "Turkish";
const language3 = "Russian";

const languageSection = document.getElementById("languages");

const languageItems = languageSection.getElementsByTagName("li");

languageItems[0].textContent = language1;
languageItems[1].textContent = language2;
languageItems[2].textContent = language3;

const profile = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const ProfileSection = document.getElementById("Profile");
ProfileSection.getElementsByTagName("p")[0].textContent = profile;

var emailplace

function checkEmail() {
    var email = document.getElementById("emailofc").value;
    var error = document.getElementById("error");

    error.textContent = "";

    if (email === "") {
      error.textContent = "Email is required!";
      return;
    }


    if (email.indexOf("@") === -1) {
      error.textContent = "Email must contain '@'";
      return;
    }

    alert("Email is OK!");
     
  }

  
  function addInput() {
      var newInput = document.createElement("input");
      newInput.type = "text";
      newInput.placeholder = "Enter something";
      newInput.className = "dynamicInput"; 
      document.getElementById("inputContainer").appendChild(newInput);
      document.getElementById("inputContainer").appendChild(document.createElement("br"));
    }



      function addInputt() {
      var newInput = document.createElement("input");
      newInput.type = "text";
      newInput.placeholder = "Enter something";
      newInput.className = "dynamicInput"; 
      document.getElementById("inputContainerr").appendChild(newInput);
      document.getElementById("inputContainerr").appendChild(document.createElement("br"));
    }


     function addInputtt() {
      var newInput = document.createElement("input");
      newInput.type = "text";
      newInput.placeholder = "Enter something";
      newInput.className = "dynamicInput"; 

      document.getElementById("inputContainerrr").appendChild(newInput);
      document.getElementById("inputContainerrr").appendChild(document.createElement("br"));
    }






   function save() {
      var inputs = document.getElementsByClassName("dynamicInput");
      var values = []; 

      for (var i = 0; i < inputs.length; i++) {
        values.push(inputs[i].value);
      }

      alert("Your information has been successfully saved!");

      console.log(values);
    }
  
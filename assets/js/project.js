AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Crigloo",
    cardImage: "assets/images/project-page/crigloo.png",
    description: "Crigloo",
    tagimg: "",
    Previewlink: "https://www.crigloo.com/",
    Githublink: "",
  },
  {
    title: "AdventureIndia",
    cardImage: "assets/images/project-page/adventure.png",
    description: "AdvetureIndia tours",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://www.adventureindiatours.com/",
    Githublink: "",
  },
  {
    title: "Corcoran",
    cardImage: "assets/images/project-page/corcoran.png",
    description: "Corcoran",
    tagimg: "",
    Previewlink: "https://www.adventureindiatours.com/",
    Githublink: "",
  },
  {
    title: "GlobalGate",
    cardImage: "assets/images/project-page/globalgate.png",
    description: "GlobalGate",
    tagimg: "",
    Previewlink: "https://globalgatecpa.com/",
    Githublink: "",
  },
  {
    title: "TonyBoxer",
    cardImage: "assets/images/project-page/tonyboxer.png",
    description: "TonyBoxer",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "The Rainman",
    cardImage: "assets/images/project-page/rainman.png",
    description: "The Rainman",
    tagimg: "",
    Previewlink: "http://www.therainman.in/",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
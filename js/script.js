/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Define number of students to display per page
let studentsPerPage = 9;

// This function will add the students and their information to the page
function showPage(list, page){
   // Those variables generate the index for the first and last student on the page
   let startIndex = (page  * studentsPerPage) - studentsPerPage;
   let endIndex = page * studentsPerPage;

   // Select "student-list" and empty it
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   // Fill list with information with a loop
   for (i = startIndex; i < endIndex; i++){
      if(list[i]){
     studentList.innerHTML += `
     <li class="student-item cf">
     <div class="student-details">
       <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
       <h3>${list[i].name.first} ${list[i].name.last}</h3>
       <span class="email">${list[i].email}</span>
     </div>
     <div class="joined-details">
       <span class="date">Joined ${list[i].registered.date}</span>
     </div>
   </li>`
   }
}

}

// This function will create and insert/append the elements needed for the pagination buttons
function addPagination(list){
  // create a variable to calculate the number of pages needed
  let numOfPages = Math.ceil(list.length / studentsPerPage);

  // select the element with a class of `link-list` and assign it to a variable
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = ``;
   
   // Generate Buttons
   for (i = 0; i < numOfPages; i++){
     linkList.innerHTML += `
          <li>
            <button type="button" class="paginationButton">${i + 1}</button>
          </li>`;
   }

   // Set first button active
   let firstButton = document.querySelector(".paginationButton");
   firstButton.className = "active";

   // If clicked go to chosen page
   linkList.addEventListener('click', (event) => {
      if (event.target.type === 'button') {
         document.querySelector('.active').classList.remove("active");
         event.target.className = "active";
         showPage(list, event.target.textContent)
      }
   });
   }

// This function performs the search for first or last name    
function performSearch(search){
   let result = [];
   for (var i = 0; i < data.length; i++) {
       if (data[i].name.first.toLowerCase().includes(search) || data[i].name.last.toLowerCase().includes(search))
       {
           result.push(data[i]);
       }
   }
   if (result.length > 0) {
   showPage(result, 1);
   addPagination(result);
   } else {
      let studentList = document.querySelector('.student-list');
      let linkList = document.querySelector('.link-list');
      studentList.innerHTML = "<div>No results</div>";
      linkList.innerHTML = "";
   }
}   

// This function adds the search bar to DOM
function addSearchBar(){
   let header = document.querySelector('header');
   let searchBox = document.createElement('div');
   searchBox.innerHTML = `
   <label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;
   header.appendChild(searchBox);

   let searchButton = document.querySelector('button');
   let searchField = document.querySelector('#search');

   // Add event listener to perform search
   searchField.addEventListener('keyup', (event) => {
      performSearch(searchField.value.toLowerCase());
   });
}   

// Call functions
showPage(data, 1);
addPagination(data);
addSearchBar();
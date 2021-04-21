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
   console.log(startIndex);
   console.log(endIndex);

   // Select "student-list" and empty it
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   // Fill list with information with a loop
   for (i = startIndex; i < endIndex; i++){
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


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1)
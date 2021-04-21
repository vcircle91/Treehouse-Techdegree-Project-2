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


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
  // create a variable to calculate the number of pages needed
  let numOfPages = Math.ceil(list.length / studentsPerPage);

  // select the element with a class of `link-list` and assign it to a variable
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = ``;
   
   for (i = 0; i < numOfPages; i++){
     linkList.innerHTML += `
          <li>
            <button type="button">${i + 1}</button>
          </li>`;
   }

   let firstButton = document.querySelector("button");
   firstButton.className = "active";
   console.log(firstButton);

   linkList.addEventListener('click', (event) => {
      if (event.target.type === 'button') {
         document.querySelector('.active').classList.remove("active");
         event.target.className = "active";
         showPage(data, event.target.textContent)
      }
   });


  // create an event listener on the `link-list` element
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments
   }

   



// Call functions
showPage(data, 1);
addPagination(data);
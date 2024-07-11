let modal = document.getElementById("modal");
let studentForm = document.getElementById("studentForm");
let studentsContainer = document.getElementById("studentsContainer");

let studentList = [
  //   {
  //       
  //       name: "Arda",
  //       lname: "Toraman",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //      
  //       name: "Aysu",
  //       lname: "Aşçı",
  //       gender: "Kadın",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //    
  //       name: "Berat",
  //       lname: "Dimen",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //   
  //       name: "Berk",
  //       lname: "Uçar",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //     
  //       name: "Doğa",
  //       lname: "Savaş",
  //       gender: "Kadın",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //   
  //       name: "Doğukan",
  //       lname: "Sarı",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //    
  //       name: "Ece",
  //       lname: "Ceylan",
  //       gender: "Kadın",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //   
  //       name: "Emre",
  //       lname: "Özçalkap",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //   
  //       name: "Fatih Can",
  //       lname: "Kaya",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //    
  //       name: "Furkan",
  //       lname: "Coşar",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //    
  //       name: "Gökhan",
  //       lname: "Ünlü",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //
  //       name: "Halil İbrahim",
  //       lname: "Korkmaz",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //
  //       name: "Kemal",
  //       lname: "Özalp",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //   
  //       name: "Kerem",
  //       lname: "Kaçmaz",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //    
  //       name: "Melek",
  //       lname: "Dal",
  //       gender: "Kadın",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //       name: "Muhammed Baki",
  //       lname: "Çağlayan",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //       name: "Muhammed",
  //       lname: "Yazıcı",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {

  //       name: "Muhammet Hasan",
  //       lname: "Türkmen",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
 
  //       name: "Ömer",
  //       lname: "Fırat",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //  
  //       name: "Sema",
  //       lname: "Bekdemir",
  //       gender: "Kadın",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //       name: "Sıla",
  //       lname: "Kara",
  //       gender: "Kadın",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //       name: "Sudenur",
  //       lname: "Taştekin",
  //       gender: "Kadın",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   },
  //   {
  //       name: "Tunahan",
  //       lname: "Orak",
  //       gender: "Erkek",
  //       section: "Frontend",
  //       role: "Öğrenci",
  //   }
];
let id = 0;

if (localStorage.studentList) {
  studentList = JSON.parse(localStorage.studentList);
  render();
}

if (localStorage.id) {
  id = Number(localStorage.id);
}
function generateId() {
  id++;
  localStorage.id = id;
  return id;
}

addStudentBtn.addEventListener("click", () => {
  modal.classList.remove("editModal");
  document.querySelector('input[name="id"]').value = "";
  modal.showModal();
});

function handleStudentForm(e) {
  e.preventDefault();

  let formData = new FormData(studentForm);
  let formObj = Object.fromEntries(formData);
  studentForm.reset();

  if (formObj.id !== "") {

    let student = studentList.find((x) => x.id === Number(formObj.id));

    student.name = formObj.name;
    student.lname = formObj.lname;
    student.gender = formObj.gender;
    student.section = formObj.section;
    student.role = formObj.rol;
  } else {

    formObj.id = generateId();
    studentList.push(formObj);
  }

  save();
  modal.close();
  render();
}

studentForm.addEventListener("submit", handleStudentForm);

function save() {
  localStorage.studentList = JSON.stringify(studentList);
}

function createStudentHtml(student) {

  return `<table class="student">
        <tr><td><a class="studentEditBtn" href="#"  data-studentsid="${student.id}">
                <svg xmlns="http://www.w3.org/2000/svg/200/200" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></a></td>
            <td><a class="studentDeleteBtn" href="#" data-studentsid="${student.id}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></a></td>
           <td>${student.name}</td> 
           <td> ${student.lname}</td> 
           <td> ${student.gender}</td>  
           <td> ${student.section}</td>  
           <td> ${student.role}</td>
           </tr><table>`;
}

function handleDeleteBtn(e) {
  e.preventDefault();

  if (!confirm("emin misin")) {
    return;
  }

  studentList = studentList.filter(
    (x) => x.id !== Number(this.dataset.studentsid)
  );

  save();
  render();
}

function handleEditBtn(e) {
  e.preventDefault();

  modal.classList.add("editModal");

  let studentId = Number(this.dataset.studentsid);

  let student = studentList.find((x) => x.id === studentId);

  document.querySelector('input[name="id"]').value = student.id;
  document.querySelector('input[name="name"]').value = student.name;
  document.querySelector('input[name="lname"]').value = student.lname;
  document.querySelector('input[name="gender"]').value = student.gender;
  document.querySelector('input[name="section"]').value = student.section;
  document.querySelector('input[name="role"]').value = student.role;
  modal.showModal();
}

function render() {

  studentsContainer.innerHTML = studentList.map((x) => createStudentHtml(x)).join("");

  document.querySelectorAll(".studentDeleteBtn").forEach((x) => x.addEventListener("click", handleDeleteBtn));
  document.querySelectorAll(".studentEditBtn").forEach((x) => x.addEventListener("click", handleEditBtn));
}

// let studentList=document.querySelector(".studentList");
// // console.log(students.length);
// studentList.innerHTML +=`
// <tr>
//  <th> İd </th>
//  <th> İsim </th>
//  <th> Soyisim </th>
//  <th> Cinsiyet </th>
//  <th> Bölüm </th>
//  <th> Rol </th>
// </tr>
//  `

// ogrenci lstele
// for (let i=0; i< students.length; i++){
//   let student=students[i];

//   studentList.innerHTML +=`

// <td>${student.id}</td> <td>${student.name}</td> <td> ${student.lastname}</td> <td> ${student.gender}</td>  <td> ${student.section}</td>  <td> ${student.role}</td>
//   `

// }

// // kadin-erkek gruplama
// let women =document.querySelector(".kadinlar");
// let men = document.querySelector(".erkekler");
// let counter=0;
// let counterMan=0;
// for (let i =0; i<students.length; i++ ) {
//   let woman=students[i];

//   if(students[i].gender === "Kadın"){
//     // console.log(woman);
//     women.innerHTML +=`
//   <td>${woman.name}</td> <td> ${woman.lastname}</td> <td> ${woman.gender}</td>  <td> ${woman.section}</td>  <td> ${woman.role}</td>
//   `
//   counter++;
//   console.log(counter);

//   }else{
//     let man=students[i];
//     men.innerHTML+=`
//  <td>${man.name}</td> <td>${man.lastname}</td> <td> ${man.gender}</td>  <td> ${man.section}</td>  <td> ${man.role}</td>`
//  counterMan++;
// }

// }

// women.innerHTML+=` Toplam Kadın Öğrenci Sayısı : ${counter}`
// men.innerHTML+=` Toplam Erkek Öğrenci Sayısı : ${counterMan}`
// console.log(students.length);

var studentform = document.getElementById("student-form")
var studenttable = document.querySelector("#student-table tbody")
var savebutton = document.getElementById("save-button")

var Name = document.getElementById("name")
var age = document.getElementById("age")
var course = document.getElementById("course")
var email = document.getElementById("email")

savebutton.addEventListener("click",function(event){
    event.preventDefault()
    
    var gender = document.querySelector('input[name="Gender"]:checked')

    var row = document.createElement("tr")
    row.setAttribute("class","tablerow")
    row.innerHTML=`<td>${Name.value}</td>
    <td>${age.value}</td>
    <td>${gender.value}</td>
    <td>${course.value}</td>
    <td>${email.value}</td>
    <td> <button class="delete-button">Delete</button> </td>`

    studenttable.appendChild(row)
    studentform.reset()

    row.querySelector(".delete-button").addEventListener("click",function(){
        row.remove()
    })
})
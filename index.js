const body = document.getElementById('body')
const header = document.createElement('div')
const myFirstHeading = document.createElement('hi')
myFirstHeading.innerText = "Hii All"
myFirstHeading.id = "heading-one"
header.appendChild(myFirstHeading)

 
const para = document.createElement('p')
para.id = "para"
para.innerHTML = "This is a paragraph,,, just believe it is!"+"This is a paragraph,,, just believe it is!"
header.appendChild(para)

body.appendChild(header)

function createMoreFields(value){
    const form = document.createElement('form')
    const formHead = document.createElement('h1')
    const label = document.createElement('label')
    var arr = ['Name', 'Email', 'Address', 'Contact']
    label.innerHTML = `${arr[value]}`
    const formInput = document.createElement('input')
    formInput.setAttribute('placeholder', 'Enter your name')
    formInput.id = 'input'
    
    
    // Appending form childs
    form.appendChild(formHead)
    form.appendChild(label)
    form.appendChild(formInput)
    // form.appendChild(button)
    body.appendChild(form)
}

// creating more fields
for(var i = 0; i<=3; i++){
   createMoreFields(i)
    console.log(i)
} 

const button = document.createElement('button')
button.innerHTML = 'SUBMIT'
button.id = 'btn'
body.appendChild(button) 

// Function to be called on clicking on the submit button...


document.getElementById('btn').addEventListener("click", function viewcard(){

//    console.log(e.target)
const inputValue = document.getElementById('input').value
   const content = document.createElement('h1')
//    console.log(formInput)
   content.innerHTML = ` hiii ${inputValue} !. Nice to meet you `
   const age = document.createElement('input')
   age.setAttribute("Placeholder", "What is your age?")
   age.id = "ageInput"
// 
   const ageBtn = document.createElement('button')
   ageBtn.innerHTML = "OK"
   ageBtn.id = "ageBtn"
  
   ageBtn.addEventListener("click", (e)=>{
    console.log(e.target)
    var ageInputValue = document.getElementById('ageInput').value
    console.log(ageInputValue)
    const ageLine = document.createElement('h2')
    ageLine.innerHTML = `Ohh great!! So you are ${ageInputValue} years young!`
    body.appendChild(ageLine)

    const natLine = document.createElement('h1')
    natLine.innerHTML = "Would you tell your nationality?"
    const nationality = document.createElement('input')
    nationality.innerHTML = "Enter here.."
    const natBtn = document.createElement('button')
    natBtn.innerHTML = "Done!"

    body.appendChild(natLine)
    body.appendChild(nationality)
    body.appendChild(natBtn)


 })
   body.appendChild(content)
   body.appendChild(age)
   body.appendChild(ageBtn)

  

})













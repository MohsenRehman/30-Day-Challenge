let inputField = document.querySelector(".age-input-dob");
let calculateBTnn = document.querySelector(".Calculate-btn");
let result = document.querySelector(".age-result");

calculateBTnn.addEventListener("click" , ()=>{
    if(inputField.value === ""){
        alert("Please Enter the Valid Date-Of-Birth")
    } else{
        // console.log("Input:" , inputField.value);
        
        //First we get the new date
        let dob = new Date(inputField.value);
        // console.log("Dob:", dob);

        //Now we get the full year which is in input field
        let dob_year = dob.getFullYear();
        // console.log(dob_year);
        
        //Current
        let now = new Date();
        // console.log("current:" , now);

        let now_year = now.getFullYear();
        // console.log("Current-Year:" , now_year);

        //Subtract the input field year from the current year

        let age = now_year - dob_year;
        // console.log("Age:" , age);

        //Now we store the data in the result card
        result.innerHTML = `Your Age is ${age}`;    
    }
})
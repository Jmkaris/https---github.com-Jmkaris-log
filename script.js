
const button = document.getElementById("btn");
const firstWrapper = document.querySelector(".wrapper-1");
const secondWrapper = document.querySelector(".wrapper-2");

button.addEventListener("click", () => {


    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('error');
    
    // Improved email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
        errorElement.style.color = 'red';
    } else {
        errorElement.textContent = '';
        alert('Thank you for subscribing!');
        
        // Redirect to next page after 1 second
        setTimeout(() => {
            window.location.href = 'indes.html'; // Change to your target page
        }, 2000);
        
        // Optional: Submit form data to server
        // this.submit(); // Uncomment if you need server-side processing
    
    
    // if(validteEmail == true){
    //     window.location.href = "indes.html";
    // }
}

})




























// function emailCheck(){
//     const mail = document.getElementById("input").value;
//     const errorMessage = getElementById("error");
// }

// if (!mail.includes("@")){
//     errorMessage.textContent = "Enter a valid email address";
//     errorMessage.style.color = 'red';
//     return false;
// }
// else{
//     errorMessage.textContent = "";
//     return true;
// }


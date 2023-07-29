document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var rate = document.getElementById('rate').value;
    var scale = document.getElementById('methord').value;
    var comment = document.getElementById('comment').value;
  
    // Validate form elements
    if (name === '' || email === '' || comment === '' || rate === ''|| scale === '') {
      addErrorMessage('Please fill in all fields!!!!');
      return;
    }
  
    // Send email
    var Subject = 'Comments form -' + name;
    var body = 'Name : ' + name + '\nEmail : ' + email + '\nComment : ' + comment +
     + '\nHow did you want to complete this task today? :' + scale + '\nOn a scale of 1 to 10, how satisfied were you with your overall experience using our travel website? :' + rate;
    var mailtoLink = 'mailto:janith.20223221@iit.ac.lk?subject='  + encodeURIComponent(Subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
  
    // Show success message
    showSuccessMessage();
  });

  function addErrorMessage(message) {
    var errorMessage = document.createElement('div');
    errorMessage.className = 'error';
    errorMessage.textContent = message;
    errorMessage.style.backgroundColor = "red";
    errorMessage.style.fontSize = "16px";
    errorMessage.style.color = "white";
    errorMessage.style.padding = "10px 20px";
    errorMessage.style.border = "boder-box";
    errorMessage.style.borderRadius = "4px";
    document.getElementById('feedbackForm').appendChild(errorMessage);
  }
  
  function showSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block' ;
    successMessage.textContent = 'THANK YOU!!! Thanking you for taking time to give us your feedback on your experience today';
  }
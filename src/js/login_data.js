const bloggers = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Johnson",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Smith",
      avatar: "https://www.w3schools.com/w3images/avatar2.png"
    },
    {
      id: 3,
      firstName: "Monica",
      lastName: "Brown",
      avatar: "https://www.w3schools.com/w3images/avatar6.png"
    }
  ];
  

    const button = document.querySelector('.login-container form .btn');

    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        let input_username = document.querySelector(".username").value;
        let input_password = document.querySelector(".password").value;
        let isValidUser = false;

        for (let blogger of bloggers){
            if (input_username === `${blogger.firstName} ${blogger.lastName}` && parseInt(input_password) === blogger.id) {
                isValidUser  = true;
                window.location.assign("http://127.0.0.1:5500/home.html");
                break; 
            }
        }
        if (!isValidUser) {
            alert("Invalid username or password");
        }
    });

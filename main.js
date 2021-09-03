function login()
{
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    if ((uname=="satish") && (pass=="123456"))
    {
        location.assign("home.html");
    }
    else{

    alert("Login failed");
    
    }
    
}
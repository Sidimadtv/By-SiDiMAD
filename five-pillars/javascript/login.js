var users = ["Youssef", "Abdo", "Abdelrahman", "Ali", "Fathi"];
var userspasswords = ["youssef", "abdo123", "abcd1234", "ali", "fathi"];
var admin = ["Admin"];
var adminpassword = ["admin"];
var flag = false;

function validateForm() 
{
    if (document.form.user.value == "" && document.form.pass.value == "") 
    {
        alert("الرجاء ملء حقل اسم المستخدم و كلمة المرور");
        document.form.user.focus();
    }

    else if (document.form.user.value == "") 
    {
        alert(" الرجاء ملء حقل اسم المستخدم ");
        document.form.user.focus();
    }

    else if (document.form.pass.value == "") 
    {
        alert("الرجاء ملء حقل كلمة المرور");
        document.form.pass.focus();
    }

     else 

    {
        for (var i = 0; i < users.length; i++) 
        {
            if (document.form.user.value == users[i] && document.form.pass.value == userspasswords[i]) 
            {
                alert(" :) مرحبا"+" "+ users[i]);
                window.location.href = ("Home.html");
                flag = true;
            }
        }

        for (var i = 0; i < admin.length; i++) 
        {
            if (document.form.user.value == admin[i] && document.form.pass.value == adminpassword[i]) 
            {
                alert("Hello : "+ " " +admin[i]);
                window.location.href = ("admin.html");
                flag = true;
            }
        }
        if (flag == false) 
        {
            alert("خطأ في التسجيل حاول مرة اخري");
            document.form.user.focus();
        }
    }
}

localStorage.setItem("myusers",users);
localStorage.setItem("myuserspasswords",userspasswords);
localStorage.setItem("myadmins",admin);
localStorage.setItem("myadminspasswords",adminpassword);

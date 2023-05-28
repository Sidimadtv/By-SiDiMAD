function validateForm() 
        {
            if(document.form.user.value=="" && document.form.pass.value=="" && document.form.emailbox.value=="")
            {
                alert("الرجاء ملء حقل اسم المستخدم و الحساب الالكتروني و كلمة المرور  ")
                document.form.user.focus();
            }
            else if(document.form.pass.value=="" && document.form.emailbox.value=="")
            {
                alert(" الرجاء ملء حقل الحساب الالكتروني و كلمة المرور");
                document.form.emailbox.focus();
            }
            else if(document.form.user.value=="" && document.form.pass.value=="" )
            {
                alert("الرجاء ملء حقل اسم المستخدم و كلمة المرور");
                document.form.user.focus();
            }
            else if(document.form.user.value=="" && document.form.emailbox.value=="")
            {
                alert("الرجاء ملء حقل اسم المستخدم و الحساب الالكتروني");
                document.form.user.focus();
            }
            else if (document.form.user.value == "") 
            {
                alert("الرجاء ملء حقل اسم المستخدم");
                document.form.user.focus();
            }
            else if (document.form.pass.value == "") 
            {
                alert("الرجاء ملء حقل كلمة المرور");
                document.form.pass.focus();
            }
            else if (document.form.emailbox.value == "") 
            {
                alert("الرجاء ملء حقل الحساب الالكتروني (الايميل) ");
                document.form.emailbox.focus();
            }
            else if (document.form.emailbox.value.indexOf("@")==-1||document.form.emailbox.value.indexOf(".")==-1) 
            {
                alert("الرجاء ملء حساب الالكتروني (ايميل) صحيح");
            }
            else 
            {
                window.location.href = "Home.html";
            }
            return valid;
        }
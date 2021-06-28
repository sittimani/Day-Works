function art_course() {
    // checking whether course(h6 tag) exits or not. If exist then remove both select tag as well as h6 tag(Which displays course)
    if (document.getElementById("course_name")) {
        document.getElementById("form-container").removeChild(document.getElementsByTagName("select")[0]);
        document.getElementById("form-container").removeChild(document.getElementById("course_name"));
    }

    var child = document.createElement("select");
    child.setAttribute("id", "course");

    var option = document.createElement("option");
    option.setAttribute("id", "bsc");
    option.appendChild(document.createTextNode("BSC"));
    child.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("id", "ba");
    option.appendChild(document.createTextNode("BA"));
    child.append(option);


    var h6 = document.createElement("h6");
    h6.setAttribute("id", "course_name");
    h6.appendChild(document.createTextNode("Course:"));

    document.getElementById("form-container").insertBefore(h6, document.getElementById("email_text"));
    document.getElementById("form-container").insertBefore(child, document.getElementById("email_text"));

}


function engineering_course() {
    if (document.getElementById("course_name")) {
        document.getElementById("form-container").removeChild(document.getElementsByTagName("select")[0]);
        document.getElementById("form-container").removeChild(document.getElementById("course_name"));
    }

    var child = document.createElement("select");
    child.setAttribute("id", "course");

    var option = document.createElement("option");
    option.setAttribute("id", "be");
    option.appendChild(document.createTextNode("BE"));
    child.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("id", "btech");
    option.appendChild(document.createTextNode("B.Tech"));
    child.append(option);


    var h6 = document.createElement("h6");
    h6.setAttribute("id", "course_name");
    h6.appendChild(document.createTextNode("Course:"));

    document.getElementById("form-container").insertBefore(h6, document.getElementById("email_text"));
    document.getElementById("form-container").insertBefore(child, document.getElementById("email_text"));

}


function validate_Form() {

    //name validation
    var name = document.test.name;
    var name_value = name.value;
    if (!isNaN(name_value) || name_value.length <= 2) {
        document.getElementById('name_error').innerHTML = "Please Enter a Valid Name";
        name.focus();
        return false;
    } else {
        document.getElementById('name_error').innerHTML = "";
    }


    //gender validation
    var gender = document.getElementsByName('gender');
    var gender_value = "";
    gender.forEach(function(element) {
        if (element.checked) {
            gender_value = element.value;
        }
    })
    if (gender_value == "") {
        document.getElementById("gender_error").innerHTML = "Please Select Your Gender";
        return false;
    } else {
        document.getElementById("gender_error").innerHTML = "";
    }


    //education validation
    var education = document.getElementsByName('education');
    var education_value = "";
    education.forEach(function(element) {
        if (element.checked) {
            education_value = element.value;
        }
    })
    if (education_value == "") {
        document.getElementById("education_error").innerHTML = "Please Select Your Education";
        return false;
    } else {
        document.getElementById("education_error").innerHTML = "";
    }


    //course validation
    var course = document.getElementById("course");
    var course_value = course.value;


    //email validation
    var email = document.getElementById("email");
    var email_value = email.value;
    if (email_value.length <= 5) {
        document.getElementById("email_error").innerHTML = "Please Enter a valid Email Address";
        email.focus();
        return false;
    } else {
        document.getElementById("email_error").innerHTML = "";
    }


    //phone validation
    var phone = document.getElementById('phoneNumber');
    var phone_value = phone.value;
    if (phone_value.length != 10 || isNaN(phone_value)) {
        document.getElementById("phone_error").innerHTML = "Please Enter a Valid Phone Number";
        phone.focus();
        return false;
    } else {
        document.getElementById("phone_error").innerHTML = "";
    }


    //hobbie validation
    var hobbie = document.querySelectorAll('input[type="checkbox"]:checked');
    var hobbie_value = "";
    if (hobbie.length == 0) {
        document.getElementById("hobbie_error").innerHTML = "Please Select Atleast one hobbie";
        return false;
    } else {
        hobbie.forEach(function(element) {
            hobbie_value += element.value;
            hobbie_value += ",";
        })
        document.getElementById("hobbie_error").innerHTML = "";
    }


    //password validation
    var password = document.getElementById("password");
    var password_value = password.value;
    if (password_value.length < 8) {
        document.getElementById("password_error").textContent = "Password should be atlease 8 letters";
        password.focus();
        return false;
    } else {
        document.getElementById("password_error").textContent = "";
    }


    localStorage.setItem("NAME", name_value);
    localStorage.setItem("GENDER", gender_value);
    localStorage.setItem("EDUCATION", education_value);
    localStorage.setItem("COURSE", course_value);
    localStorage.setItem("EMAIL", email_value);
    localStorage.setItem("PHONE", phone_value);
    localStorage.setItem("HOBBIES", hobbie_value);
    localStorage.setItem("PASSWORD", password_value);

    return true;
}
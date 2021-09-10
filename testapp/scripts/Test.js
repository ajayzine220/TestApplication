function validatePhoneNumber() {
    var pnum = document.getElementById("pnumber").value;

    var regex = /^\+?([(][0-9]{3})\)?[)][-]?([0-9]{3})[-]?([0-9]{4})$/;
    if (regex.test(pnum) == false) {
        alert("Enter valid Phone Number eg: (123)-123-1234");
        pnum.focus();
        return false;
    }
    else {
        redirect();
    }
}

function redirect() {
    window.location.href = "./Successfull.html";
}

function RestrictSpaceSpecial(e) {
    debugger
    var keycodearray = [41, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 190, 188, 8, 46, 37, 38, 40, 9, 96]
    var keyarray = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '+','.'];
    //console.log(e.keyCode);
    var checkkey = keycodearray.indexOf(e.keyCode);
    var checkkecode = keyarray.indexOf(e.key);
    if (checkkey < 0 || checkkecode >= 0) {
        e.preventDefault();
    }
}




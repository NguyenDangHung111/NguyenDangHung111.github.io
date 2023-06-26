const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra tài khoản
    if (username === "abc@gmail.com" && password === "password") {
        window.location.href = "../danh-muc/trang-chu.html";
        return false;
    } else if (username === "" || password === "") {
        alert("Nhập Thông Tin !");
        return false;
    } else {
        alert("Tài khoản hoặc mật khẩu không đúng.");
        return false;
    }
}

function validateEmail(event) {
    var email = document.getElementById("username").value;

    // Kiểm tra định dạng email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Email không hợp lệ. Vui lòng nhập đúng định dạng email.");
        event.preventDefault();
        return false;
    }
    return true;
}


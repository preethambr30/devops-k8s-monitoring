function checkStatus() {
    const status = document.getElementById("app-status");

    setTimeout(() => {
        status.innerText = "Running";
        status.style.color = "green";
    }, 1000);
}

checkStatus();

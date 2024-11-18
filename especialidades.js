function toggleDoctors(specialty) {
    var doctorList = document.getElementById(specialty);
    var arrow = document.getElementById('arrow-' + specialty);

    if (doctorList.style.display === "none" || doctorList.style.display === "") {
        doctorList.style.display = "block";
        arrow.textContent = "↑"; 
    } else {
        doctorList.style.display = "none";
        arrow.textContent = "↓"; 
    }
}
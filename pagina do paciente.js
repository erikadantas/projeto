function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = "login.html";
}
function loadPatientName() {
    const patientName = localStorage.getItem('patientName'); 

    if (patientName) {
        document.getElementById('greeting').textContent = `Bem-vindo, ${patientName}`;
    } else {
        document.getElementById('greeting').textContent = 'Bem-vindo'; 
    }
}
window.onload = loadPatientName;

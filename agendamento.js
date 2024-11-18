 const tipoSelect = document.getElementById('tipo');
const specialtiesDiv = document.querySelector('.specialties');
const proceduresDiv = document.querySelector('.procedures');
const loginContainer = document.querySelector('.login-container');
const agendamentoForm = document.getElementById('agendamentoForm');
const dataSelect = document.getElementById('data');

const horaSelect = document.getElementById('hora');
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.getElementById('successMsg');
const horariosDisponiveis = {
    
        "2024-11-19": ["08:00", "09:30", "12:00", "14:45"],
        "2024-11-21": ["08:15", "09:45", "13:30", "16:00"],
        "2024-11-22": ["08:30", "10:00", "13:00", "16:45"],
        "2024-11-25": ["08:45", "10:30", "12:30", "15:00"],
        "2024-11-26": ["08:00", "10:15", "12:45", "16:30"],
        "2024-11-27": ["08:30", "11:00", "13:45", "16:30"],
        "2024-11-28": ["08:00", "09:45", "12:00", "15:15"],
        "2024-11-29": ["08:30", "10:15", "12:30", "16:00"],
        "2024-12-02": ["08:15", "09:30", "12:15", "15:00"],
        "2024-12-03": ["08:45", "10:00", "12:45", "15:30"],
        "2024-12-04": ["08:30", "09:30", "13:00", "16:30"],
        "2024-12-05": ["08:00", "10:30", "13:30", "15:45"],
        "2024-12-06": ["08:15", "09:45", "12:15", "16:00"],
        "2024-12-09": ["08:00", "09:30", "12:00", "15:30"],
        "2024-12-10": ["08:30", "10:00", "13:00", "16:45"],
        "2024-12-11": ["08:00", "09:45", "12:30", "14:30"],
        "2024-12-13": ["08:30", "10:15", "13:00", "16:00"],
        "2024-12-16": ["08:15", "09:30", "12:45", "15:15"],
        "2024-12-18": ["08:00", "09:30", "12:00", "14:45"],
        "2024-12-19": ["08:30", "10:00", "12:30", "15:45"],
        "2024-12-20": ["08:15", "10:15", "13:00", "16:30"],
        "2024-12-23": ["08:30", "09:45", "12:30", "15:00"],
        "2024-12-26": ["08:00", "10:30", "13:00", "16:00"],
        "2024-12-27": ["08:15", "09:30", "12:00", "14:30"],

    
};
function carregarDatas() {
    const datas = Object.keys(horariosDisponiveis);
    datas.forEach(data => {
        
        const partesData = data.split('-'); 
        const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`; 
        const option = document.createElement('option');
        option.value = data; 
        option.textContent = dataFormatada; 
        dataSelect.appendChild(option);
    });
}

dataSelect.addEventListener('change', function () {
    const dataSelecionada = dataSelect.value;
    horaSelect.innerHTML = '<option value="">Selecione a Hora</option>'; 

    if (horariosDisponiveis[dataSelecionada]) {
        horariosDisponiveis[dataSelecionada].forEach(hora => {
            const option = document.createElement('option');
            option.value = hora;
            option.textContent = hora;
            horaSelect.appendChild(option);
        });
    }
});

tipoSelect.addEventListener('change', function () {
    const tipo = tipoSelect.value;
    if (tipo === 'consulta') {
        specialtiesDiv.style.display = 'block';
        proceduresDiv.style.display = 'none';
    } else if (tipo === 'exame') {
        specialtiesDiv.style.display = 'none';
        proceduresDiv.style.display = 'block';
    } else {
        specialtiesDiv.style.display = 'none';
        proceduresDiv.style.display = 'none';
    }
});

function showSignup() {
    document.getElementById('signup').style.display = 'block';
    document.querySelector('.login-container').style.display = 'none';
}

function showLogin() {
    document.getElementById('signup').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
}

function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === "user@exemplo.com" && senha === "senha123") {
        successMsg.textContent = 'Login realizado com sucesso!';
        errorMsg.textContent = '';

        
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "agendamento.html";  
    } else {
        errorMsg.textContent = 'E-mail ou senha incorretos!';
    }
}

function signup() {
    const novoEmail = document.getElementById('novo_email').value;
    const novaSenha = document.getElementById('nova_senha').value;
    successMsg.textContent = 'Cadastro realizado com sucesso! Agora você pode fazer login.';
    errorMsg.textContent = '';
    showLogin();
}

const agendarButton = document.querySelector('button[type="submit"]');

agendarButton.addEventListener('click', function (event) {
    event.preventDefault(); 

   
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (!isLoggedIn) {
        
        window.location.href = "file:///C:/Users/erick/OneDrive/%C3%81rea%20de%20Trabalho/projetoweb/login.cadastro.html";  
        return;
    }

    const tipo = tipoSelect.value;
    const data = dataSelect.value;
    const hora = horaSelect.value;
    const especialidade = document.getElementById('especialidade') ? document.getElementById('especialidade').value : '';
    const procedimento = document.getElementById('procedimento') ? document.getElementById('procedimento').value : '';

    if (!data || !hora || (tipo === 'consulta' && !especialidade) || (tipo === 'exame' && !procedimento)) {
        errorMsg.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        successMsg.textContent = '';
        return;
    }

    successMsg.textContent = `Agendamento realizado com sucesso! Você agendou um(a) ${tipo === 'consulta' ? 'consulta' : 'exame'} para ${data} às ${hora}.`;
    errorMsg.textContent = '';
    agendamentoForm.reset();
});

window.onload = function () {
    carregarDatas();
};
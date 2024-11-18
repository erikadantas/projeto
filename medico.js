document.getElementById('send-exam').addEventListener('click', function () {
    const patientSelect = document.getElementById('patient-select');
    const observations = document.getElementById('observations').value;
    const exameFile = document.getElementById('exame-file').files[0];

    if (patientSelect.value && observations && exameFile) {
        const patientName = patientSelect.options[patientSelect.selectedIndex].text.split(' - ')[1];
        const examId = patientSelect.value;
        const examDate = new Date().toLocaleDateString('pt-BR');
        const examLink = URL.createObjectURL(exameFile);

        const table = document.getElementById('sent-exams-list');
        const row = table.insertRow();

        row.innerHTML = `
            <td>${examId}</td>
            <td>${patientName}</td>
            <td>${examDate}</td>
            <td>${observations}</td>
            <td><a href="${examLink}" target="_blank">${exameFile.name}</a></td>
            <td><button type="button" class="remove-exam">Excluir</button></td>`;

        row.querySelector('.remove-exam').addEventListener('click', function () {
            table.deleteRow(row.rowIndex - 1);
        });

        document.getElementById('patient-select').value = '';
        document.getElementById('observations').value = '';
        document.getElementById('exame-file').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

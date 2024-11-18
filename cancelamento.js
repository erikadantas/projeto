const disponibilidadeMedico = [
    { date: '2024-11-21', time: '14:00' },
    { date: '2024-11-22', time: '09:00' },
    { date: '2024-11-26', time: '10:30' },
    { date: '2024-11-29', time: '13:00' },
    { date: '2024-12-05', time: '16:00' }
];
function formatarData(data) {
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = new Date(data);
    return new Intl.DateTimeFormat('pt-BR', opcoes).format(dataFormatada);
}
document.getElementById('decisao-cancelamento').addEventListener('change', function () {
    const rescheduleOptions = document.getElementById('reschedule-options');
    const novaDataSelect = document.getElementById('nova-data');

    if (this.value === 'reagendar') {
        rescheduleOptions.style.display = 'block';
        novaDataSelect.innerHTML = '';
        disponibilidadeMedico.forEach(function (data) {
            const option = document.createElement('option');
            const dataFormatada = formatarData(data.date);
            option.value = data.date;
            option.textContent = `${dataFormatada} - ${data.time} horas`;
            novaDataSelect.appendChild(option);
        });
    } else {
        rescheduleOptions.style.display = 'none';
    }
});

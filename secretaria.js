document.querySelectorAll('.cancel-table button').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        const idPaciente = row.cells[0].textContent;
        const tipoCancelamento = row.cells[1].textContent;
        const dataCancelamento = row.cells[2].textContent;
        const motivoCancelamento = row.cells[3].textContent;

        alert(`Cancelamento confirmado para o paciente ${idPaciente} (${tipoCancelamento} em ${dataCancelamento}). Motivo: ${motivoCancelamento}`);
        
    });
});

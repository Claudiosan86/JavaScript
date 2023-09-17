function validar()
{
    if (document.cadastro.nome.value == '') {
        window.alert('Você deve preencher o campo nome.');
        document.cadastro.nome.focus();
        return false;

    }
    if (document.cadastro.observacoes.value == '') {
        window.alert('Você deve colocar alguma observação...');
        document.cadastro.nome.focus();
        return false;
    }
}
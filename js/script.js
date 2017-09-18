$(document).ready(function() {

    // Initialize fullpage js
    $('#fullpage').fullpage({
        anchors: ['filmes', 'distribuidores', 'clientes'],
        menu: '#menuFullPage'
    });

    // Initialize select2 multiselect
    $(".multiple-select").select2({
        maximumSelectionLength: -1
    });

});







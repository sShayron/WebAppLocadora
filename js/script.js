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

    // Initialize select2 multiselect
    $(".selecter").select2({
        minimumResultsForSearch: 2
    });

});







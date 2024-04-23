jQuery(document).ready(function(){
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        
        //ir buscar o valor do id da quantidade de bilhetes em questão 
        idTag=$(this).attr("id") + "Input";
         console.log("iddddddd " +idTag);
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('#'+idTag+'[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('#'+idTag+'[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('#'+idTag+'[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        idTag=$(this).attr("id")  + "Input";
        // console.log(idTag);
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('#'+idTag+'[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('#'+idTag+'[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('#'+idTag+'[name='+fieldName+']').val(0);
        }
    });
});


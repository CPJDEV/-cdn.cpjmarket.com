function confirmClearCart()
{
  /*  var $value = false;

    bootbox.confirm("Your cart will be decarded, are you sure?", function(result) {
        $value = result;
        if($value){
            document.CartUpdates.submit();
            //form.submit();
        }
    });

    return $value;*/
}


function confirmCard(url)
{

    var $value = false;

    bootbox.confirm("Does the currently selected currency matches the Credit Card you intend to use?", function(result) {
        $value = result;
        if($value){window.location=url;}
    });

    return $value;


}


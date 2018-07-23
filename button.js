( function( $ ) {
    // JQuery is not required. You can you vanilla (regular) JS as well
    'use strict';
    
})( jQuery );

var clicks = 0;
function onclickcounter(){
    clicks += 1;
    document.getElementById("displayclicks").innerHTML = clicks;
}
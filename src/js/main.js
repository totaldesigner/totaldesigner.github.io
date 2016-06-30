/**
 * Created by mspark on 16. 6. 26.
 */
/*jshint browser:true */
/*globals any:false */

if (typeof any === 'undefined') {
    throw new Error('any.ui\'s JavaScript requires any');
}

(function () {
    var page, layer;
    layer = daddy.create();
    layer.addEventListener('MenuItemSelected', function(e) {
        console.log('TEST');
    });
    page = new any.controls.Page();
    page.append(layer);
    page.draw();
})();

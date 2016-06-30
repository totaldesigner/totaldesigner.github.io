var daddy = {};
(function () {
    var Layer = any.controls.Layer;
    var events = any.events.MenuItemSelected;

    function Daddy() {
        var self = this, header, content, footer;
        header = new daddy.Header();
        content = new daddy.Content();
        footer = new daddy.Footer();
        self.append(header);
        self.append(content);
        self.append(footer);
        self.header = header;
        self.content = content;
        self.footer = footer;
    }

    Daddy.prototype = new Layer();
    daddy.create = function() {
        var d = new Daddy();
        d.header.addEventListener('MenuItemSelected', function(e) {
            d.dispatchEvent('MenuItemSelected', e);
        });
        return d;
    };
})();
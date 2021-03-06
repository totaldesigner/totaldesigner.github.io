var daddy = {};
(function () {
    var Layer = any.controls.Layer;
    var MenuItemSelected = any.events.MenuItemSelected;

    function Daddy() {
        var self = this, header, content, footer;
        content = new daddy.Content();
        footer = new daddy.Footer();
        header = new daddy.Header();
        self.append(content);
        self.append(footer);
        self.append(header);
        self.content = content;
        self.footer = footer;
        self.header = header;
    }

    Daddy.prototype = new Layer();
    daddy.create = function() {
        var d = new Daddy();
        d.header.addEventListener('MenuItemSelected', function(e) {
            var index = e.args.index;
            d.content.change(['WORK', 'LIFE'][index]);
        });
        return d;
    };
})();
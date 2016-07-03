var daddy = {};
(function () {
    var Layer = any.controls.Layer;
    var MenuItemSelected = any.events.MenuItemSelected;

    function Daddy() {
        var self = this, header, content, footer, banner;
        header = new daddy.Header();
        content = new daddy.Content();
        footer = new daddy.Footer();
        banner = new daddy.Banner();
        self.append(header);
        self.append(content);
        self.append(footer);
        self.append(banner);
        self.header = header;
        self.content = content;
        self.footer = footer;
        self.banner = banner;
    }

    Daddy.prototype = new Layer();
    daddy.create = function() {
        var self = this, d = new Daddy();
        d.header.addEventListener('MenuItemSelected', function(e) {
            d.dispatchEvent(new MenuItemSelected(self, e));
        });
        return d;
    };
})();
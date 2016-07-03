var daddy = {};
(function () {
    var Layer = any.controls.Layer;
    var MenuItemSelected = any.events.MenuItemSelected;

    function Daddy() {
        var self = this, header, content, footer, banner;
        banner = new daddy.Banner();
        content = new daddy.Content();
        footer = new daddy.Footer();
        header = new daddy.Header();
        self.append(banner);
        self.append(content);
        self.append(footer);
        self.append(header);
        self.banner = banner;
        self.content = content;
        self.footer = footer;
        self.header = header;
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
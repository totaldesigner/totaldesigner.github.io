var daddy = {};
(function () {
    var Layer = any.controls.Layer;

    function Daddy() {
        var self = this, header, footer;
        header = new daddy.Header();
        footer = new daddy.Footer();
        self.append(header);
        self.append(footer);
        self.header = header;
        self.footer = footer;
    }

    Daddy.prototype = new Layer();
    daddy.create = function() {
      return new Daddy();
    };
})();
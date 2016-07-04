(function () {
    var Box = any.controls.Box;
    var Item = any.controls.Item;

    function Footer() {
        var self = this, inner;
        inner = new Box(new Item('<div class="copyright"><p></p></div>'));
        inner.addClass('footer-inner');
        self.append(inner);
        self.addClass('footer');
    }

    Footer.prototype = new Box();
    daddy.Footer = Footer;
})();
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
(function() {

})();
(function() {

})();
(function () {
    var Box = any.controls.Box;
    var Item = any.controls.Item;

    function Footer() {
        var self = this, inner;
        inner = new Box(new Item('<div class="copyright"><p>Copyright© totaldesigner</p></div>'));
        inner.addClass('footer-inner');
        self.append(inner);
        self.addClass('footer');
    }

    Footer.prototype = new Box();
    daddy.Footer = Footer;
})();
(function () {
    var Menu = any.ui.Menu;
    var List = any.collections.List;
    var Box = any.controls.Box;
    var Item = any.controls.Item;

    function Header() {
        var self = this, data, menu1, menu2, header1, header2, inner;
        data = new List([{
            name: 'WORK'
        }, {
            name: 'LIFE'
        }]);
        menu1 = new Box(new Item('<div id="btn-menu"><i class="fa fa-bars"></i></div>'));
        menu2 = new Menu(data, '<a>{name}</a>');
        header1 = new Box(new Item('<div>The Life of Dad</div>'));
        header1.addClass('title');
        header2 = new Box();
        header2.append(menu1);
        header2.append(menu2);
        inner = new Box();
        inner.addClass('header-inner');
        inner.addClass('horizontal');
        inner.append(header1);
        inner.append(header2);
        self.addClass('header');
        self.append(inner);
    }

    Header.prototype = new Box();
    daddy.Header = Header;
})();
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
    page = new any.controls.Page();
    page.append(layer);
    page.draw();
})();

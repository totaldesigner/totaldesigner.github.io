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
(function () {
    var List = any.collections.List;
    var Box = any.controls.Box;
    var Carousel = any.controls.Carousel;

    function Content() {
        var self = this, data, inner;
        var prefix = 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/';
        data = new List([
            {title: '1', image: 'family.jpg'},
            {title: '2', image: 'twins1.jpg'},
            {title: '3', image: 'twins2.jpg'},
            {title: '4', image: 'twins3.jpg'},
            {title: '5', image: 'twins4.jpg'},
            {title: '6', image: 'won1.jpg'},
            {title: '7', image: 'won2.jpg'},
            {title: '8', image: 'won3.jpg'},
            {title: '9', image: 'won4.jpg'},
            {title: '10', image: 'won5.jpg'},
            {title: '11', image: 'jin1.jpg'},
            {title: '12', image: 'jin2.jpg'},
            {title: '13', image: 'jin3.jpg'},
            {title: '14', image: 'jin4.jpg'}]);
        inner = new Box();
        inner.addClass('content-inner');
        inner.append(new Carousel(data, '<div><img src="' + prefix + '{image}" /></div>', {
            visibleItems: 3
        }));
        self.append(inner);
        self.addClass('content');
        self.inner = inner;
    }

    Content.prototype = new Box();
    daddy.Content = Content;
})();
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
(function () {
    var Item = any.controls.Item;
    var Box = any.controls.Box;

    function Header() {
        var self = this, header, inner;
        header = new Box(new Item('<div>THE LIFE OF DAD</div>'));
        header.addClass('title');
        inner = new Box();
        inner.addClass('header-inner');
        inner.addClass('horizontal');
        inner.append(header);
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
    layer.addEventListener('MenuItemSelected', function(e) {
        console.log('TEST');
    });
    page = new any.controls.Page();
    page.append(layer);
    page.draw();
})();

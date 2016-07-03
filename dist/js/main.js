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
(function() {
    var List = any.collections.List;
    var Box = any.controls.Box;
    var Item = any.controls.Item;
    var Carousel = any.controls.Carousel;

    function Work() {
        var self = this;
    }
    Work.prototype = new Box();

    function Life() {
        var self = this;
    }
    Life.prototype = new Box();

    function Banner() {
        var self = this, inner;
        var data = new List([{
            title: '1',
            image: 'dist/img/twins.jpg'
        }, {
            title: '2',
            image: 'dist/img/twins.jpg'
        }, {
            title: '3',
            image: 'dist/img/twins.jpg'
        }, {
            title: '4',
            image: 'dist/img/twins.jpg'
        },{
            title: '5',
            image: 'dist/img/twins.jpg'
        },{
            title: '6',
            image: 'dist/img/twins.jpg'
        },{
            title: '7',
            image: 'dist/img/twins.jpg'
        },{
            title: '8',
            image: 'dist/img/twins.jpg'
        }]);
        inner = new Box(new Carousel(data, '<div><img src="{image}" /></div>'));
        inner.addClass('banner-inner');
        self.append(inner);
        self.addClass('banner');
    }

    Banner.prototype = new Box();
    daddy.Banner = Banner;
})();
(function () {
    var Box = any.controls.Box;
    var Item = any.controls.Item;

    function Work() {
        var self = this;
    }
    Work.prototype = new Box();

    function Life() {
        var self = this;
    }
    Life.prototype = new Box();

    function Content() {
        var self = this, inner;
        inner = new Box(new Item('<div class="copyright"><p>CONTENT</p></div>'));
        inner.addClass('content-inner');
        self.append(inner);
        self.addClass('content');
    }

    Content.prototype = new Box();
    daddy.Content = Content;
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
    var List = any.collections.List;
    var Item = any.controls.Item;
    var Box = any.controls.Box;
    var Menu = any.controls.Menu;
    var MenuItemSelected = any.events.MenuItemSelected;

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
        menu2.addEventListener('MenuItemSelected', function(e) {
            self.dispatchEvent(new MenuItemSelected(self, e));
        });
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

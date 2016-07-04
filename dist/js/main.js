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
    var Item = any.controls.Item;
    var Box = any.controls.Box;
    var Carousel = any.controls.Carousel;

    function Content() {
        var self = this, data, subTitle, inner;
        subTitle = new Item('<div class="sub-title"><h3>LIFE</h3></div>');
        subTitle.addClass('sub-title');
        self.append(subTitle);
        var prefix = 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/';
        data = new List([{
            title: '1',
            image: 'family.jpg'
        }, {
            title: '2',
            image: 'family.jpg'
        }, {
            title: '3',
            image: 'family.jpg'
        }, {
            title: '4',
            image: 'family.jpg'
        }, {
            title: '5',
            image: 'family.jpg'
        }]);
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
        header1 = new Box(new Item('<div>THE LIFE OF DAD</div>'));
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
            self.dispatchEvent(e);
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

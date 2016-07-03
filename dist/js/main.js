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
    var List = any.collections.List;
    var Box = any.controls.Box;
    var ListView = any.controls.ListView;

    function Work() {
        var self = this, data;
        data = new List([{
            name: 'Freesat G2 (HDR-1000S)',
            image: 'dist/img/hdr-1000s.jpg',
            desc: 'Free Time is of course the Humax HDR-1000S’s key feature. All of the past week’s programmes ' +
            'from the various online streaming services are available for you to watch, all accessed from the central EPG. ' +
            'At present, only BBC iPlayer and ITV Player are available, but Freesat hopes to add 4OD and Demand 5 later this year. ' +
            'The Humax HDR-1000S’s hard-disk capacity is 500GB, which is enough to hold 125 hours of high-definition programmes ' +
            'or 300 hours of standard definition. An alternative 1TB version, the Humax HDR-1000S/1TB, is also available for £299. ' +
            'The Humax HDR-1000S isn’t merely a conduit for viewing TV though. Thanks to the network connection, you can access music, ' +
            'video and photos from servers on your home network, as well as a range of internet content from Humax’s TV Portal (more on this later). ' +
            'You can also connect a USB memory device and play media files from there.'
        }, {
            name: 'HATS (Humax Automated Testing System',
            image: 'dist/img/hdr-1000s.jpg',
            desc: 'Free Time is of course the Humax HDR-1000S’s key feature. All of the past week’s programmes ' +
            'from the various online streaming services are available for you to watch, all accessed from the central EPG. ' +
            'At present, only BBC iPlayer and ITV Player are available, but Freesat hopes to add 4OD and Demand 5 later this year. ' +
            'The Humax HDR-1000S’s hard-disk capacity is 500GB, which is enough to hold 125 hours of high-definition programmes ' +
            'or 300 hours of standard definition. An alternative 1TB version, the Humax HDR-1000S/1TB, is also available for £299. ' +
            'The Humax HDR-1000S isn’t merely a conduit for viewing TV though. Thanks to the network connection, you can access music, ' +
            'video and photos from servers on your home network, as well as a range of internet content from Humax’s TV Portal (more on this later). ' +
            'You can also connect a USB memory device and play media files from there.'
        }]);
        self.append(new ListView(data,
            '<div><p><div>{name}</div><div><img src="{image}" /></div><div>{desc}</div></p></div>'));
    }
    Work.prototype = new Box();

    function Life() {
        var self = this;
    }
    Life.prototype = new Box();

    function Content() {
        var self = this, inner;
        inner = new Box(new Work());
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

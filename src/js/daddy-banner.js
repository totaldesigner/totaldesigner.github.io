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
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        }, {
            title: '2',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        }, {
            title: '3',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        }, {
            title: '4',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        },{
            title: '5',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        },{
            title: '6',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        },{
            title: '7',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        },{
            title: '8',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        }]);
        inner = new Box(new Carousel(data, '<div><img src="{image}" /></div>'));
        inner.addClass('banner-inner');
        self.append(inner);
        self.addClass('banner');
    }

    Banner.prototype = new Box();
    daddy.Banner = Banner;
})();
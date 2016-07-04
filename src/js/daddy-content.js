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
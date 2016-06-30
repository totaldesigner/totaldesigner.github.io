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
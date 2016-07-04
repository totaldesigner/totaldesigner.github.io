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
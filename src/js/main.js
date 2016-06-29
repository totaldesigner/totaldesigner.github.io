/**
 * Created by mspark on 16. 6. 26.
 */
/*jshint browser:true */
/*globals any:false */

if (typeof any === 'undefined') {
    throw new Error('any.ui\'s JavaScript requires any');
}

(function () {
    var Page, Layer, Menu, List, Box, Item, ListView,
        page, layer, menu1, menu2, list, header, footer,
        headerInner, footerInner, headerTitle, headerMenu;

    Page = any.controls.Page;
    Layer = any.controls.Layer;
    Menu = any.ui.Menu;
    List = any.collections.List;
    Box = any.controls.Box;
    Item = any.controls.Item;
    ListView = any.controls.ListView;

    list = new List([{
        name: 'WORK'
    }, {
        name: 'LIFE'
    }]);

    page = new Page();
    layer = new Layer();

    // header
    menu1 = new Box(new Item('<div id="btn-menu"><i class="fa fa-bars"></i></div>'));
    menu2 = new Menu(list, '<a>{name}</a>');
    headerTitle = new Box(new Item('<div>The Life of Dad</div>'));
    headerTitle.addClass('title');
    headerMenu = new Box();
    headerMenu.append(menu1);
    headerMenu.append(menu2);
    headerInner = new Box();
    headerInner.addClass('header-inner');
    headerInner.addClass('horizontal');
    headerInner.append(headerTitle);
    headerInner.append(headerMenu);
    header = new Box();
    header.addClass('header');
    header.append(headerInner);
    layer.append(header);

    // footer
    footerInner = new Box(new Item('<div class="copyright"><p>Copyright© totaldesigner</p></div>'));
    footerInner.addClass('footer-inner');
    footer = new Box(footerInner);
    footer.addClass('footer');
    layer.append(footer);

    page.append(layer);
    page.draw();
})();

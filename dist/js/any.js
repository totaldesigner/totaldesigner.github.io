/**
 * Created by mspark on 6/22/16.
 */
/*jshint browser:true */
'use strict';

var CLASS_NAME = {
    BOX: 'box',
    VIEW: 'view',
    ITEM: 'item',
    LIST_VIEW: 'list-view',
    LIST_VIEW_ITEM: 'list-view-item',
    LAYOUT: 'layout',
    LAYER: 'layer',
    PAGE: 'page'
};

var any = any || {};
any = (function () {
    var utils, events, collections, controls, animation;

    animation = (function () {
        if (animation) {
            return animation;
        }
        else {
            var transition, element = document.createElement('fake');
            var transitions = {
                transition: 'transitionend',
                OTransition: 'oTransitionEnd',
                MozTransition: 'transitionend',
                WebkitTransition: 'webkitTransitionEnd'
            };
            for (transition in transitions) {
                if (transitions.hasOwnProperty(transition)) {
                    if (element.style[transition]) {
                        return {
                            transition: transition,
                            transitionEnd: transitions[transition]
                        };
                    }
                }
            }
        }
    })();

    utils = (function () {

        function mixin(target, source) {
            function copyProperty(key) {
                target[key] = source[key];
            }

            if (arguments.length > 2) {
                Array.prototype.slice.call(arguments, 2).forEach(copyProperty);
            } else {
                Object.keys(source).forEach(copyProperty);
            }
        }

        function format(s, context) {
            var l = s.split(/\{(.+?)\}/);
            for (var i = 1; i < l.length; i += 2) {
                l[i] = context[l[i]];
            }
            return l.join('');
        }

        return {
            mixin: mixin,
            format: format
        };
    })();

    events = (function () {
        /**
         * Event
         * @param name
         * @param sender
         * @param args
         * @constructor
         */
        function Event(name, sender, args) {
            var self = this;
            self.name = name;
            self.sender = sender;
            self.args = args;
        }

        /**
         * ItemAdded
         * @param sender
         * @param args
         * @constructor
         */
        function ItemAdded(sender, args) {
            Event.call(this, 'ItemAdded', sender, args);
        }

        ItemAdded.prototype = new Event();

        /**
         * ItemRemoved
         * @param sender
         * @param args
         * @constructor
         */
        function ItemRemoved(sender, args) {
            Event.call(this, 'ItemRemoved', sender, args);
        }

        ItemRemoved.prototype = new Event();

        /**
         * ItemUpdated
         * @param sender
         * @param args
         * @constructor
         */
        function ItemUpdated(sender, args) {
            Event.call(this, 'ItemUpdated', sender, args);
        }

        ItemUpdated.prototype = new Event();

        /**
         * EventTarget
         * @constructor
         */
        function EventTarget() {
        }

        EventTarget.prototype.addEventListener = function (name, callback) {
            var self = this;
            if (!self.listeners) {
                self.listeners = {};
            }
            if (!(name in self.listeners)) {
                self.listeners[name] = [];
            }
            self.listeners[name].push(callback);
        };
        EventTarget.prototype.removeEventListener = function (name, callback) {
            var self = this, stack;
            if (!self.listeners) {
                self.listeners = {};
            }
            if (!(name in self.listeners)) {
                return false;
            }
            stack = self.listeners[name];
            if (callback) {
                for (var i = 0, l = stack.length; i < l; i++) {
                    if (stack[i] === callback) {
                        stack.splice(i, 1);
                        return self.removeEventListener(name, callback);
                    }
                }
            } else {
                delete self.listeners[name];
            }
        };
        EventTarget.prototype.dispatchEvent = function (event) {
            var self = this, stack;
            if (!(event.name in self.listeners)) {
                return;
            }
            stack = self.listeners[event.name];
            event.target = self;
            for (var i = 0, l = stack.length; i < l; i++) {
                stack[i].call(self, event);
            }
        };

        return {
            Event: Event,
            EventTarget: EventTarget,
            ItemAdded: ItemAdded,
            ItemRemoved: ItemRemoved,
            ItemUpdated: ItemUpdated
        };
    })();

    /**
     * collections
     * @type {{List}}
     */
    collections = (function () {
        /**
         * Collection
         * @constructor
         */
        function Collection() {

        }

        Collection.prototype = [];
        utils.mixin(Collection.prototype, events.EventTarget.prototype);
        Collection.prototype.items = function (index) {
            return this[index];
        };

        /**
         * List
         * @constructor
         */
        function List(items) {
            var self = this;
            if (items instanceof Array) {
                self.splice.apply(self, [0, 0].concat(items));
            }
        }

        List.prototype = new Collection();
        List.prototype.add = function (item) {
            var self = this;
            self.push(item);
            self.dispatchEvent(new events.ItemAdded(self, {item: item}));
        };
        List.prototype.removeAt = function (index) {
            var self = this;
            self.splice(index, 1);
            self.dispatchEvent(new events.ItemRemoved(self, {index: index}));
        };
        List.prototype.update = function (index, item) {
            var self = this;
            self[index] = item;
            self.dispatchEvent(new events.ItemUpdated(self, {index: index, item: item}));
        };
        return {
            List: List
        };
    })();

    /**
     * controls
     * @type {{ListView, Layout, Layer, Page}}
     */
    controls = (function () {
        /**
         * Control
         * @param className
         * @param tagName
         * @constructor
         */
        function Control(className, tagName) {
            var self = this, element;
            self.className = className;
            element = document.createElement(tagName || 'div');
            element.classList.add(className);
            self.element = element;
            self.children = [];
            self.html = null;
        }

        utils.mixin(Control.prototype, events.EventTarget.prototype);
        Control.prototype.append = function (child) {
            var self = this;
            self.children.push(child);
        };
        Control.prototype.empty = function () {
            var self = this, element = self.element;
            while (element.hasChildNodes()) {
                element.removeChild(element.firstChild);
            }
        };
        Control.prototype.draw = function () {
            var self = this, child, children = self.children, element = self.element;
            self.empty();
            if (self.html) {
                element.innerHTML = self.html;
            }
            for (var i = 0, l = children.length; i < l; i++) {
                child = children[i];
                if (element.classList.contains('horizontal')) {
                    child.element.style.width = (100 / l) + '%';
                }
                child.draw();
                element.appendChild(child.element);
            }
        };
        Control.prototype.show = function (duration, complete) {
            var self = this, element = self.element, classList = element.classList;
            if (duration) {
                element.style[animation.transition] = utils.format('opacity {duration}ms', {
                    duration: duration
                });
                if (complete) {
                    element.addEventListener(animation.transitionEnd, function () {
                        element.removeEventListener(animation.transitionEnd);
                        element.style[animation.transition] = '';
                        complete();
                    });
                }
            }
            if (classList.contains('hidden')) {
                classList.remove('hidden');
            }
        };
        Control.prototype.hide = function (duration, complete) {
            var self = this, element = self.element, classList = element.classList;
            if (duration) {
                element.style[animation.transition] = utils.format('opacity {duration}ms', {
                    duration: duration
                });
                if (complete) {
                    element.addEventListener(animation.transitionEnd, function () {
                        element.removeEventListener(animation.transitionEnd);
                        element.style[animation.transition] = '';
                        complete();
                    });
                }
            }
            if (!classList.contains('hidden')) {
                classList.add('hidden');
            }
        };
        Control.prototype.moveTo = function (x, y, duration, complete) {
            var self = this, element = self.element;
            if (duration) {
                element.style[animation.transition] = utils.format('top {duration}ms, left {duration}ms', {
                    duration: duration
                });
                if (complete) {
                    element.addEventListener(animation.transitionEnd, function () {
                        element.removeEventListener(animation.transitionEnd);
                        complete();
                    });
                }
            }
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        };
        Control.prototype.addClass = function (className) {
            var self = this, element = self.element, classList;
            classList = className.split(' ');
            for (var i = 0, l = classList.length; i < l; i++) {
                if (!element.classList.contains(classList[i])) {
                    element.classList.add(classList[i]);
                }
            }
        };

        /**
         * Item
         * @param html
         * @param className
         * @param tagName
         * @constructor
         */
        function Item(html, className, tagName) {
            var self = this;
            Control.call(self, className || CLASS_NAME.ITEM, tagName);
            self.html = html;
        }

        Item.prototype = new Control();

        /**
         * ListViewItem
         * @param html
         * @param className
         * @constructor
         */
        function ListViewItem(html, className) {
            var self = this;
            Item.call(self, html, className || CLASS_NAME.LIST_VIEW_ITEM, 'li');
        }

        ListViewItem.prototype = new Item();

        /**
         * ListView
         * @param list
         * @param itemTemplate
         * @param className
         * @constructor
         */
        function ListView(list, itemTemplate, className) {
            var self = this;
            Control.call(self, className || CLASS_NAME.LIST_VIEW, 'ul');
            if (list) {
                list.addEventListener('ItemAdded', function (e) {
                    self.onItemAdded(e);
                });
                list.addEventListener('ItemRemoved', function (e) {
                    self.onItemRemoved(e);
                });
                list.addEventListener('ItemUpdated', function (e) {
                    self.onItemUpdated(e);
                });
                self.itemTemplate = itemTemplate;
                self.list = list;
                for (var i = 0, l = list.length; i < l; i++) {
                    self.append(new ListViewItem(utils.format(itemTemplate, list[i]), self.className + '-item'));
                }
            }
        }

        ListView.prototype = new Control();
        ListView.prototype.onItemAdded = function (e) {
            var self = this, args, item;
            args = e.args;
            item = new ListViewItem(utils.format(self.itemTemplate, args.item), self.className + '-item');
            item.draw();
            self.children.push(item);
            self.element.appendChild(item.element);
        };
        ListView.prototype.onItemRemoved = function (e) {
            var self = this, args, index, child;
            args = e.args;
            index = args.index;
            if (!isNaN(index)) {
                child = document.querySelector(utils.format('.{className}-item:nth-child({index})', {
                    className: self.className,
                    index: index + 1
                }));
                self.children.splice(index, 1);
                self.element.removeChild(child);
            }
        };
        ListView.prototype.onItemUpdated = function (e) {
            var self = this, args, index, item, child;
            args = e.args;
            index = args.index;
            if (!isNaN(index)) {
                child = document.querySelector(utils.format('.{className}-item:nth-child({index})', {
                    className: self.className,
                    index: index + 1
                }));
                item = new ListViewItem(utils.format(self.itemTemplate, args.item), self.className + '-item');
                item.draw();
                self.children[index] = item;
                self.element.replaceChild(item.element, child);
            }
        };

        /**
         * Box
         * @param child
         * @constructor
         */
        function Box(child) {
            var self = this;
            Control.call(self, CLASS_NAME.BOX);
            if (child) {
                self.children.push(child);
            }
        }

        Box.prototype = new Control();

        /**
         * Layer
         * @constructor
         */
        function Layer() {
            var self = this;
            Control.call(self, CLASS_NAME.LAYER);
        }

        Layer.prototype = new Control();

        /**
         * Page
         * @type {Control}
         */
        function Page() {
            var self = this;
            Control.call(self, CLASS_NAME.PAGE);
        }

        Page.prototype = new Control();
        Page.prototype.draw = function () {
            var self = this, body;
            body = document.getElementsByTagName('body')[0];
            body.className = 'any';
            body.addEventListener('keydown', self.onKeyDown);
            Control.prototype.draw.call(self);
            body.appendChild(self.element);
        };
        Page.prototype.removeTopLayer = function () {
            var self = this, topLayer, children = self.children;
            if (children.length > 0) {
                topLayer = children.splice(children.length - 1, 1);
                self.element.removeChild(topLayer.element);
                return true;
            }
            return false;
        };
        Page.prototype.onKeyDown = function (e) {
            var self = this, keyCode = e.keyCode || e.which;
            if (keyCode === 8 /* BACKSPACE */) {
                if (self.removeTopLayer()) {
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    if (!e.cancelBubble) {
                        e.cancelBubble = true;
                    }
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                }
            }
        };

        return {
            Item: Item,
            Box: Box,
            ListView: ListView,
            Layer: Layer,
            Page: Page
        };
    })();

    return {
        utils: utils,
        events: events,
        collections: collections,
        controls: controls
    };
})(any);

/**
 * Created by mspark on 16. 6. 25.
 */
/*jshint browser:true */
/*globals any:false */
'use strict';

if (typeof any === 'undefined') {
    throw new Error('any.ui\'s JavaScript requires any');
}

var UI_CLASS_NAME = {
    MENU: 'menu',
    MENU_ITEM: 'menu-item',
    CONTEXT_MENU: 'context-menu',
    CONTEXT_MENU_ITEM: 'context-menu-item'
};

any.ui = (function () {
    var controls, ListView, Layer;
    controls = any.controls;
    ListView = controls.ListView;
    Layer = controls.Layer;

    function Menu(list, itemTemplate) {
        var self = this;
        ListView.call(self, list, itemTemplate, UI_CLASS_NAME.MENU);
    }

    Menu.prototype = new ListView();

    function ContextMenu() {

    }

    ContextMenu.prototype = new Menu();

    function Dialog() {

    }

    Dialog.prototype = new Layer();

    function Pagination() {

    }

    Pagination.prototype = new ListView();

    return {
        ContextMenu: ContextMenu,
        Dialog: Dialog,
        Menu: Menu,
        Pagination: Pagination
    };
}());

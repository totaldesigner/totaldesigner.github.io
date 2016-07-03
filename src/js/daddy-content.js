(function () {
    var List = any.collections.List;
    var Box = any.controls.Box;
    var ListView = any.controls.ListView;

    function Work() {
        var self = this, data;
        data = new List([{
            name: 'Freesat G2 (HDR-1000S)',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hdr-1000s.jpg',
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
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hdr-1000s.jpg',
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
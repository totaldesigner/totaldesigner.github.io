(function () {
    var List = any.collections.List;
    var Item = any.controls.Item;
    var Box = any.controls.Box;
    var ListView = any.controls.ListView;
    var Carousel = any.controls.Carousel;

    function Work() {
        var self = this, data, subTitle, sideMenu;
        subTitle = new Item('<div><h3>WORK</h3></div>');
        subTitle.addClass('sub-title');
        self.append(subTitle);
        data = new List([{
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
        }, {
            title: '5',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg'
        }]);
        self.append(new Carousel(data, '<div><img src="{image}" /></div>'));
        data = new List([{
            id: 'hats',
            name: 'HATS',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/twins.jpg',
            desc: 'Free Time is of course the Humax HDR-1000S’s key feature. All of the past week’s programmes ' +
            'from the various online streaming services are available for you to watch, all accessed from the central EPG. ' +
            'At present, only BBC iPlayer and ITV Player are available, but Freesat hopes to add 4OD and Demand 5 later this year. ' +
            'The Humax HDR-1000S’s hard-disk capacity is 500GB, which is enough to hold 125 hours of high-definition programmes ' +
            'or 300 hours of standard definition. An alternative 1TB version, the Humax HDR-1000S/1TB, is also available for £299. ' +
            'The Humax HDR-1000S isn’t merely a conduit for viewing TV though. Thanks to the network connection, you can access music, ' +
            'video and photos from servers on your home network, as well as a range of internet content from Humax’s TV Portal (more on this later). ' +
            'You can also connect a USB memory device and play media files from there.'
        }, {
            id: 'hms-1000s',
            name: 'iCord Evolution (HMS-1000S)',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hms-1000s.jpg',
            desc: 'Sehen, speichern, streamen ... und nie mehr was verpassen! Wovon Sie bei einem digitalen Satellitenreceiver bisher nicht mal träumen konnten ' +
            '– der iCord® Evolution hat’s! Mal wieder alles gleichzeitig auf Sendung? Nicht Ihr Problem! Sie nehmen ganz einfach bis zu vier Programme parallel ' +
            'auf und sehen sich ein weiteres live an. Sollte Ihr angestammtes TV-Sofa besetzt sein, verteilen Sie bis zu zwei Live-Sendungen im Heimnetzwerk und ' +
            'machen es sich mit Tablet oder Smartphone woanders bequem. Mal keine Lust aufs laufende Programm? Macht nichts! Besuchen Sie einfach das HUMAX-TV-Portal ' +
            'und wählen Sie aus Millionen Songs und Tausenden Filmen genau das aus, wonach Ihnen der Sinn steht. Mal etwas weiter weg? Egal, Sie sitzen immer an der ' +
            'Quelle! Via Internet können Sie Ihren iCord® Evolution überall für Aufnahmen programmieren, etwa vom Büro-PC aus oder per App, und über den ' +
            'HUMAX Cloud Server greifen Sie von unterwegs auf alle Videos, Musikdateien und Fotos zu, die auf dem Receiver liegen. Wo Sie auch sind ' +
            '– der iCord® Evolution ist ganz nah bei Ihnen!'
        }, {
            id: 'hdr-1000s',
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
        }]);
        self.append(new ListView(data,
            '<section id="{id}"><p><div>{name}</div><div><img src="{image}" /></div><div>{desc}</div></p></section>'));
        sideMenu = new Box(new ListView(new List([{
            'name': 'HATS',
            'id': 'hats'
        }, {
            'name': 'iCord Evolution',
            'id': 'hms-1000s'
        }, {
            'name': 'FreeSat G2',
            'id': 'hdr-1000s'
        }]), '<div><a href="#{id}">{name}</a></div>'));
        sideMenu.addClass('side-menu');
        self.append(sideMenu);
    }
    Work.prototype = new Box();

    function Life() {
        var self = this, data, subTitle;
        subTitle = new Item('<div class="sub-title"><h3>LIFE</h3></div>');
        subTitle.addClass('sub-title');
        self.append(subTitle);
        data = new List([{
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
        self.append(new Carousel(data, '<div><img src="{image}" /></div>'));
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
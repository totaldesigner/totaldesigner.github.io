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
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hdr1000s_home.png'
        }, {
            title: '2',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hdr1000s_tvguide.png'
        }, {
            title: '3',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hdr1000s_showcase.png'
        }, {
            title: '4',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hms1000s_music.png'
        }, {
            title: '5',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hms1000s_recordings.png'
        }, {
            title: '6',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hms1000s_tvguide.png'
        }, {
            title: '5',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hats_intro.png'
        }, {
            title: '6',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hats_main.png'
        }]);
        self.append(new Carousel(data, '<div><img src="{image}" /></div>'));
        data = new List([{
            id: 'hms1000s',
            name: 'iCord Evolution (HMS-1000S)',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hms1000s.jpg',
            desc: 'Sehen, speichern, streamen ... und nie mehr was verpassen! Wovon Sie bei einem digitalen Satellitenreceiver bisher nicht mal träumen konnten ' +
            '– der iCord® Evolution hat’s! Mal wieder alles gleichzeitig auf Sendung? Nicht Ihr Problem! Sie nehmen ganz einfach bis zu vier Programme parallel ' +
            'auf und sehen sich ein weiteres live an. Sollte Ihr angestammtes TV-Sofa besetzt sein, verteilen Sie bis zu zwei Live-Sendungen im Heimnetzwerk und ' +
            'machen es sich mit Tablet oder Smartphone woanders bequem. Mal keine Lust aufs laufende Programm? Macht nichts! Besuchen Sie einfach das HUMAX-TV-Portal ' +
            'und wählen Sie aus Millionen Songs und Tausenden Filmen genau das aus, wonach Ihnen der Sinn steht. Mal etwas weiter weg? Egal, Sie sitzen immer an der ' +
            'Quelle! Via Internet können Sie Ihren iCord® Evolution überall für Aufnahmen programmieren, etwa vom Büro-PC aus oder per App, und über den ' +
            'HUMAX Cloud Server greifen Sie von unterwegs auf alle Videos, Musikdateien und Fotos zu, die auf dem Receiver liegen. Wo Sie auch sind ' +
            '– der iCord® Evolution ist ganz nah bei Ihnen!' +
            'Sehen, speichern, streamen ... und nie mehr was verpassen! Wovon Sie bei einem digitalen Satellitenreceiver bisher nicht mal träumen konnten ' +
            '– der iCord® Evolution hat’s! Mal wieder alles gleichzeitig auf Sendung? Nicht Ihr Problem! Sie nehmen ganz einfach bis zu vier Programme parallel ' +
            'auf und sehen sich ein weiteres live an. Sollte Ihr angestammtes TV-Sofa besetzt sein, verteilen Sie bis zu zwei Live-Sendungen im Heimnetzwerk und ' +
            'machen es sich mit Tablet oder Smartphone woanders bequem. Mal keine Lust aufs laufende Programm? Macht nichts! Besuchen Sie einfach das HUMAX-TV-Portal ' +
            'und wählen Sie aus Millionen Songs und Tausenden Filmen genau das aus, wonach Ihnen der Sinn steht. Mal etwas weiter weg? Egal, Sie sitzen immer an der ' +
            'Quelle! Via Internet können Sie Ihren iCord® Evolution überall für Aufnahmen programmieren, etwa vom Büro-PC aus oder per App, und über den ' +
            'HUMAX Cloud Server greifen Sie von unterwegs auf alle Videos, Musikdateien und Fotos zu, die auf dem Receiver liegen. Wo Sie auch sind ' +
            '– der iCord® Evolution ist ganz nah bei Ihnen!'
        }, {
            id: 'hdr1000s',
            name: 'Freesat G2 (HDR-1000S)',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/hdr1000s.jpg',
            desc: 'Free Time is of course the Humax HDR-1000S’s key feature. All of the past week’s programmes ' +
            'from the various online streaming services are available for you to watch, all accessed from the central EPG. ' +
            'At present, only BBC iPlayer and ITV Player are available, but Freesat hopes to add 4OD and Demand 5 later this year. ' +
            'The Humax HDR-1000S’s hard-disk capacity is 500GB, which is enough to hold 125 hours of high-definition programmes ' +
            'or 300 hours of standard definition. An alternative 1TB version, the Humax HDR-1000S/1TB, is also available for £299. ' +
            'The Humax HDR-1000S isn’t merely a conduit for viewing TV though. Thanks to the network connection, you can access music, ' +
            'video and photos from servers on your home network, as well as a range of internet content from Humax’s TV Portal (more on this later). ' +
            'You can also connect a USB memory device and play media files from there.' +
            'Free Time is of course the Humax HDR-1000S’s key feature. All of the past week’s programmes ' +
            'from the various online streaming services are available for you to watch, all accessed from the central EPG. ' +
            'At present, only BBC iPlayer and ITV Player are available, but Freesat hopes to add 4OD and Demand 5 later this year. ' +
            'The Humax HDR-1000S’s hard-disk capacity is 500GB, which is enough to hold 125 hours of high-definition programmes ' +
            'or 300 hours of standard definition. An alternative 1TB version, the Humax HDR-1000S/1TB, is also available for £299. ' +
            'The Humax HDR-1000S isn’t merely a conduit for viewing TV though. Thanks to the network connection, you can access music, ' +
            'video and photos from servers on your home network, as well as a range of internet content from Humax’s TV Portal (more on this later). ' +
            'You can also connect a USB memory device and play media files from there.'
        }]);
        self.append(new ListView(data,
            '<section><div id="{id}"></div><p><div class="section-title">{name}</div><div><img src="{image}" /></div><div>{desc}</div></p></section>'));
        sideMenu = new Box(new ListView(new List([{
            'name': 'iCord Evolution',
            'id': 'hms1000s'
        }, {
            'name': 'FreeSat G2',
            'id': 'hdr1000s'
        }]), '<div><a href="#{id}">{name}</a></div>'));
        sideMenu.addClass('side-menu');
        self.append(sideMenu);
        self.addClass('work');
    }
    Work.prototype = new Box();

    function Life() {
        var self = this, data, subTitle;
        subTitle = new Item('<div class="sub-title"><h3>LIFE</h3></div>');
        subTitle.addClass('sub-title');
        self.append(subTitle);
        data = new List([{
            title: '1',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/family.jpg'
        }, {
            title: '2',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/family.jpg'
        }, {
            title: '3',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/family.jpg'
        }, {
            title: '4',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/family.jpg'
        }, {
            title: '5',
            image: 'https://raw.githubusercontent.com/totaldesigner/totaldesigner.github.io/master/dist/img/family.jpg'
        }]);
        self.append(new Carousel(data, '<div><img src="{image}" /></div>', {
            visibleItems: 1
        }));
        self.addClass('life');
    }
    Life.prototype = new Box();

    function Content() {
        var self = this, inner, work;
        work = new Work();
        inner = new Box();
        inner.append(work);
        inner.addClass('content-inner');
        self.append(inner);
        self.addClass('content');
        self.work = work;
        self.inner = inner;
    }

    Content.prototype = new Box();
    Content.prototype.change = function(menu) {
        var self = this;
        if (menu === 'WORK') {
            self.life.element.style.display = 'none';
            self.work.element.style.display = 'block';
        } else {
            if (!self.life) {
                self.life = new Life();
                self.life.draw();
                self.inner.append(self.life);
                self.inner.element.appendChild(self.life.element);
            }
            self.work.element.style.display = 'none';
            self.life.element.style.display = 'block';
        }
    };
    daddy.Content = Content;
})();
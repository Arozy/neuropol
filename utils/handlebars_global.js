class Page extends Fetch {
    constructor(pageName, query, params) {
        super(query, params);
        this.currentPageName = pageName;
    }

    async fillHeaderTemplate() {
        /**
         * @param {[{name: string, href: string}]} additional_links
         */
        const data = {
            additionalLinks: await getShared('otherLinks'),
            phone_number: await getShared('tel'),
            mail_address: await getShared('email'),
            siteLinks: await getShared('siteLinks')
        };

        data.siteLinks = data.siteLinks.data.map(element => {
            if (element.attributes['idName'] === this.currentPageName) {
                Object.defineProperty(element.attributes, 'class', {value: 'active'});
            }
            return element;
        });

        this.useFiller(data, "header");

        (function ($) {
            $('.menu').slicknav({
                prependTo:".mobile-nav",
                duration: 300,
                closeOnClick:true,
            });
        })(jQuery);
    }

    async fillFooterTemplate() {
        const data = {
            columns: [
                {
                    heading: 'Śledź nas',
                    description: 'Odwiedź nasze social media i zobacz jak działamy "od kuchni" oraz co jeszcze robimy by wspierać naszych pacjentów.',
                    socialLinks: [
                        {
                            icon: 'icofont-facebook',
                            href: await getShared('facebook'),
                            title: 'Odwiedź naszego facebooka'
                        },
                        {
                            icon: 'icofont-instagram',
                            href: await getShared('instagram'),
                            title: 'Rzuć okiem na nasze insta'
                        }
                    ]
                },
                {
                    heading: 'Szybkie łącza',
                    linkColumns: [
                        {
                            linkList: await getShared('siteLinks')
                        },
                        {
                            linkList: await getShared('otherLinks')
                        }
                    ],
                },
                {
                    heading: 'Godziny otwarcia',
                    description: 'Jesteśmy do Twojej dyspozycji w każdy dzień pracujący',
                    timeList: await getShared('hours')
                }
            ]
        }

        this.useFiller(data, 'footer');
    }

    useFiller(data, uniqueName) {
        const template = `${uniqueName}-template`;
        const output = `${uniqueName}-output`;
        const compileTemplate = Handlebars.compile(
            document.querySelector(`#${template}`).innerHTML
        );
        document.querySelector(`#${output}`).innerHTML = compileTemplate(data);
    }
}

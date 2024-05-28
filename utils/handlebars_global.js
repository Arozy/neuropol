class Page {
    constructor(pageName) {
        this.currentPageName = pageName;
    }

    useFiller(data, uniqueName) {
        const template = `${uniqueName}-template`;
        const output = `${uniqueName}-output`;
        const compileTemplate = Handlebars.compile(
            document.querySelector(`#${template}`).innerHTML
        );
        document.querySelector(`#${output}`).innerHTML = compileTemplate(data);
    }

    fillHeaderTemplate() {
        /**
         * @param {[{name: string, href: string}]} additional_links
         */
        const data = {
            additional_links: [],
            phone_number: getShared('tel'),
            mail_address: getShared('email'),
            link_list: getShared('siteLinks')
        };
        data.link_list = data.link_list.map(element => {
            if (element.id === this.currentPageName) {
                return {...element, class: 'active'};
            }
            return element;
        });
        this.useFiller(data, "header");
    }

    fillFooterTemplate() {
        const data = {
            columns: [
                {
                    heading: 'Śledź nas',
                    description: 'Odwiedź nasze social media i zobacz jak działamy od kuchni oraz co jeszcze robimy by wspierać naszych pacjentów',
                    socialLinks: [
                        {
                            icon: 'icofont-facebook',
                            href: 'fb.com/neuropol',
                            title: 'Odwiedź naszego facebooka'
                        },
                        {
                            icon: 'icofont-instagram',
                            href: 'insta.com/neuropol',
                            title: 'Rzuć okiem na nasze insta'
                        }
                    ]
                },
                {
                    heading: 'Quick links',
                    linkColumns: [
                        {
                            linkList: getShared('siteLinks')
                        },
                        {
                            linkList: getShared('otherLinks')
                        }
                    ],
                },
                {
                    heading: 'Godziny otwarcia',
                    description: 'Jesteśmy do Twojej dyspozycji w każdy dzień pracujący',
                    timeList: getShared('hours')
                }
            ]
        }
        this.useFiller(data, 'footer');
    }
}

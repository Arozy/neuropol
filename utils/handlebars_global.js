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

    async fillHeaderTemplate() {
        /**
         * @param {[{name: string, href: string}]} additional_links
         */
        const data = {
            additional_links: [],
            phone_number: await getShared('tel'),
            mail_address: await getShared('email'),
            link_list: await getShared('siteLinks')
        };
        data.link_list = data.link_list.map(element => {
            if (element.id === this.currentPageName) {
                return {...element, class: 'active'};
            }
            return element;
        });
        this.useFiller(data, "header");
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

        console.log(data);

        this.useFiller(data, 'footer');
    }
}

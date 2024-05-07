export class Page {

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
            link_list: [
                {href: ".././home", name: "Strona główna", sublink: {}},
                {href: ".././about", name: "O nas", class: "active"},
                {href: ".././staff", name: "Nasi specjaliści"},
                {href: ".././services", name: "usługi"},
                {href: ".././contact", name: "kontakt"},
                {href: ".././trainings", name: "szkolenia"}
            ],
        };
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
                            linkList: [
                                {href: 'privacy-policy', name: 'polityka prywatności'},
                                {href: 'faq', name: 'FAQ'},
                                {href: "", name: "Inne linki"},
                            ]
                        }
                    ],
                },
                {
                    heading: 'Godziny otwarcia',
                    description: 'jesteśmy do Twojej dyspozycji w każdy dzień pracujący',
                    timeList: getShared('hours')
                }
            ]
        }
        this.useFiller(data, 'footer');
    }
}

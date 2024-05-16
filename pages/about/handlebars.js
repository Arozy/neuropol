function getShared(selection) {
    const data = {
        tel: '+48 600 02 99 07',
        address: 'Ul. Fordońska 81, 85-647 Bydgoszcz',
        email: 'rejestracja@neuropol.pl',
        hours: [
            {
                period: 'Poniedziałek - Piątek',
                time: '8.00 - 20.00'
            },
            {
                period: 'Sobota - niedziela',
                time: 'nieczynne'
            },
            {
                period: 'Dni świąteczne',
                time: 'nieczynne'
            }
        ],
        siteLinks: [
            {href: "", name: "Strona główna"},
            {href: "about", name: "O nas"},
            {href: "staff", name: "Nasi specjaliści"},
            {href: "services", name: "usługi"},
            {href: "contact", name: "kontakt"},
            {href: "trainings", name: "szkolenia"}
        ]
    }
    const map = new Map();
    map.set('tel', data.tel)
        .set('address', data.address)
        .set('email', data.email)
        .set('hours', data.hours)
        .set('siteLinks', data.siteLinks);

    return map.get(selection) || null;
}

function runFillers() {
    const homepage = new Page();
    homepage.fillHeaderTemplate();
    homepage.fillServicesTemplate()
    homepage.fillFooterTemplate();
}

class Page {

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

    fillServicesTemplate() {
        const data = {
            title: 'Oferujemy wiele usług medycznych z zakresu neurologii i rehabilitacji',
            subtitle: 'Każdego dnia wspieramy naszych pacjentów, dając im dostęp do lekarzy neurologów, rehabilitantów czy fizjoterapeutów, zobacz jak wiele możemy dla Ciebie zrobić',
            services: [
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje',
                    video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
                    modal_description: 'Miastenia Gravis to pojebana choroba'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
            ]
        }
        this.useFiller(data, 'services');
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

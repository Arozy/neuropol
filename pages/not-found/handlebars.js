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
    homepage.fillHeroSliderTemplate();
    homepage.fillCardsTemplate();
    homepage.fillFeaturesTemplate();
    homepage.fillCTATemplate();
    homepage.fillFooterTemplate();
}

class Page {
    useHeroSliderFiller(data, uniqueName) {
        const heroSlider = document.getElementById(uniqueName);
        const allSliders = heroSlider.querySelectorAll(".single-slider");
        allSliders.forEach((slider, index) => {
            const sliderHeading = slider.querySelector("h1");
            const sliderDescription = slider.querySelector("p");
            const sliderCTAContainer = slider.querySelector(".button");

            data[index] === undefined ? (index = 0) : index;

            // Setting essential content:
            data[index]?.image_path
                ? slider.setAttribute(
                    "style",
                    `background-image: url(${data[index].image_path})`
                )
                : slider.setAttribute("style", `background-color: #fff`);
            sliderHeading.innerHTML = data[index].header_text;
            sliderDescription.innerHTML = data[index].description_text;

            // Generating CTA buttons:
            sliderCTAContainer.innerHTML = data[index].CTAs;
        });
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
            link_list: [
                {href: ".././home", name: "Strona główna", sublink: {}},
                {href: ".././about", name: "O nas"},
                {href: ".././staff", name: "Nasi specjaliści"},
                {href: ".././services", name: "usługi", class: "active"},
                {href: ".././contact", name: "kontakt"},
                {href: ".././trainings", name: "szkolenia"}
            ],
        };
        this.useFiller(data, "header");
    }

    fillHeroSliderTemplate() {
        const data = {
            slider_elements: [
                {
                    image_path: "",
                    header_text:
                        "Dostarczamy Rozwiązania <span>Medyczne</span> Którym Możesz\n" +
                        "                                <span>Zaufać!</span>",
                    description_text:
                        "Cokolwiek Ci dolega, personel <span>Neuropol</span> zawsze jest gotowy by Ci pomóc",
                    CTAs: `
                    <a class="btn" href="tel: ${getShared('tel')}">Umów się na wizytę</a>
                    <a class="btn primary" href="services">Dowiedz się więcej</a>`,
                },
                {
                    image_path: "",
                    header_text:
                        "Dostarczamy Rozwiązania <span>Medyczne</span> Którym Możesz\n" +
                        "                                <span>Zaufać!</span>",
                    description_text:
                        "Cokolwiek Ci dolega, personel <span>Neuropol</span> zawsze jest gotowy by Ci pomóc",
                    CTAs: `
                    <a class="btn" href="tel: ${getShared('tel')}">Umów się na wizytę</a>
                    <a class="btn primary" href="services">Dowiedz się więcej</a>`,
                },
                {
                    image_path: "",
                    header_text: "Wspieramy <span>Pacjentów</span>",
                    description_text: "Jesteśmy do <span>Twojej</span> dyspozycji",
                    CTAs: "",
                },
            ],
        };
        this.useHeroSliderFiller(data.slider_elements, "hero-slider-heading");
    }

    fillCardsTemplate() {
        const data = {
            card_items: [
                {
                    icon: "icofont-prescription",
                    heading: 'Nasi specjaliści',
                    content: ' <p>\n' +
                        '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium eveniet\n' +
                        '                                    impedit inventore ipsam maiores.\n' +
                        '                                </p>',
                    cta: 'Dowiedz się więcej',
                    ctaHref: 'staff'
                },
                {
                    icon: "fa fa-ambulance",
                    heading: "Nasze usługi",
                    content: "<p>\n" +
                        "                                    Świadczymy usługi z zakresu leczenia dolegliwości neurologiczych i jesteśmy w tym zajebiści\n" +
                        "                                </p>",
                    cta: 'Dowiedz się więcej',
                    ctaHref: 'services'
                },
                {
                    icon: "icofont-ui-clock",
                    heading: "Godziny otwarcia",
                    content:
                        '<ul class="time-sidual">\n' +
                        '                                    <li class="day">\n' +
                        "                                        Poniedziałek - Piątek <span>8.00-20.00</span>\n" +
                        "                                    </li>\n" +
                        '                                    <li class="day">Sobota - niedziela <span>nieczynne</span></li>\n' +
                        '                                    <li class="day">\n' +
                        "                                        Dni świąteczne <span>nieczynne</span>\n" +
                        "                                    </li>\n" +
                        "                                </ul>",
                    cta: 'Dowiedz się więcej',
                    ctaHref: 'hours'
                },
            ],
        };
        this.useFiller(data, 'cards')
    }

    fillFeaturesTemplate() {
        const data = {
            header: 'Jesteśmy gotowi by pomagać naszym pacjentom',
            description: 'Grupa specjalistów, takich jak neurolodzy, fizjoterapueci, pielęgniarki czy rehabilitanci są zawsze gotowi by Ci pomóc.',
            featureItems: [
                {
                    header: 'Umów się na wizytę',
                    description: 'Szybko uzyskaj pomoc, kontaktując się z nami telefonicznie',
                    hrefLink: `tel: ${getShared('tel')}`,
                    icon: 'fa fa-phone'
                },
                {
                    header: 'Otrzymaj pomoc',
                    description: 'Twój komfort w kontakcie z naszym personelem jest dla nas bardzo ważny',
                    icon: 'icofont icofont-stethoscope'
                },
                {
                    header: 'Poczuj się zdrowo',
                    description: 'Nie tylko leczymy, ale też doradzamy jak dbać o swoje zdrowie',
                    icon: 'icofont icofont-heart-beat'
                }
            ]
        }
        this.useFiller(data, 'feature');
    }

    fillCTATemplate() {
        const data = {
            heading: 'Potrzebujesz profesjonalnej porady medycznej? Zadzwoń do nas na numer +48 758 481 481',
            description: 'Nasi specjaliści są do Twojej dyspozycji w godzinach pracy ośrodka',
            firstButton: {
                text: 'Zadzwoń teraz',
                action: `tel:${getShared('tel')}`
            },
            secondButton: {
                text: 'Dowiedz się więcej',
                action: 'about'
            }
        }
        this.useFiller(data, 'cta');
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

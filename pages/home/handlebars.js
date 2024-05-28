function runFillers() {
    const homepage = new Home('home');
    homepage.fillHeaderTemplate();
    homepage.fillHeroSliderTemplate();
    homepage.fillCardsTemplate();
    homepage.fillFeaturesTemplate();
    homepage.fillCTATemplate();
    homepage.fillFooterTemplate();
}

class Home extends Page {
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
                action: './../staff'
            }
        }
        this.useFiller(data, 'cta');
    }
}

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
                        "Już niedługo <span>wielkie otwarcie</span> naszej\n" +
                        "                                <span>placówki!</span>",
                    description_text: "",
                    CTAs: `
                    <a class="btn" href="/contact">Umów się na wizytę</a>
                    <a class="btn primary" href="services">Dowiedz się więcej</a>`,
                },
            ],
        };
        this.useHeroSliderFiller(data.slider_elements, "hero-slider-heading");
    }

    fillCardsTemplate() {
        const data = {
            card_items: [
                {
                    icon: "icofont-doctor",
                    heading: 'Nasi specjaliści',
                    content: ' <p>Twoje zdrowie, nasza pasja. Ekspercka opieka, której możesz zaufać.</p>',
                    cta: 'Dowiedz się więcej',
                    ctaHref: 'staff'
                },
                {
                    icon: "fa fa-list-alt",
                    heading: "Nasze usługi",
                    content: "<p>Profesjonalne rozwiązania dla Twojego lepszego samopoczucia.</p>",
                    cta: 'Dowiedz się więcej',
                    ctaHref: 'services'
                },
                {
                    icon: "icofont-ui-clock",
                    heading: "Godziny otwarcia",
                    content:
                        '<ul class="time-sidual">\n' +
                        '                                    <li class="day">\n' +
                        "                                        poniedziałek - piątek <span>8.30-16.30</span>\n" +
                        "                                    </li>\n" +
                        '                                    <li class="day">sobota - niedziela <span>nieczynne</span></li>\n' +
                        '                                    <li class="day">\n' +
                        "                                        dni świąteczne <span>nieczynne</span>\n" +
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
            description: 'Grupa specjalistów, takich jak fizjoterapeuci oraz terapeuci są zawsze gotowi by Ci pomóc.',
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
            heading: 'Zrób pierwszy krok ku lepszemu samopoczuciu – umów się na wizytę już dziś!',
            description: 'Nasi specjaliści są do Twojej dyspozycji w godzinach pracy ośrodka.',
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

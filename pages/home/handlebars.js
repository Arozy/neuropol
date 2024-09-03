function runFillers() {
    const homepage = new Home('strona-glowna', 'pages/1', '?populate[content][populate]=*');
    homepage.fillHeaderTemplate();
    homepage.fillHeroSliderTemplate();
    homepage.fillCardsTemplate();
    homepage.fillFeaturesTemplate();
    homepage.fillCTATemplate();
    homepage.fillFooterTemplate().then(() => {
        document.querySelector('.preloader').classList.add('preloader-deactivate');
    })
}

class Home extends Page {
    useHeroSliderFiller(data, uniqueName) {
        const heroSlider = document.getElementById(uniqueName);
        const allSliders = heroSlider.querySelectorAll(".single-slider");
        allSliders.forEach((slider, index) => {
            const sliderHeading = slider.querySelector("h1");
            const sliderDescription = slider.querySelector("p");
            const sliderCTAContainer = slider.querySelector(".button");
            const primaryButton = sliderCTAContainer.querySelector(".btn-primary");
            const secondaryButton = sliderCTAContainer.querySelector(".btn-secondary");

            data[index] === undefined ? (index = 0) : index;

            // Setting essential content:
            data[index]?.image
                ? slider.setAttribute(
                    "style",
                    `background-image: url(${data[index].image.data.attributes.url})`
                )
                : slider.setAttribute("style", `background-color: #fff`);
            sliderHeading.innerHTML = data[index]?.title;
            sliderDescription.innerHTML = data[index]?.description ?? '';

            if (data[index]?.primary) {
                primaryButton.innerHTML = data[index].primary.text;
                primaryButton.href = data[index].primary.action;
            } else {
                primaryButton.remove();
            }

            if (data[index]?.secondary) {
                secondaryButton.innerHTML = data[index].secondary.text;
                secondaryButton.href = data[index].secondary.action;
            } else {
                secondaryButton.remove();
            }

            if (!/Mobi|Android/i.test(navigator.userAgent)) {
                document.querySelectorAll('a[href*="tel:"]').forEach(el => {
                    el.href = '/kontakt';
                })
            }
        });
    }

    async fillHeroSliderTemplate() {
        if (await this.fetchAndLoad()) {
            this.useHeroSliderFiller(await this.getExact('header.header'), "hero-slider-heading");
        }
    }

    async fillCardsTemplate() {
        const data = { card_items: await this.getExact('cards.card') };

        this.useFiller(data, 'cards')
    }

    async fillFeaturesTemplate() {
        const data = {
            header: 'Jesteśmy gotowi by pomagać naszym pacjentom',
            description: 'Grupa specjalistów, takich jak fizjoterapeuci oraz terapeuci są zawsze gotowi by Ci pomóc.',
            featureItems: [
                {
                    header: 'Umów się na wizytę',
                    description: 'Szybko uzyskaj pomoc, kontaktując się z nami telefonicznie',
                    hrefLink: `tel: ${await getShared('tel')}`,
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

    async fillCTATemplate() {
        const data = {
            heading: 'Zrób pierwszy krok ku lepszemu samopoczuciu – umów się na wizytę już dziś!',
            description: 'Nasi specjaliści są do Twojej dyspozycji w godzinach pracy ośrodka.',
            firstButton: {
                text: 'Zadzwoń teraz',
                action: `tel:${await getShared('tel')}`
            },
            secondButton: {
                text: 'Dowiedz się więcej',
                action: './../staff'
            }
        }
        this.useFiller(data, 'cta');
    }
}

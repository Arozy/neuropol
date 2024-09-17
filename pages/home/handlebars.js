function runFillers() {
    const homepage = new Home('strona-glowna', 'pages/1', '?populate=deep');
    homepage.build().finally();
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
        this.useFiller(await this.getExact('cards.card-section'), 'cards')

        console.log(await this.getExact('cards.card-section'))
    }

    async fillFeaturesTemplate() {
        this.useFiller(await this.getExact('steps.steps'), 'feature');
    }

    async fillCTATemplate() {
        this.useFiller(await this.getExact('ctas.cta-banner'), 'cta');
    }

    async build() {
        const allMethods = [
            this.fillHeaderTemplate(),
            this.fillHeroSliderTemplate(),
            this.fillCardsTemplate(),
            this.fillFeaturesTemplate(),
            this.fillCTATemplate(),
            this.fillFooterTemplate()
        ];

        for (const method of allMethods) {
            await method;
        }

        document.querySelector('.preloader').classList.add('preloader-deactivate');
    }
}

function runFillers() {
    const services = new Services('uslugi', 'pages/4', '?populate=deep');
    services.build().finally();
}

class Services extends Page {
    async fillPricingTemplate() {
        if (await this.fetchAndLoad()) {
            this.useFiller(this.response, 'services');
        }
    }

    async build() {
        const allMethods = [
            this.fillHeaderTemplate(),
            this.fillPricingTemplate(),
            this.fillFooterTemplate()
        ];

        for (const method of allMethods) {
            await method;
        }

        document.querySelector('.preloader').classList.add('preloader-deactivate');
    }
}

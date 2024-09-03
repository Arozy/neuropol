function runFillers() {
    const about = new About('o-nas', 'pages/2', '?populate[content][populate]=*');
    about.build().finally();
}

class About extends Page {
    async fillServicesTemplate() {
        if (await this.fetchAndLoad()) {
            const data = {
                ...this.response,
                services: await this.getExact('about-items.about-items'),
            }
            this.useFiller(data, 'services');
        }
    }

    async build() {
        const allMethods = [
            this.fillHeaderTemplate(),
            this.fillServicesTemplate(),
            this.fillFooterTemplate()
        ];

        for (const method of allMethods) {
            await method;
        }

        document.querySelector('.preloader').classList.add('preloader-deactivate');
    }

}

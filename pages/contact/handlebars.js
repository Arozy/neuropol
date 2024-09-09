function runFillers() {
    const contact = new Contact('kontakt', 'pages/5', '?populate=deep');
    contact.build().finally();
}

class Contact extends Page {
    async fillContactCardTemplate() {
        if (await this.fetchAndLoad()) {
            this.useFiller(this.response, 'contact-card');
        }
    }

    async build() {
        const allMethods = [
            this.fillHeaderTemplate(),
            this.fillContactCardTemplate(),
            this.fillFooterTemplate()
        ];

        for (const method of allMethods) {
            await method;
        }

        document.querySelector('.preloader').classList.add('preloader-deactivate');
    }
}

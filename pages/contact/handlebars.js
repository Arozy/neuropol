function runFillers() {
    const contact = new Contact('kontakt');
    contact.fillHeaderTemplate();
    contact.fillContactCardTemplate();
    contact.fillFooterTemplate().then(() => document.querySelector('.preloader').classList.add('preloader-deactivate'))
}

class Contact extends Page {
    async fillContactCardTemplate() {
        const data = {
            header: 'Skontaktuj się',
            items: [
                {
                    icon: 'fa fa-map-marker',
                    heading: 'Adres',
                    summary: await getShared('address'),
                },
                {
                    icon: 'fa fa-phone',
                    heading: 'Telefon',
                    summary: await getShared('tel'),
                    link: `tel:${await getShared('tel')}`,
                },
                {
                    icon: 'fa fa-facebook',
                    heading: 'Facebook',
                    summary: 'Nasz FP',
                    link: await getShared('facebook'),
                },
                {
                    icon: 'fa fa-instagram',
                    heading: 'Instagram:',
                    summary: 'Nasze insta',
                    link: await getShared('instagram'),
                }
            ]
        };
        this.useFiller(data, 'contact-card');
    }
}

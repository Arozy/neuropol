function runFillers() {
    const contact = new Contact('contact');
    contact.fillHeaderTemplate();
    contact.fillContactCardTemplate();
    contact.fillFooterTemplate();
}

class Contact extends Page {
    fillContactCardTemplate() {
        const data = {
            header: 'Skontaktuj się',
            items: [
                {
                    icon: 'fa fa-map-marker',
                    heading: 'Adres',
                    summary: getShared('address'),
                },
                {
                    icon: 'fa fa-phone',
                    heading: 'Telefon',
                    summary: getShared('tel'),
                    link: `tel:${getShared('tel')}`,
                },
                {
                    icon: 'fa fa-facebook',
                    heading: 'Facebook',
                    summary: 'Nasz FP',
                    link: getShared('facebook'),
                },
                {
                    icon: 'fa fa-instagram',
                    heading: 'Instagram:',
                    summary: 'Nasze insta',
                    link: getShared('instagram'),
                }
            ]
        };
        this.useFiller(data, 'contact-card');
    }
}

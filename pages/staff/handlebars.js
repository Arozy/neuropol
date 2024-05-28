function runFillers() {
    const staff = new Staff('staff');
    staff.fillHeaderTemplate();
    staff.fillSpecialistsTemplate();
    staff.fillFooterTemplate();
}

class Staff extends Page {
    fillSpecialistsTemplate() {
        const data = {
            header: 'Nasi specjaliści',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Accusamus adipisci.',
            staff: [
                {
                    title: 'Fizjoterapueci',
                    description: 'lorem ipsum dolor sit amet',
                    singleItemTitle: 'Fizjoterapeuta',
                    items: [
                        {
                            image: 'https://thispersondoesnotexist.com/',
                            alt: 'Uśmiechnięty mężczyzna patrzy w stronę aparatu',
                            name: 'Mgr Jan Kowalski',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, commodi earum mollitia numquam quibusdam!'
                        },
                        {
                            image: 'https://thispersondoesnotexist.com/',
                            alt: 'Uśmiechnięty mężczyzna patrzy w stronę aparatu',
                            name: 'Mgr Paweł Zając',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, commodi earum mollitia numquam quibusdam!'
                        }
                    ]
                },
                {
                    title: 'Lekarze',
                    description: 'lorem ipsum dolor sit amet',
                    singleItemTitle: 'Lekarz',
                    items: [
                        {
                            image: 'https://thispersondoesnotexist.com/',
                            alt: 'Uśmiechnięty mężczyzna patrzy w stronę aparatu',
                            specialization: 'Neurolog',
                            name: 'Mgr Jan Kowalski',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, commodi earum mollitia numquam quibusdam!'
                        },
                        {
                            image: 'https://thispersondoesnotexist.com/',
                            alt: 'Uśmiechnięty mężczyzna patrzy w stronę aparatu',
                            specialization: 'Neurolog',
                            name: 'Mgr Paweł Zając',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, commodi earum mollitia numquam quibusdam!'
                        }
                    ]
                }
            ]
        }
        this.useFiller(data, 'specialists');
    }
}

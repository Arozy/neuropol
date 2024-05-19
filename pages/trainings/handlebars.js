Handlebars.registerHelper('json', function (context) {
    return JSON.stringify(context);
});

onchange = () => {
    _saveData();
}

function getShared(selection) {
    const data = {
        tel: '+48 600 02 99 07',
        address: 'Ul. Fordońska 81, 85-647 Bydgoszcz',
        email: 'rejestracja@neuropol.pl',
        hours: [
            {
                period: 'Poniedziałek - Piątek',
                time: '8.00 - 20.00'
            },
            {
                period: 'Sobota - niedziela',
                time: 'nieczynne'
            },
            {
                period: 'Dni świąteczne',
                time: 'nieczynne'
            }
        ],
        siteLinks: [
            {href: "", name: "Strona główna"},
            {href: "about", name: "O nas"},
            {href: "staff", name: "Nasi specjaliści"},
            {href: "services", name: "usługi"},
            {href: "contact", name: "kontakt"},
            {href: "trainings", name: "szkolenia"}
        ]
    }
    const map = new Map();
    map.set('tel', data.tel)
        .set('address', data.address)
        .set('email', data.email)
        .set('hours', data.hours)
        .set('siteLinks', data.siteLinks);

    return map.get(selection) || null;
}

function runFillers() {
    const homepage = new Page();
    homepage.fillHeaderTemplate();
    homepage.fillTrainingsTemplate();
    homepage.fillFormTemplate();
    homepage.fillFooterTemplate();
}

class Page {

    useFiller(data, uniqueName) {
        const template = `${uniqueName}-template`;
        const output = `${uniqueName}-output`;
        const compileTemplate = Handlebars.compile(
            document.querySelector(`#${template}`).innerHTML
        );
        document.querySelector(`#${output}`).innerHTML = compileTemplate(data);
    }

    fillHeaderTemplate() {
        /**
         * @param {[{name: string, href: string}]} additional_links
         */
        const data = {
            additional_links: [],
            phone_number: getShared('tel'),
            mail_address: getShared('email'),
            link_list: [
                {href: ".././home", name: "Strona główna", sublink: {}},
                {href: ".././about", name: "O nas"},
                {href: ".././staff", name: "Nasi specjaliści"},
                {href: ".././services", name: "usługi"},
                {href: ".././contact", name: "kontakt"},
                {href: ".././trainings", name: "szkolenia", class: "active"}
            ],
        };
        this.useFiller(data, "header");
    }

    fillTrainingsTemplate() {
        const data = {
            heading: 'Oferujemy wiele szkoleń z zakresu Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: 'W Neuropol nie tylko leczymy, ale też edukujemy o zdrowiu. ' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Distinctiodoloribus enim explicabo fuga ipsa numquam pariatur perspiciatisrepudiandae temporibus veniam.',
            sections: [
                {
                    name: 'pierwsza-pomoc',
                    heading: 'Szkolenia z pierwszej pomocy',
                    columns: [
                        {
                            type: 'podstawowy',
                            title: 'Pakiet Podstawowy',
                            price: 90,
                            items: [
                                'RKO u dorosłych i dzieci',
                                'wezwanie pomocy',
                                'ułożenie w pozycji bocznej bezpiecznej'
                            ],
                            out: [
                                'pierwsza pomoc w przypadku omdleń',
                                'pierwsza pomoc w przypadku udarów',
                                'pierwsza pomoc w przypadku poparzeń',
                                'pierwsza pomoc w zadławieniach',
                                'opatrywanie po złamaniu',
                                'opatrywanie po pogryzieniu',
                                'opatrywanie po postrzale',
                                'tamowanie krwotoków',
                                'urazy kostno-stawowe',
                                'możliwość rozbudowania pakietu'
                            ]
                        },
                        {
                            type: 'standard',
                            title: 'Pakiet Standard',
                            price: 100,
                            items: [
                                'RKO u dorosłych i dzieci',
                                'wezwanie pomocy',
                                'ułożenie w pozycji bocznej bezpiecznej',
                                'pierwsza pomoc w przypadku omdleń',
                                'pierwsza pomoc w przypadku udarów',
                                'pierwsza pomoc w przypadku poparzeń',
                            ],
                            out: [
                                'pierwsza pomoc w zadławieniach',
                                'opatrywanie po złamaniu',
                                'opatrywanie po pogryzieniu',
                                'opatrywanie po postrzale',
                                'tamowanie krwotoków',
                                'urazy kostno-stawowe',
                                'możliwość rozbudowania pakietu'
                            ]
                        },
                        {
                            type: 'premium',
                            title: 'Pakiet Premium',
                            price: 120,
                            items: [
                                'RKO u dorosłych i dzieci',
                                'wezwanie pomocy',
                                'ułożenie w pozycji bocznej bezpiecznej',
                                'pierwsza pomoc w przypadku omdleń',
                                'pierwsza pomoc w przypadku udarów',
                                'pierwsza pomoc w przypadku poparzeń',
                                'pierwsza pomoc w zadławieniach',
                                'opatrywanie po złamaniu',
                                'opatrywanie po pogryzieniu',
                                'opatrywanie po postrzale',
                                'tamowanie krwotoków',
                                'urazy kostno-stawowe',
                                'możliwość rozbudowania pakietu'
                            ]
                        }
                    ],
                    additionalInformation: [
                        'Cena może się różnić w zależności od ilości uczestników. Powyżej 50 osób doliczamy rabat 5%, powyżej 100, 10%',
                        'Kurs kończy się wydaniem certyfikatów uczestnikom'
                    ]
                }
            ]

        }
        this.useFiller(data, 'training');
    }

    fillFormTemplate() {
        const data = {
            heading: 'Uzyskaj ofertę dla swojej firmy',
        }
        this.useFiller(data, 'purchase');
        readData();
    }

    fillFooterTemplate() {
        const data = {
            columns: [
                {
                    heading: 'Śledź nas',
                    description: 'Odwiedź nasze social media i zobacz jak działamy od kuchni oraz co jeszcze robimy by wspierać naszych pacjentów',
                    socialLinks: [
                        {
                            icon: 'icofont-facebook',
                            href: 'fb.com/neuropol',
                            title: 'Odwiedź naszego facebooka'
                        },
                        {
                            icon: 'icofont-instagram',
                            href: 'insta.com/neuropol',
                            title: 'Rzuć okiem na nasze insta'
                        }
                    ]
                },
                {
                    heading: 'Quick links',
                    linkColumns: [
                        {
                            linkList: getShared('siteLinks')
                        },
                        {
                            linkList: [
                                {href: 'privacy-policy', name: 'polityka prywatności'},
                                {href: 'faq', name: 'FAQ'},
                                {href: "", name: "Inne linki"},
                            ]
                        }
                    ],
                },
                {
                    heading: 'Godziny otwarcia',
                    description: 'jesteśmy do Twojej dyspozycji w każdy dzień pracujący',
                    timeList: getShared('hours')
                }
            ]
        }
        this.useFiller(data, 'footer');
    }
}

async function readData() {
    await new Promise((resolve) => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            document.addEventListener('DOMContentLoaded', resolve);
        }
    });

    const formData = JSON.parse(localStorage.getItem('purchase_form_data'));
    const form = document.getElementById('purchase-form');
    if (formData) {
        Object.entries(formData).forEach(([key, input]) => {
            const element = form.elements.namedItem(key)
            if (element) {
                element.value = input.value;
            }
        })
    }
}

function resetStorage() {
    const amountSelectors = document.querySelectorAll('[data-amount-selection]')
    amountSelectors.forEach(selector => {
        selector.value = 1;
    })
    localStorage.clear();
}

function handlePacketSelection(packet, training, disableButtonClickAnnouncer) {
    const amountInput = document.querySelector(`#amount_${packet}_${training}`);
    const selectionInput = document.querySelector('[data-selection-input]');
    const selectionButton = document.querySelector(`[data-selection-button="${packet} | ${training}"]`)
    if (!disableButtonClickAnnouncer) _announceButtonClick(selectionButton);
    let currentlySelectedPackets = JSON.parse(localStorage.getItem('selectedPackets')) || [];
    if (!currentlySelectedPackets.includes({packet, training, amount: Number(amountInput.value)})) {
        currentlySelectedPackets.push(
            {
                packet: packet,
                training: training,
                amount: Number(amountInput.value)
            }
        )
    } else {
        const toBeUpdatedElement = currentlySelectedPackets.find(element => element.packet === packet && element.training === training);
        toBeUpdatedElement.amount = amountInput.value;
    }

    currentlySelectedPackets = Object.values(currentlySelectedPackets.reduce((elem, {packet, training, amount}) => {
        const key = `${packet} | ${training}`;
        if (!elem[key]) {
            elem[key] = {packet, training, amount: 0};
        }
        elem[key].amount = Number(amount);
        return elem;
    }, {}));

    localStorage.setItem('selectedPackets', JSON.stringify(currentlySelectedPackets));
    selectionInput.value = '';

    JSON.parse(localStorage.getItem('selectedPackets')).forEach(element => {
        if (element.amount === 0) return;
        const elementChips = `${element.packet} | ${element.training} (${element.amount}), `;
        selectionInput.value += elementChips;
    })

    _saveData();
}

function clearCurrentSelector(packet, training) {
    const selector = document.querySelector(`#amount_${packet}_${training}`);
    selector.value = 0;
    handlePacketSelection(packet, training, true)
    selector.value = 1;
}

function submitForm() {
    event.preventDefault();
    const form = document.querySelector('#purchase-form');
    const confirmationBox = document.querySelector('[data-purchase-confirmation]');
    const sendingBox = document.querySelector('[data-purchase-sending]');
    const errorBox = document.querySelector('[data-purchase-error]');
    const params = {
        email: form.elements.email.value,
        from_name: `${form.elements.name.value} ${form.elements.surname.value}`,
        message: form.elements.message.value || 'Brak wiadomości od klienta.',
        company: form.elements.company.value,
        summary: form.elements.packets.value,
    };
    sendingBox.classList.remove('d-none');
    sendingBox.classList.add('d-flex');
    emailjs.send("service_msro0uq", "template_wqr1dxn", params).then(() => {
        sendingBox.classList.remove('d-flex');
        sendingBox.classList.add('d-none');
        confirmationBox.classList.remove('d-none');
        confirmationBox.classList.add('d-flex');
        setTimeout(() => {
            confirmationBox.classList.add('d-none');
            confirmationBox.classList.remove('d-flex');
        }, 10000)
        form.reset();
    }).catch(() => {
        sendingBox.classList.remove('d-flex');
        sendingBox.classList.add('d-none');
        errorBox.classList.remove('d-none');
        errorBox.classList.add('d-flex');
        setTimeout(() => {
            errorBox.classList.add('d-none')
            errorBox.classList.remove('d-flex');
        }, 10000);
    })
}

function _announceButtonClick(selectionButton) {
    selectionButton.innerHTML = 'Wybrano!';
    setTimeout(() => {
        selectionButton.innerHTML = 'Wybieram'
    }, 2000)
}

function _saveData() {
    const form = document.getElementById('purchase-form');
    let elements = [...form.elements];
    let savedData = [];

    elements.forEach(element => {
        savedData.push({
            name: element.name,
            value: element.value
        })
    })

    savedData = elements.reduce((elem, {name, value}) => {
        if (!elem[name]) {
            elem[name] = {name, value};
        }
        elem[name].value = value;
        return elem;
    }, {})

    localStorage.removeItem('purchase_form_data');
    localStorage.setItem('purchase_form_data', JSON.stringify(savedData));
}
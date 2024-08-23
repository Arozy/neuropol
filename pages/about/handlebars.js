function runFillers() {
    const about = new About('about');
    about.fillHeaderTemplate();
    about.fillServicesTemplate()
    about.fillFooterTemplate();
}

class About extends Page {
    fillServicesTemplate() {
        const data = {
            title: 'Oferujemy wiele usług medycznych z zakresu fizjoterapii i terapii zajęciowej.',
            subtitle: 'Każdego dnia wspieramy naszych pacjentów, dając im dostęp do rehabilitantów, fizjoterapeutów i terapeutów zajęciowych, zobacz jak wiele możemy dla Ciebie zrobić.',
            services: [
                {
                    title: 'Fizjoterapia neurologiczna',
                    description: 'Rehabilitujemy osoby chorujące neurologicznie na choroby takie jak: miastenia gravis, stwardnienie rozsiane, SLA, SMA, miopatie.',
                },
                {
                    title: 'Leczenie wad postawy',
                    description: 'Zarówno dzieci jak i dorośli mogą mieć problem z postawą im szybciej wykryte tym łatwiej o korektę, dlatego nie zwlekaj umów się już dziś.'
                },
                {
                    title: 'Leczenie kontuzji',
                    description: 'Ćwiczenia na sali, ze sprzętem, taping, kompleksowa oferta dla szybkiego powrotu do zdrowia i sprawności fizycznej.'
                },
                {
                    title: 'Terapia indywidualna',
                    description: 'Indywidualne podejście do każdego pacjenta to klucz do skutecznej terapii i osiągnięcia optymalnych rezultatów zdrowotnych.'
                },
                {
                    title: 'Terapia zajęciowa grupowa',
                    description: 'W grupie siła. Przyjdź z rodziną, znajomymi lub umów się na sesję grupową, aby poczuć wsparcie płynące od ludzi z bliskiego Ci otoczenia.'
                },
                {
                    title: 'Masaże',
                    description: 'Oferujemy różnorodne techniki masażu, dostosowane do indywidualnych potrzeb. Szeroka gama usług dzięki, którym poczujesz się lepiej. Zarezerwuj dla siebie lub kup voucher na masaż dla bliskiej osoby.'
                },
            ]
        }
        this.useFiller(data, 'services');
    }
}

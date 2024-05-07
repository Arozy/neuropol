const getShared = (selection) => {
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

module.exports = getShared
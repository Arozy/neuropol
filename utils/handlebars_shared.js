function getShared(selection) {
    const data = {
        tel: '+48 600 02 99 07',
        address: 'Ul. Fordońska 81, 85-647 Bydgoszcz',
        email: 'rejestracja@neuropol.pl',
        facebook: 'https://fb.com/neuropol',
        instagram: 'https://ig.me/neuropol',
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
            {href: ".././home", name: "Strona główna", id: 'home', sublink: {}},
            {href: ".././about", name: "O nas", id: 'about'},
            {href: ".././staff", name: "Nasi specjaliści", id: 'staff'},
            {href: ".././services", name: "usługi", id: 'services'},
            {href: ".././contact", name: "kontakt", id: 'contact'},
            {href: ".././trainings", name: "szkolenia", id: 'trainings'}
        ],
    }
    const map = new Map();
    map.set('tel', data.tel)
        .set('address', data.address)
        .set('email', data.email)
        .set('facebook', data.facebook)
        .set('instagram', data.instagram)
        .set('hours', data.hours)
        .set('siteLinks', data.siteLinks);

    return map.get(selection) || null;
}
const apiURL = 'https://amazing-fitness-8cfda28910.strapiapp.com/api/'
const apiReadToken = '6062991c7c24e19b40659d91b3483bbe9fc08c5263afc9807af44632bb8f3f49723dec5b859bd3573a97c72e4b0857a60119b865e5ffb071a37f26974b3ce02de23c477878786b4e5f009b98120ebeaf48a8110147565529329beb6545d44899a42e6ca647aa6251c977585f49ab05764e57409fd76d2603b470bec0f3baace7'

async function fetchShared(entity) {
    return await fetch(`${apiURL}/${entity}`, {
        method: 'GET',
        headers: {authorization: `Bearer ${apiReadToken}`},
        mode: 'cors',
    })
}

function getShared(selection) {
    const sharedData = JSON.parse(fetchShared())

    const data = {
        tel: '52 516 16 25',
        address: 'ul. Fordońska 81, 85-647 Bydgoszcz',
        email: 'rejestracja@neuropol.pl',
        facebook: 'https://www.facebook.com/profile.php?id=61559819287359',
        instagram: 'https://www.instagram.com/neuropol_bydgoszcz/',
        hours: [
            {
                period: 'Poniedziałek - Piątek',
                time: '8.30 - 17.00'
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
            {href: ".././services", name: "Usługi", id: 'services'},
            {href: ".././contact", name: "Kontakt", id: 'contact'},
            {href: ".././trainings", name: "Szkolenia", id: 'trainings'}
        ],
        otherLinks: [
            {href: 'privacy-policy', name: 'Polityka prywatności'},
            {href: 'faq', name: 'FAQ'},
            {href: "", name: "Inne linki"},
        ]
    }
    const map = new Map();
    map.set('tel', data.tel)
        .set('address', data.address)
        .set('email', data.email)
        .set('facebook', data.facebook)
        .set('instagram', data.instagram)
        .set('hours', data.hours)
        .set('siteLinks', data.siteLinks)
        .set('otherLinks', data.otherLinks)

    return map.get(selection) || null;
}
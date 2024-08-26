class Shared {
    dataLoaded = false;
    response = {};
    _apiUrl = 'https://amazing-fitness-8cfda28910.strapiapp.com/api';
    _apiReadToken = '6062991c7c24e19b40659d91b3483bbe9fc08c5263afc9807af44632bb8f3f49723dec5b859bd3573a97c72e4b0857a60119b865e5ffb071a37f26974b3ce02de23c477878786b4e5f009b98120ebeaf48a8110147565529329beb6545d44899a42e6ca647aa6251c977585f49ab05764e57409fd76d2603b470bec0f3baace7';

    async fetchShared(query, prepopulate = true) {
        return await fetch(`${this._apiUrl}/${query}${prepopulate ? '?[prepopulate]=*' : ''}`, {
            method: 'GET',
            headers: {authorization: `Bearer ${this._apiReadToken}`},
        });
    }

    fetchAndLoad() {
        this.fetchShared('shared-datum').then((response) => {
            return response.json();
        }).then(body => {
            console.log(body);
            this.response = {...body.data.attributes};
            this.dataLoaded = true;
        });
    }

    getShared(selection) {
        const data = {
            tel: this.response?.tel,
            address: this.response?.address,
            facebook: this.response?.facebook,
            instagram: this.response?.instagram,
            email: this.response?.email,
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
}
const shared = new Shared()

document.addEventListener('DOMContentLoaded', () => {
    shared.fetchAndLoad();
})

// getting shared and creating map
function getShared(selection) {
    if (shared.dataLoaded) {
        return shared.getShared(selection);
    }
}
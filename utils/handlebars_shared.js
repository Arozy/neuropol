class Shared {
    dataLoaded = false;
    response = {};
    _apiUrl = 'https://amazing-fitness-8cfda28910.strapiapp.com/api';
    _apiReadToken = '6062991c7c24e19b40659d91b3483bbe9fc08c5263afc9807af44632bb8f3f49723dec5b859bd3573a97c72e4b0857a60119b865e5ffb071a37f26974b3ce02de23c477878786b4e5f009b98120ebeaf48a8110147565529329beb6545d44899a42e6ca647aa6251c977585f49ab05764e57409fd76d2603b470bec0f3baace7';

    async fetchShared(query, populate = true) {
        return await fetch(`${this._apiUrl}/${query}${populate ? `?[populate]=*` : ''}`, {
            method: 'GET',
            headers: {authorization: `Bearer ${this._apiReadToken}`},
        });
    }

    async fetchAndLoad() {
        return this.fetchShared('shared-datum').then((response) => {
            return response.json();
        }).then(body => {
            this.response = {...body.data.attributes};
            console.log(this.response);
        })
    }

    async getShared(selection) {
        return this.fetchAndLoad().then(() => {
            return new Promise((resolve) => {
                const data = {
                    ...this.response,
                }

                console.log('data in getShared', data);

                const map = new Map();

                map.set('tel', data.tel)
                    .set('address', data.address)
                    .set('email', data.email)
                    .set('facebook', data.facebook)
                    .set('instagram', data.instagram)
                    .set('hours', data.hours)
                    .set('siteLinks', data.site_links)
                    .set('otherLinks', data.other_links)

                resolve(map.get(selection) || null)
            })
        })
    }
}

const shared = new Shared()

// getting shared and creating map
const getShared = (selection) => shared.getShared(selection)
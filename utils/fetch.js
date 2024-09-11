class Fetch {
    response = {};
    _apiUrl = 'https://amazing-fitness-8cfda28910.strapiapp.com/api';
    _apiReadToken = '6062991c7c24e19b40659d91b3483bbe9fc08c5263afc9807af44632bb8f3f49723dec5b859bd3573a97c72e4b0857a60119b865e5ffb071a37f26974b3ce02de23c477878786b4e5f009b98120ebeaf48a8110147565529329beb6545d44899a42e6ca647aa6251c977585f49ab05764e57409fd76d2603b470bec0f3baace7';
    _query;
    _params;

    constructor (query, params = null) {
        this._query = query;
        this._params = params;
    }

    async fetchData() {
        return await fetch(`${this._apiUrl}/${this._query}${this._params ? this._params : ''}`, {
            method: 'GET',
            headers: {authorization: `Bearer ${this._apiReadToken}`},
        });
    }

    async fetchAndLoad() {
        if (sessionStorage.getItem(this._query)) {
            return new Promise((resolve) => {
                const cachedData = JSON.parse(sessionStorage.getItem(this._query));

                this.response = {...cachedData};
                resolve(cachedData);
            })
        } else {
            return this.fetchData().then((response) => {
                return response.json();
            }).then(body => {
                this.response = {...body.data.attributes};
            }).then(() => {
                sessionStorage.setItem(this._query, JSON.stringify(this.response));
                return this.response
            });
        }
    }

    async getExact(name, key = '__component') {
        if (await this.fetchAndLoad()) {
            return new Promise((resolve) => {
                resolve(this.response.content.filter(obj => obj[key] === name))
            })
        }
    }
}
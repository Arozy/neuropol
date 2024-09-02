class Shared extends Fetch {
    constructor() {
        super('shared-datum', '?populate=*')
    }

    fetchSharedAndCache() {
        const isSharedItemExisting = !!sessionStorage.getItem('shared');

        if (isSharedItemExisting) {
            return new Promise((resolve) => {
                resolve(sessionStorage.getItem('shared'));
            });
        } else {
            return this.fetchAndLoad().then(data => {
                sessionStorage.setItem('shared', JSON.stringify(data));
            });
        }
    }

    async getShared(selection) {
        if (await this.fetchAndLoad()) {
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
                    .set('otherLinks', data.other_links);

                resolve(map.get(selection) || null);
            });
        }
    }
}

const shared = new Shared();

// getting shared and creating map
const getShared = (selection) => shared.getShared(selection)
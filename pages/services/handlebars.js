function runFillers() {
    const services = new Services('services');
    services.fillHeaderTemplate();
    services.fillPricingTemplate();
    services.fillFooterTemplate();
}

class Services extends Page {
    fillPricingTemplate() {
        const data = {
            heading: 'Skorzystaj z naszych usług',
            description: 'Dajemy Ci dostęp do wykwalifikowanej kadry medycznej, w rozsądnej cenie!', 
            class: 'col-12 col-lg-8 offset-lg-2',
            columns: [
                {
                    icon: 'fa fa-tag',
                    title: 'Usługi Prywatne',
                    items: [
                        {
                            name: 'Konsultacja Fizjoterapeutyczna',
                            value: '180zł'
                        },
                        {
                            name: 'Konsultacja Neurologopedyczna',
                            value: '180zł'
                        },
                        {
                            name: 'Terapia zajęciowa',
                            value: '180zł'
                        }
                    ]
                }
            ]
        };
        this.useFiller(data, 'pricing');
    }
}

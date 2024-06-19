function runFillers() {
    const services = new Services('services');
    services.fillHeaderTemplate();
    services.fillPricingTemplate();
    services.fillFooterTemplate();
}

class Services extends Page {
    fillPricingTemplate() {
        const data = {
            heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure provident quae quam quo tempore ullam.',
            class: 'col-12 col-lg-8 offset-lg-2',
            columns: [
                //             {
                //                 icon: 'icofont icofont-price',
                //                 title: 'Usługi NFZ',
                //                 items: [
                //                     {
                //                         name: 'Testowe',
                //                     },
                //                     {
                //                         name: 'Testowe',
                //                     },
                //                     {
                //                         name: 'Testowe',
                //                     }
                //                 ]
                //             },
                {
                    icon: 'fa fa-tag',
                    title: 'Usługi Prywatne',
                    items: [
                        {
                            name: 'Testowe',
                            value: '100zł'
                        },
                        {
                            name: 'Testowe',
                            value: '200zł'
                        },
                        {
                            name: 'Testowe',
                            value: '130zł'
                        }
                    ]
                }
            ]
        };
        this.useFiller(data, 'pricing');
    }
}

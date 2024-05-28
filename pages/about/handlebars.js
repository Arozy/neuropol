function runFillers() {
    const about = new About('about');
    about.fillHeaderTemplate();
    about.fillServicesTemplate()
    about.fillFooterTemplate();
}

class About extends Page {
    fillServicesTemplate() {
        const data = {
            title: 'Oferujemy wiele usług medycznych z zakresu neurologii i rehabilitacji',
            subtitle: 'Każdego dnia wspieramy naszych pacjentów, dając im dostęp do lekarzy neurologów, rehabilitantów czy fizjoterapeutów, zobacz jak wiele możemy dla Ciebie zrobić',
            services: [
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje',
                    image: false,
                    video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
                    modal_description: 'Miastenia Gravis'
                },
                {
                    title: 'Miastenia Gravis 2',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
                {
                    title: 'Miastenia Gravis',
                    description: 'Analizujemy każdy przypadek osobno, pomagamy stanąć na nogi i przywracamy naszym pacjentom siłę, której tak bardzo im brakuje'
                },
            ]
        }
        this.useFiller(data, 'services');
    }
}

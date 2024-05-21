function runFillers() {
    const services = new Services('services');
    services.fillHeaderTemplate();
    services.fillFooterTemplate();
}

class Services extends Page {
}

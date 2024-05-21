function runFillers() {
    const notFound = new NotFound('not found');
    notFound.fillHeaderTemplate();
    notFound.fillFooterTemplate();
}

class NotFound extends Page {
}

 function runFillers() {
    const notFound = new NotFound('404');
    notFound.fillHeaderTemplate();
    notFound.fillFooterTemplate();
}

class NotFound extends Page {
}

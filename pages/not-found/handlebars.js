 function runFillers() {
    const notFound = new NotFound('404');
    notFound.build().finally();
}

class NotFound {
    async build() {
        document.querySelector('.preloader').classList.add('preloader-deactivate');
    }
}

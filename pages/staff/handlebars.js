function runFillers() {
    const staff = new Staff('staff');
    staff.fillHeaderTemplate();
    staff.fillFooterTemplate();
}

class Staff extends Page {
}

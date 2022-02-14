class WhatsAppController {
    constructor() {
        console.log('WhatsappCOntroller OK');
        this.loadElements();
    }

    loadElements() {
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {
            this.el[Format.getCamelCase(element.id)] = element;
        });

        console.log(this.el);
    }
}
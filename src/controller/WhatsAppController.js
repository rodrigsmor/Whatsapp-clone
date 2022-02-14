class WhatsAppController {
    constructor() {
        console.log('WhatsappCOntroller OK');
        this.elementsPrototype();
        this.loadElements();
    }

    loadElements() {
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {
            this.el[Format.getCamelCase(element.id)] = element;
        });
    }

    elementsPrototype() {
        Element.prototype.hide = function() {
            this.style.display = 'none';
            return this;
        };

        Element.prototype.show = function() {
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function() {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        Element.prototype.on = function(events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
            });
            return this;
        }

        Elements.prototype.css = function(styles) {
            for(let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }

        Elements.prototype.addClass = function(name) {
            this.classList.add(name);
            return this;
        }

        Elements.prototype.removeClass = function(name) {
            this.classList.remove(name);
            return this;
        }

        Elements.prototype.toggleClass = function(name) {
            this.classList.toggle(name);
            return this;
        }

        Elements.prototype.hasClass = function(name) {
            return this.classList.includes(name);
        }
    }
}
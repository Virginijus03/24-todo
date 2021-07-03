class Todo {
    constructor(IDselector) {
        this.IDselector = IDselector;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.DOM = document.getElementById(this.IDselector);
        if (!this.DOM) {
            console.error('ERROR: nerasta vieta, pagal duota selector');
            return false;
        }
        this.DOM.classList.add('todo');

        this.render();
    }

    isValidSelector() {
        if (typeof this.IDselector !== 'string' ||
            this.IDselector === '') {
            console.error('ERROR: nevalidus selector');
            return false;
        }
        return true;
    }

    generateAddForm() {
        return `<form>
                    <label for="new_text">Message</label>
                    <input id="new_text" type="text">
                    <label for="new_border_color">Border color</label>
                    <input id="new_border_color" type="color">
                    <button type="submit">Save</button>
                    <button type="reset">Reset</button>
                </form>`;
    }

    generateUpdateForm() {
        return `<form class="hide">
                    <label for="updated_text">Message</label>
                    <input id="updated_text" type="text">
                    <label for="updated_border_color">Border color</label>
                    <input id="updated_border_color" type="color">
                    <button type="submit">Update</button>
                    <button type="button">Cancel</button>
                </form>`;
    }

    generateList() {
        return `<div class="list"></div>`;
    }

    generateTask() {
        return `<div class="task">
                    <div class="text">Pazadinti barsuka</div>
                    <div class="actions">
                        <div class="btn edit">Edit</div>
                        <div class="btn delete">Delete</div>
                    </div>
                </div>`;
    }

    render() {
        let HTML = '';
        HTML += this.generateAddForm();
        HTML += this.generateUpdateForm();
        HTML += this.generateList();
        this.DOM.innerHTML = HTML;
    }
}

export { Todo }

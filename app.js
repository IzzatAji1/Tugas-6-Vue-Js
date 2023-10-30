new Vue({
    el: '#app',
    data: {
        display: '',
    },
    methods: {
        appendToDisplay(value) {
            this.display += value;
        },
        clearDisplay() {
            this.display = '';
        },
        calculateResult() {
            try {
                this.display = eval(this.display);
            } catch (error) {
                this.display = 'Error';
            }
        },
    },
});


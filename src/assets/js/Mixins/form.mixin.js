export default {
    data() {
        return {
            input_email: ''
        }
    },

    methods: {
        getEmail: function () {
            window.alert('Email: ' + this.input_email)
        }
    }
}

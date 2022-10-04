
export default {

    name: "Register",
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",

            },
            isShowed: false
        }
    },
    methods: {
        register() {
            this.isShowed = true;
            console.log(this.user)
        }
    }
}
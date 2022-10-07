import { mapActions } from 'vuex'
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
        ...mapActions(['updateProfile']),
        register() {
            this.isShowed = true;
            this.updateProfile(this.user.name)
            console.log(this.user)
        }
    }
}
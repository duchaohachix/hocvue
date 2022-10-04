export default {
    name: "MyTeam",
    data() {
        return {
            myTeams: [{
                ID: 1,
                name: "Haro",
                age: 22,
                position: "dev Web",

            },
            {
                ID: 2,
                name: "Haro2",
                age: 23,
                position: "dev Mobile",

            }],
            number: 1,
            isValidated: false,
        }
    },
    watch: {
        number(newValue, oldValue) {
            this.isValidated = typeof newValue != "string" ? true : false;
            console.log("new value: " + newValue + " - old value: ", oldValue);
        }
    },
    methods: {
        randomNumber: function () {
            this.number = Math.floor(Math.random() * 10);
        }
    },
    computed: {
        maxOfRandom() {
            let timesF = Math.floor(Math.random() * 10)
            let timesS = Math.floor(Math.random() * 10)
            let timesT = Math.floor(Math.random() * 10)
            return Math.max(timesF, timesS, timesT);
        }
    }

}
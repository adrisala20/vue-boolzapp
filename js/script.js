import { contacts } from "./data.js";
const{createApp}= Vue;
createApp = ({
    data(){
        return{
            contacts,
        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){
        console.log(this.contacts)
    }

}).mounted('#app')
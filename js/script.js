import { contacts } from "./data.js";

//const dt = luxon.DateTime;

const{createApp}= Vue;
createApp ({
    data(){
        return{
            contacts,
            activeContactId: 1,
            messageText:'',
        }
    },
    methods:{
       clickActiveContact(id){
        this.activeContactId = id;
       },
       createMessage(){
        const newMessage = {
            date: '',
            message: messageText,
            status:'',
        }
       },
       sendMessage(){
        
       }
       
    },
    computed:{
        activeContact(){
            return this.contacts.find((el)=> el.id ===this.activeContactId)
        }, 
    },
    mounted(){
        console.log(this.contacts)
    }

}).mount('#app')


import { contacts } from "./data.js";

const dt = luxon.DateTime;

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
       createMessage(message){
        const newMessage = {
            date: dt.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
            message: messageText,
            status:'send'
        }
        return newMessage;
       }, 
       sendMessage(){
        let newMessage = this.createMessage(this.messageText);
        this.activeContact.message.push(newMessage)
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


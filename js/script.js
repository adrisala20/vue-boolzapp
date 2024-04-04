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
       createMessage(message, status){
        const newMessage = {
            date: dt.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
            message: message,
            status:status
        }
        return newMessage;
       }, 
       sendMessage(){
        let newMessage = this.createMessage(this.messageText,'sent');
        this.activeContact.messages.push(newMessage);
        this.messageText='';

        setTimeout(()=>{
            let newMessage = this.createMessage('ok','received')
            this.activeContact.messages.push(newMessage)
        },1000)

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


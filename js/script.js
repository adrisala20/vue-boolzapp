import { contacts } from "./data.js";

const dt = luxon.DateTime;

const{createApp}= Vue;
createApp ({
    data(){
        return{
            contacts,
            activeContactId: 1,
            messageText:'',
            searchText:'',
            removeMessage: -1,
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

       },
       dropdown(index){
        if(this.removeMessage != index){
            this.removeMessage = index;
        }else{
            this.removeMessage = -1;
        }
       }
       },
    computed:{
        activeContact(){
            return this.contacts.find((el)=> el.id ===this.activeContactId)
        },
        searchContact(){
            return this.contacts.filter((el)=> el.name.toLowerCase().includes(this.searchText.toLowerCase()) )
        }
    },
    mounted(){
        console.log(this.contacts)
    }

}).mount('#app')


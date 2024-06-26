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
        this.removeMessage = -1
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
        if(this.messageText.trim()!== ''){

        let newMessage = this.createMessage(this.messageText,'sent');
        this.activeContact.messages.push(newMessage);
        this.messageText='';
        
        setTimeout(()=>{
            let newMessage = this.createMessage('ok','received')
            this.activeContact.messages.push(newMessage)
        },1000)
         }
       },
       openDropdown(index){
        if(this.removeMessage != index){
            this.removeMessage = index;
        }else{
            this.removeMessage = -1;
        }
       },
       closeDropdown(event) {
        // Verifica se l'elemento cliccato è al di fuori della tendina
        if (!this.$refs.dropdown.contains(event.target)) {
          this.removeMessage = null;
        }
      },
        deleteMessage(message,index){
        this.activeContact.messages.splice(index,1);
        },
       lastMessage(id){
         const index = this.contacts.findIndex((el)=> el.id === id);
         const lastMessage = this.contacts[index].messages.length - 1;
         return this.contacts[index].messages[lastMessage].message;
       },
       lastTime(id){
        const index = this.contacts.findIndex((el)=> el.id === id);
        const lastDate = this.contacts[index].messages.length - 1;
        return this.contacts[index].messages[lastDate].date.slice(10,16);
       }
       
    },
    computed:{
        activeContact(){
            return this.contacts.find((el)=> el.id ===this.activeContactId)
        },
        searchContact(){
            return this.contacts.filter((el)=> el.name.toLowerCase().includes(this.searchText.toLowerCase()) )
        },
        lastAccess(){
            return this.activeContact.messages[this.activeContact.messages.length - 1].date;
        }
    },
    mounted(){
        console.log(this.contacts)
    }

}).mount('#app')


import { LightningElement } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    addr1;
    addr2;
    addrLand;
    addrZip;
    sameAddress=false;
    handleAddr(event){
        /*this.sameAddress=this.template.querySelector("lightning-input[name=chkbox]");
        if(sameAddress==true){
            if(event.target.name == 'permline1'){
                this.addr1=event.target.value;
            }
            else if (event.target.name == 'permline2') {
                this.addr2 = event.target.value;
            } 
            else if (event.target.name == 'permLandmark') {
                this.addrLand = event.target.value;
            } 
            else if (event.target.name == 'permZip') {
                this.addrZip = event.target.value;
            } 
        }*/
    }
    copyAddress(event){
        if(event.target.checked==true){
            var inp = this.template.querySelectorAll("lightning-input");
            inp.forEach(function(item){
                if(item.name == "permline1"){
                    this.addr1=item.value;
                }
                else if (item.name == "permline2") {
                    this.addr2 = item.value;
                } 
                else if (item.name == "permLandmark") {
                    this.addrLand = item.value;
                } 
                else if (item.name == "permZip") {
                    this.addrZip = item.value;
                }    
            },this);            
        }
        if(event.target.checked==false){
            this.addr1=null;
            this.addr2 = null;
            this.addrLand = null;
            this.addrZip = null;
        }
        
    }
}
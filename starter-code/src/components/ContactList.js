import React from 'react';
import  contacts from '../../src/contacts';
import shortid from 'shortid'
import Card from './Card';

contacts.forEach( (contact) => { contact.id = shortid.generate()});


// function ContactList  (contact)  {
//     console.log('CONTACT', contact);

class ContactList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            contacts: this.props.contactsArr.slice(0, 5),
            radomContact: false,
            sortByName: false,
            sortByPop: false
        }
    }

    toggleRandomContact = () => {
        const newState = !this.state.radomContact;

        const randomItem = contacts[Math.floor(Math.random()*contacts.length)];
        // console.log('RANDOM ', {randomItem});

        const newArray = [...this.state.contacts];
        newArray.push(randomItem);

        this.setState({radomContact: newState, contacts: newArray})
    }
    

    sortByName = () => {
        const newState = !this.state.sortByName;

        const newArray = [...this.state.contacts];

        function compare (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name ) {
                return 1;
            }
            return 0;
        }

        newArray.sort(compare);
        // console.log('sortetByName', newArray);

        this.setState({sortByName: newState, contacts: newArray})
    }


    sortByPop = () => {
        const newState = !this.state.sortByPop;

        const newArray = [...this.state.contacts];

        function compare (a, b) {
            if (a.popularity < b.popularity ) {
                return -1;
            }
            if ( a.popularity > b.popularity ) {
                return 1;
            }
            return 0;
        }

        newArray.sort(compare);

        this.setState({sortByPop: newState, contacts: newArray})
    }


    deleteContact = (contactIndex) => {
        const newArray = [...this.state.contacts];

        newArray.splice(contactIndex, 1);

        this.setState({contacts: newArray})
    }
    
    
    render(){
        return(
            
            <div>
                    <button onClick={this.toggleRandomContact} >Add Random Contact </button>

                    <button onClick={this.sortByName}>Sort Contats By Name</button>

                    <button onClick={this.sortByPop}>Sort Contact by rating</button>

                {
                this.state.contacts.map((contactsObj, index) => {
                        {/* console.log('contactsObj' , contactsObj) */}
                        return (
                                
                                <Card 
                                    key={contactsObj.id} 
                                    contact =  {contactsObj}
                                    clickToDelete={() => this.deleteContact(index)}/>
                        )
                    })
                }
            
            </div>
        )
    }
}



export default ContactList;
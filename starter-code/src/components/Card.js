import React from 'react';


const Card = (props) => {
    const {contact} = props;
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img 
                                src={contact.pictureUrl} 
                                alt={contact.name} 
                                width="auto" 
                                height="250">
                            </img>
                        </td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                        <td><button onClick={props.clickToDelete}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



export default Card;
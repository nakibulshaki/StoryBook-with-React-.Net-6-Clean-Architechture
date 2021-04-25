import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
interface Props{
    activity:Activity;
    cencelSelectActivity:()=>void;  
    openFrom:(id:string)=>void;

}
 export default function({activity ,cencelSelectActivity,openFrom}:Props){
    return(
        <Card fluid>
    <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span>{activity.date}</span>
      </Card.Meta>
      <Card.Description>
{activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <Button.Group widths='2'>
         <Button basic color='blue'  content='Edit' onClick={()=>openFrom(activity.id)}/>
         <Button onClick={()=>cencelSelectActivity()} basic color='blue' content='Cencel'/>
     </Button.Group>
    </Card.Content>
  </Card>
    )
}
import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const Events = () => (
  <div className="EventsContainer">
    <Collapsible popout accordion={true}>
      <CollapsibleItem
        className="CardOne" 
        header="Hide and Seek"
        style={{textAlign: 'center'}}
      >
      <div className="CardText">
        <p>Hide and Seek! One of events includes Hide and Seek. Everyone turns off their nameplates and begins to hide. There's no sneaky phasing into or out of objects. No one is allowed to leave the current Housing Area you're playing in. Everyone who is hiding has 3 minutes to hide. Seekers have 15 minutes to find people. Rewards are handed out for the winning individual(s)</p> <br/><br/>
      </div>
      </CollapsibleItem>
      <CollapsibleItem 
        className="CardOne"
        header="Weekly Trivia"
        style={{textAlign: 'center'}}
      >
      <div className="CardText">
        <p>Every Sunday night we hold a trivia event. Each week, a new subject will be given (It will be displayed in FC message) allowing participants to think about it for the coming week. Similar to other events, anyone can play. Once the event has started, the players have to answer a trivia question as quickly as possible. There's typically two trivia events held back-to-back. Each gives different amounts of gil to the winner(s). An individual may not win two 'main' trivia events in a row. </p>
      </div>
      </CollapsibleItem>
      <CollapsibleItem 
        className="CardOne" 
        header="Glamour Contest"
        style={{textAlign: 'center'}}
      >
      <div className="CardText">
        <p>Everyone loves to look good! In this event, you need to bring your best looking glamour to show off. A panel of judges (and more importantly, a crowd) will judge each participants glamour. After everyone has shown off their glamour, the judges will decide the victor and a winner will be announced.</p>
      </div>
      </CollapsibleItem>
      <CollapsibleItem 
        className="CardOne" 
        header="Secret Santa"
        style={{textAlign: 'center'}}
      >
      <div className="CardText">
        <p>Who's been naughty?! Who's been nice!? In this event, similar to traditional Secret Santas, players are given the name of someone and must anonymously find a present for them. The presents will be distrubted on the day assigned by the Event Manager. Typically, players are discourgaed from spending real money for this event.</p>
      </div>
      </CollapsibleItem>
    </Collapsible>
  </div>
);

export default Events;
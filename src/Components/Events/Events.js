import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const hideAndSeek = [`https://i.imgur.com/Z14s1GE.jpg`];

const Events = () => (
  <div className="EventsContainer">
    <Collapsible popout>
      <CollapsibleItem 
        className="CardOne" 
        header="Hide and Seek"
      >
        Hide and Seek! One of events includes Hide and Seek. Everyone turns off their nameplates and begins to hide. There's no sneaky phasing into or out of objects. No one is allowed to leave the current Housing Area you're playing in. Everyone who is hiding has 3 minutes to hide. Seekers have 15 minutes to find people. Rewards are handed out for the winning individual(s) <br/><br/>
        <img 
          style={{
            height: '10rem', 
            width: '10rem'}} 
            src={hideAndSeek} 
            alt="Mysidia FC Events"
          />
      </CollapsibleItem>
      <CollapsibleItem 
        className="CardOne" 
        header="Glamour Contest"
      >
        Everyone likes nice glamour! We will have Glamour Contests with a full panel of judges and an audience. Each participant will be allowed to model their glamour in front of others, and then be judged on their glamour. Rewards will be handed out the winners of the Glamour Contest afterwards.<br/><br/>
      </CollapsibleItem>
      <CollapsibleItem 
        className="CardOne" 
        header="Secret Santa"
      >
        Who's been naughty?! Who's been nice!? Well, in our Secret Santa, we don't have to worry about such things. Everyone involved will get exchange gifts like a traditonal Secret Santa. Except here, we *try* to not spend real life money on presents, but some people do so anyway. If you're unfamilar as to how Secret Santa works, you randomly pull a name from a lottery. You secretly shop for that person, and get them a present. <br/><br/>
      </CollapsibleItem>
    </Collapsible>
  </div>
);

export default Events;
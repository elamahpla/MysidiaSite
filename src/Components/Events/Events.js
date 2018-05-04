import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const hideAndSeek = [`https://i.imgur.com/Z14s1GE.jpg`];

const Events = () => (
  <div className="EventsContainer">
    <Collapsible popout>
      <CollapsibleItem 
        className="CardOne" 
        header="Hide and Seek"
        style={{textAlign: 'center'}}
      >
      <div className="CardText">
        <p>Hide and Seek! One of events includes Hide and Seek. Everyone turns off their nameplates and begins to hide. There's no sneaky phasing into or out of objects. No one is allowed to leave the current Housing Area you're playing in. Everyone who is hiding has 3 minutes to hide. Seekers have 15 minutes to find people. Rewards are handed out for the winning individual(s)</p> <br/><br/>
          <img 
            style={{
              height: '10rem', 
              width: '10rem'}} 
              src={hideAndSeek} 
              alt="Mysidia FC Events"
            />
        </div>
      </CollapsibleItem>
      <CollapsibleItem 
        className="CardOne" 
        header="Glamour Contest"
        style={{textAlign: 'center'}}
      >
      <div className="CardText">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi minus doloremque? Repellendus vero quas neque dolores optio, ducimus non ad accusamus. Obcaecati doloremque placeat, dignissimos error harum eveniet, possimus, ipsum architecto dolorem natus laboriosam nemo consequuntur at debitis porro ad adipisci culpa maxime quod quia ducimus sed. Asperiores amet praesentium porro, unde quis sed odio dignissimos saepe repudiandae, eius qui veritatis ipsa autem cumque itaque dolorem ipsam repellendus, voluptatibus deserunt possimus laudantium sunt. Neque!</p>
      </div>
      </CollapsibleItem>
      <CollapsibleItem 
        className="CardOne" 
        header="Secret Santa"
        style={{textAlign: 'center'}}
      >
      <div className="CardText">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptate labore! Sequi porro culpa ducimus natus consequuntur at rem minus nulla sed, molestias animi corrupti reprehenderit assumenda et, sapiente nemo vero adipisci deleniti quos iste rerum obcaecati accusamus illum. Atque, reiciendis maiores exercitationem iusto voluptatem recusandae debitis alias. A, quas quam? Eius ratione iusto rerum! Aspernatur fugit laudantium dolorem debitis quo pariatur eaque inventore delectus nostrum rem eligendi optio consequatur, tempore, porro dignissimos voluptatibus obcaecati!</p>
      </div>
      </CollapsibleItem>
    </Collapsible>
  </div>
);

export default Events;
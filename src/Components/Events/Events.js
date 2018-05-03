import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const Events = () => (
  <div className="EventsContainer">
    <Collapsible popout>
      <CollapsibleItem className="CardOne" header="Hide and Seek">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo accusamus suscipit non aut ipsam id, magni harum ea sapiente aliquam libero reprehenderit ducimus quasi nostrum adipisci enim, a, mollitia doloribus expedita voluptas? Dolores omnis asperiores accusamus, in ea eaque pariatur necessitatibus doloremque maxime harum nobis ipsa quas non nihil voluptatibus eveniet, laborum illo molestias libero, velit laudantium ut cumque? Corrupti soluta cupiditate dolorem. Nam, perspiciatis aspernatur quo sunt, saepe porro facere modi fugit nulla debitis tenetur, sint placeat dolor consequuntur pariatur autem eveniet quisquam? Unde, rem dignissimos! Voluptate optio assumenda voluptas, quam animi consequatur? Ut dolorum error in sit voluptate deserunt omnis quod placeat accusantium voluptatem, consequuntur ullam aut eveniet delectus unde obcaecati rem vel tempora magnam iure soluta saepe officia praesentium beatae? Laborum nam eum possimus excepturi necessitatibus vero quam veniam, velit error, esse consequuntur at ratione dolorum similique eius totam eligendi provident magnam libero minima vel, ut quaerat nihil enim? Necessitatibus non quas perferendis nostrum, amet veniam dolore adipisci voluptatem dolores nihil. Beatae perferendis nemo distinctio? Illum magni, repudiandae aperiam quisquam possimus sint officia quos, ea sapiente vel aliquid magnam beatae eveniet dolor maxime. Perspiciatis alias fugiat, laboriosam laudantium qui quae quo tempora accusantium non, quasi hic cumque?<br/><br/>
        <img style={{width: '10rem', height: '10rem'}} src="https://i.imgur.com/Z14s1GE.jpg" alt=""/>
      </CollapsibleItem>
      <CollapsibleItem className="CardOne" header="Glamour Contest">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, aliquid?
      </CollapsibleItem>
      <CollapsibleItem className="CardOne" header="Secret Santa">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, laborum.
      </CollapsibleItem>
    </Collapsible>
  </div>
);

export default Events;
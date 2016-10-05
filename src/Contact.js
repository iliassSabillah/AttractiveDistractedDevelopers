import React from 'react';
import data from './data2';
import { CardStack, Card } from 'react-cardstack';

var Contact = React.createClass({
  render: function() {
    return (  
      
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div id="#contact"> <h1>Get in touch with us!</h1> 
          <CardStack
            height={400}
            width={800}
            background='#f8f8f8'
            hoverOffset={25}>

    <Card background='#2980B9'>
        <h2>Iliass </h2>
        <p>Programmer and Director of Skeleton</p>
        <a href="#">LinkedIn</a><br></br>
        <a href="#">Social Media</a><br></br>
        <a href="#">GitHub</a>
        <p>Wake Up Mr. West
Heard 'Em Say
Touch The Sky
Gold Digger
Skit #1
Drive Slow
My Way Home
Crack Music
Roses
Bring Me Down
Addiction</p>
    </Card>

    <Card background='#27AE60'>
       <h2>Lisa</h2>
        <p>Programmer and Our Fearless Project Manager</p>
        <a href="#">LinkedIn</a><br></br>
        <a href="#">Social Media</a><br></br>
        <a href="#">GitHub</a>
        <p>  Good Morning
Champion
Stronger
I Wonder
Good Life
Can't Tell Me Nothing
Barry Bonds
Drunk & Hot Girls
Flashing Lights
Everything I Am
The Glory
Homecoming
Big Brother </p>
 </Card>
        <Card background='#2980B9'>
        <h2>Michael</h2>
        <p>Programmer and Crazy person</p>
        <a href="#">LinkedIn</a> <br></br>
        <a href="#">Social Media</a><br></br>
        <a href="#">GitHub</a>
        <p> Say You Will
Welcome To Heartbreak
Heartless
Amazing
Love Lockdown
Paranoid
RoboCop
Street Lights
Bad News
See You In My Nightmares
Coldest Winter</p>
    </Card>

    <Card background='#27AE60'>
        <h2>Shazia</h2>
        <p>Programmer and Cheif Director of Smiles</p>
        <a href="#">LinkedIn</a><br></br>
        <a href="#">Social Media</a><br></br>
        <a href="#">GitHub</a>
        <p>  I wanna tell the whole world about a friend of mine
This little light of mine and I'm finna let it shine
I'm finna take yall back to them better times
I'm finna talk about my mama if yall don't mind
I was three years old, when you and I moved to the Chi
Late December, harsh winter gave me a cold  </p>
    </Card>
    </CardStack>
</div>
      </div>
    )
  }
}) 

export default Contact;
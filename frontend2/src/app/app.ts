import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwipeDirective } from './core/directives/swipe.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SwipeDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('canciones');

  @ViewChild('card1') card1!: ElementRef;
  @ViewChild('card2') card2!: ElementRef;

  ngOnInit(){
  }

  handleSwipe( cancion : string, dir : string){
    const cardLeft = this.card1.nativeElement;
    const cardRight = this.card2.nativeElement;
    

    if (dir === 'toRight') {
      cardLeft.style.transform = 'translateX(-100%)';
      cardRight.style.transform = 'translateX(-100%)';
      
    } else if (dir === 'toLeft') {
      cardRight.style.transform = 'translateX(100%)';
      cardLeft.style.transform = 'translateX(0)';
    }
  }


  songEnglish= 
`
[Intro] 
D  C  G  D
D  C  G  D

[Primera Parte]

  D
She's got a smile

That it seems to me
   C
Reminds me of childhood memories
      G
Where everything was as fresh
                     D
As the bright blue sky



 D
Now and then

When I see her face
     C
She takes me away to that special place
           G
And if I stare too long
                              D
I'd probably break down and cry



[Estribillo]

A     C                   D
Oh oh oh, sweet child o' mine
A        C                  D
Oh oh oh oh, sweet love of mine

[Solo 1] D  C  G  D

[Segunda Parte]

  D
She's got eyes

Of the bluest skies
   C
As if they thought of rain
   G
I hate to look into those eyes
     D
And see an ounce of pain

     D
Her hair reminds me of a warm safe place
      C
Where as a child I'd hide
      G
And pray for the thunder

And the rain
     D
To quietly pass me by

[Estribillo]

A     C                   D
Oh oh oh, sweet child o' mine
A        C                  D
Oh oh oh oh, sweet love of mine

[Solo 2] D  C  G  D
         D  C  G  D

[Estribillo]

A     C                   D
Oh oh oh, sweet child o' mine
A        C                  D
Oh oh oh oh, sweet love of mine
A        C                   D
Oh oh oh oh, sweet child o' mine
A        C                  D
Uh uh uh uh, sweet love of mine

[Solo 3] Em  C  B7  Am
         Em  C  B7  Am
         Em  C  B7  Am
         Em  C  B7  Am
         Em  G  A  C  D  
         Em  G  A  C  D 
         Em  G  A  C  D  
         Em  G  A  C  D 

[Puente]

  Em
Where do we go?
  G
Where do we go now?
  A             C  D
Where do we go?
  Em
Where do we go?
  G
Where do we go now?
  A                 C  D
Where do we go now?

  Em            G      
Where do we go?
  A                 C  D
Where do we go now?
Em          
Ay, ay, ay, ay
G
Ay, ay, ay, ay
  A                 C  D
Where do we go now?

[Tercera Parte]

  Em            G
Where do we go?
  A                 C  D  
Where do we go now?
  Em            G
Where do we go?
  A                 C  D  
Where do we go now?

  Em            G
Where do we go?
  A                 (frase 1)          
Where do we go now, now, now
                     Em
Now, now, now, now, now?
`

songSpanish = 
`
[Intro] 
D  C  G  D
D  C  G  D

[Primera Parte]

  D
Ella tiene una sonrisa

Que me parece
   C
Me recuerda a memorias de la infancia
      G
Donde todo era tan fresco
                     D
Como el cielo azul brillante



 D
De vez en cuando

Cuando veo su rostro
     C
Ella me lleva a ese lugar especial
           G
Y si me quedo mirando mucho tiempo
                              D
Probablemente me derrumbaría y lloraría



[Estribillo]

A     C                   D
Oh oh oh, dulce niña mía
A        C                  D
Oh oh oh oh, dulce amor mío

[Solo 1] D  C  G  D

[Segunda Parte]

  D
Ella tiene ojos

Del cielo más azul
   C
Como si pensaran en la lluvia
   G
Odio mirar en esos ojos
     D
Y ver una pizca de dolor

     D
Su cabello me recuerda a un lugar cálido y seguro
      C
Donde de niño me escondía
      G
Y rezaba para que el trueno

Y la lluvia
     D
Pasaran silenciosamente junto a mí

[Estribillo]

A     C                   D
Oh oh oh, dulce niña mía
A        C                  D
Oh oh oh oh, dulce amor mío

[Solo 2] D  C  G  D
         D  C  G  D

[Estribillo]

A     C                   D
Oh oh oh, dulce niña mía
A        C                  D
Oh oh oh oh, dulce amor mío
A        C                   D
Oh oh oh oh, dulce niña mía
A        C                  D
Uh uh uh uh, dulce amor mío

[Solo 3] Em  C  B7  Am
         Em  C  B7  Am
         Em  C  B7  Am
         Em  C  B7  Am
         Em  G  A  C  D  
         Em  G  A  C  D 
         Em  G  A  C  D  
         Em  G  A  C  D 

[Puente]

  Em
¿A dónde vamos?
  G
¿A dónde vamos ahora?
  A             C  D
¿A dónde vamos?
  Em
¿A dónde vamos?
  G
¿A dónde vamos ahora?
  A                 C  D
¿A dónde vamos ahora?

  Em            G      
¿A dónde vamos?
  A                 C  D
¿A dónde vamos ahora?
Em          
Ay, ay, ay, ay
G
Ay, ay, ay, ay
  A                 C  D
¿A dónde vamos ahora?

[Tercera Parte]

  Em            G
¿A dónde vamos?
  A                 C  D  
¿A dónde vamos ahora?
  Em            G
¿A dónde vamos?
  A                 C  D  
¿A dónde vamos ahora?

  Em            G
¿A dónde vamos?
  A                 (frase 1)          
¿A dónde vamos ahora, ahora, ahora
                     Em
Ahora, ahora, ahora, ahora, ahora?
`


}

const reviews = [
    {
      id: 1,
      name: "Joanna d'Arv",
      position: "Medival Web Dev",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        description:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      position: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        description:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      position: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        description:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      position: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      description:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  //Select items
  const img=document.querySelector('.photo');
  const author=document.querySelector('.author');
  const position=document.querySelector('.position');
  const description=document.querySelector('.description');

  const prevBtn = document.querySelector(".arrow-previouse")
  const nextBtn = document.querySelector(".arrow-next")
  const rndBtn = document.querySelector(".arrow-random")

  // Set starting item

  let currentItem = 2;

  //load initial item
  window.addEventListener('DOMContentLoaded', function(){
      
    showPerson(currentItem);

  });

  function showPerson(person){
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    position.textContent=item.position;
    description.textContent=item.description;
  }

  nextBtn.addEventListener('click', function(){
    currentItem++
    if (currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem); 
  })

  prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem); 
  })

  rndBtn.addEventListener('click', function(){
   currentItem= Math.floor(Math.random()*reviews.length);

    showPerson(currentItem); 
  })
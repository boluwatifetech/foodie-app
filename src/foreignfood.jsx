import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
const Food=[{
    id:1,
    title:'hamburger',
    picture:'/images/hamburger.jpeg',
    preparation:'Blend the fresh meat with your food processor together with onions and garlic, Turn it into a large bowl and add the egg, seasoned salt and cayenne pepper, Mix it together but dont"t overdo it so that the resulting burger will not turn out hard, Shape it into desired thickness and grill until it is well done and slightly chared on the outside. Serve over your bun with your desired toppins',
    
},
{
    id:2,
    title:'pizza',
    picture:'/images/pizza.jpeg',
    preparation:'Firstly put a pan over medium-low flame and add butter in it, Let it melt. When the butter is melted, Add all purpose flour to it and stir well, until a smooth paste formed.Cook till the mixture turns,bubbling.Meanwhile, grate the meddler cheese ina medium bowl and keep it aside. Now put another pan on medium flame and add the grated cheese in it. stir for a while and gradually add milk into the cheese mixture. stir once and cook until the mixture turns smooth and thick. Now add black pepper and salt to it as per your taste. Mix well all the ingredient and cook again. Switch off the flame once you see that the cheese have melted properly. Cheese sauce is ready to serve. Enjoy with chips or baked vegetables ',
    
},
{
    id:3,
    title:'pancake',
    picture:'/images/pancake.jpeg',
    preparation:'break the eggs into a wide bowl, Add the melted butter and sugar, cream(mix) together using a whist or wooden spatula. Add the minced onions,pepper,salt,nutmeg and the milk whisk thoroughly. Gradually add the flour and keep on whisking the mixture woukd begin to thicken and look lumpy. Add more milk or water if the pancake butter is too thick and continue stirring until the pancake butter is smooth with a runny consistency. Use a blender to get a smoother consistency or simply leave it in a bowl for 10 minutes for the flour  to soak up the liqiud and soften up ',
    
},
{
 id:4,
    title:'sausage',
    picture:'/images/sausage.jpeg',
    preparation:'In a large bowl, Mix venison and pancatta with your hands until blended.Add salt, pepper red, pepper flakes and white wine and Mix. Chil for about 30 minutes form sausage into 4-once parties.Do not over handle the mix as this can affect the texture of the sausage. Heat olive oil in 10-12  minutes. Cast iron skilled. Add sausage patties and cast over low heat, turning frequently, until tight brown on all sides,Cook in batches. Breakfast sausage can use any mixture of spices that you like. Traditionlly,breakfast sausage consists of sage,rosemary,thyme,red pepper flakes,salt and pepper make link sausage with this recipe and save some of the mixture for a few servigs of breakfast sausage as  well ',
    
},
{
 id:5,
    title:'steakmeat',
    picture:'/images/steakmeat.jpeg',
    preparation:'Rub the steak all over with a good lug of olive oil and a good pinch of salt and black pepper.Add the steak to a hot pan then cook for 6 minutes for medium rare, or to your liking, turning every minutes.for more flavour, try one or a combination pf the following .Halve a garlic clove and rub it over the steak.Every time you turn it rub the stick with a knob of butter the sweetness from the butter will make it taste divine. Or create a herb brush by tying woody herbs like thyme or rosemary to the handle of a wooden spoon and brush it over the steak every minutes or so. Once cooked to your liking,rest the steak every minute or so. Once cooked to your liking,rest the steak on a plate that can collect all the lovely juices for 2 minutes. Carve with a nice sharp carving knife then serve with the resting juices drizzed on top. ',
    
},
{
 id:6,
    title:'shawarma',
    picture:'/images/shawarma.jpeg',
    preparation:'(chicken shawarma)  Heat the pan with hlf tbsp olive oil on a high heat. When the pan is hot , place the chicken and flip to cook on all sides evenly.When the chicken is tender cooked,shred it on the pan with a wooden spoon. Cook further for  1 to 2 mins.Set this aside and use the same pan to grill quartered layered onions and deseeded tomatoes.Serve chicken shawarma as a appetizer with yoghurt garlic sauce ',
    
},
{
 id:7,
    title:'hot dog',
    picture:'/images/hotdog.jpeg',
    preparation:'break the eggs into a wide bowl, Add the melted butter and sugar, cream(mix) together using a whist or wooden spatula. Add the minced onions,pepper,salt,nutmeg and the milk whisk thoroughly. Gradually add the flour and keep on whisking the mixture woukd begin to thicken and look lumpy. Add more milk or water if the pancake butter is too thick and continue stirring until the pancake butter is smooth with a runny consistency. Use a blender to get a smoother consistency or simply leave it in a bowl for 10 minutes for the flour  to soak up the liqiud and soften up ',
},
{
 id:8,
    title:'sandwich',
    picture:'/images/sandwich.jpeg',
    preparation:'Mix mayonnaise vegetables and eggs together set aside in another plate mash the sardings well and mix with the batter to help mask the strong smell. Spread the sending mix on one side of the bread and cover with another slice of bread. On the next side, spread the mayannaise mix repeat with other slices until you have stacked all the four slices of bread with these delicous feelings cut your sanwich into your desired shape ',
},
{
 id:9,
    title:'croissant',
    picture:'/images/croissant.jpeg',
    preparation:'croissant dough begins with butter,flower,sugar,salt,yeast and milk, Unlike most yeasted dough that require warm liquid to activate the yeast, you are going to use cold milk. The yeast will work its magic later on. The recipe in the beginning steps of criossant the dough should always be cold. if at any point, the dough becomes too warm. Stop, stop whatever you are doing and place the dough back in the refrigerator for 20 minutes. the mixer will beat the dough for about 5 minutes. Stand by your mixer as it works the dough. This dough is not particularly large but your mixer will still get a workout. We made the dough, now we are going to cover it and let it rest in the refrigerator for 30 minutes   ',
},
{
 id:10,
    title:' roasted chicken',
    picture:'/images/roastedchicken.jpeg',
    preparation:'Start by marinating the chicken pieces in a bowl filled with, Curd,ginger paste,garlic paste,hormaric powder and salt mix well and set aside for some time. Meanwhile, place a deep bottomed pan over medium flame and pour oil in it. once the oil is hot enough, saute garam masala powder along with chopped onions and sliced green chilies in it. This may take 2-3 minutes. Now sprinkle dry femogreek leaves over this mixture and cook for another 5 minutes over a medium flame. After 5 minutes, season it with coriander powder and add marinated chicken pieces cook it on full flame for 10 -12 minutes.Once the chicken appear cooked,Season it with garam masala powder and black pepper powder. Bring the flame low and pour fresh cream along with corinder leaves over the chicken. Cover the pan using a lid and boil for minimum of 5 minutes. After 5 minutes remove the lid and turn off the flame. Your chicken methi malai is now ready transfer it to a serving bowl and serve hot ',
},
]
function Foreignfood(){
     const [searchTerm,setSearchTerm]=useState('')

   useEffect(()=>{
    setSearchTerm('hamburger')
   },[])
    return(
 <div>
 <div className='input-field'>
 <input type='text' placeholder='search for food' onChange={(e)=>setSearchTerm(e.target.value)} />
<button> <FaSearch/></button>
           
             </div>
           <div className='camp-items'>
{
    Food
    .filter((val)=>{
        if(searchTerm==''){
            return val;
        }
        else if(
            val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
            }
        
    })
    .map((val)=>{
        return(
            <div key={val.id} className='food-container'>
            <h2>{val.title}</h2>
            <div  className='main-camp'>
            <div className='main-pics'>

<div className='images-food'>
<img src={val.picture}/>
</div>
</div>
<div className='camp-item'>
<p>{val.preparation}</p>
</div>
            </div>
            </div>
        )
    })
}
           </div>
        </div> 
    )
}
export default Foreignfood;
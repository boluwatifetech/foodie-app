import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
const Foods=[{
    id:1,
    title:'white rice',
    picture:'/images/whiterice.jpeg',
    preparation:'First of all,rinse the rice, Use the right ratio of water, Bring the water to a boil once it is boiling add a big pinch of salt maintain a simmer, Reduce heat too low, Cover the pot with a tight fitting lid and maintain a gentle simmer cook without peeking or storing. Cook until the water is absorbed about 18 minutes,try not to peek until the end of the cooking time so the steam doesn"t escape. Whatever you do dont"t mix the rice while it"s cooking,this will lead to gummy rice let the rice rest covered for 10 minutes during this time, the rice will stem for extra fluffy results, Fluffy the rice with a fork',
    
},
{
    id:2,
    title:'fried rice',
    picture:'/images/friedrice.jpeg',
    preparation:'Boil your rice but do not over boil your before frying it, Other wise, You will end up with suggy fried rice. Fried rice is best enjoyed when the veggies remain crunchy, So do not over cook your veggies. Use mixed veggies which consist of carrot, sweet peas,sweet corn and green beans,However, vegetables like sweet bell peppers can also be used. In order to achieve that nice coveted crisp,you will need to turn up the heat to high during frying process and stir continously as you allow the rice to heat up. Add pieces of beef liver to fried rice , a lot of people like this ,but if you do not want it you are free to leave it out, But surely you will still enjoy the goodness of the fried rice. When making this fried rice it is the best to use chicken stock or turkey stock because of their mild taste, The beef stock should be avoided as it can over power taste of the fried rice',
    
},
{
    id:3,
    title:'jollof rice',
    picture:'/images/jollofrice.jpeg',
    preparation:"It is key to use parboiled rice so that you don't end up with mushy rice in the end. When cooking the tomato stew, You can tell when it is done, because the oil will rise to the top. It will be a deep red color and the bitter taste of the tomatoes has been cooked out. Reserve 1/4 of the tomato mixture and add it at the end, to help prevent the rice from burning, Also it gives the rice that beautiful red color, We all know and love, Cover the top of the pot with plastic wwrap before putting the lid on to help. Keep all the steam in the pot" ,
    
},
{
    id:4,
    title:'indomie',
    picture:'/images/indomie.jpeg',
    preparation:'pieces the indomie ina boil and pour boiled water into it allowing it for about 5 minutes for noodles to get soft, Set your frying pan on the heat, Add sliced tomatoes,onions,fresh pepper and fry for about five minutes as well drain the water from the noodles after 4 minutes and add the follow come spices while still in the bowl, the noodles will be both soft and hot, Break the two eggs into the same bowl containing the noodles and stir together,then transfer to the frying pan. the frying pan contains the fried tomatoes, onion and peppers ,cook and stir for five minutes and you are done ',
    
},
{
    id:5,
    title:'pounded yam',
    picture:'/images/poundedyam.jpeg',
    preparation:'Go ahead and peel off the brown outer layer of the yam, Slice and wash the whole part with lots of clean water, Transfer into a cooking pot and start cooking with just water, Be sure the sliced yam are almost completed submerged in water, Cook for 10 to 15 minutes then check to see if the yam are soft enough for pounding , You can check with a chicken fork, Then once the yams are soft enough for pounding then you are ready for the pounding part, Be sure that the water is not completely dried because you will it while pounding the yam.Pick with a fork and transfer into a mortar, then go ahead and pound with pestle, Pound until the yam is seedless and can easily be molded, You can add water and part until you have a smooth soft pounded yam   ',
    
},
{
    id:6,
    title:'beans',
    picture:'/images/beans.jpeg',
    preparation:'Rinse the beans and place in a deep pot with 7 cups of water, Boil the beans on medium heat until it becomes soft,It could take about 40 minutes, If you are using black eyed peas, It might take a little longe, While the beans are boiling, Blend the tomatoes,pepper and onions and set aside. Once the beans are soften from boiling (do not drain the water ), turn the heat down to low, Then pour in the blended tomatoes into the pot. Allow the beans to cook for an additional 10 minutes with the tomatoes, Then add in the crayfish,bullion, palmoil, stir and cook for another 10 minutes. Season the beans with salt to your taste, Then turn off the heat, And allow to sit for 5 minutes before serving ',
    
},
{
    id:7,
    title:'amala',
    picture:'/images/Amala.jpeg',
    preparation:'Get your yam flour ready and boil your water. Add the yam flour gradully and stir using a wooden spatula until you get the thickness or firmness you want, Stir vigorously to avoid lumps formation and burning. Once you have gotten a smooth,soft and even texture, Add a little amount of water to boil for a minute then stir well and or you can wrap it in nylon till you are ready to eat',
    
},
{
    id:8,
    title:'ogbono soup',
    picture:'/images/ogbono.jpeg',
    preparation:'Add some warm palmoil into a mixing bow followed by the ground ogbono, Mix thoroughly with spoon till a thick paste is formed. Transfer your meat stock to a pot placed on medium heat. The stock is gotten from cooking the meat for the soup. Ad   your onions in pepper blend mix red or yellow scotch paper  bonnets,one bulb of onion, and garlic gloves. Add your crayfish powder and opeyi and salt to taste, Stir and cover pot and allow to simmer for 3-4 minutes. Add the ogbono paste and stir to dissolve completely. Allow to simmer  for few minutes. It become thick.Add saki,kponmo,beef and goat meat to the ogbono soup. Add stock fish, Give it a good stir to combine. Allow to cook for 5-7 minutes ',
    
},
{
    id:9,
    title:'ewedu soup',
    picture:'/images/ewedu.jpeg',
    preparation:'Apply water to fresh ewedu leaves. You will not need water if you buy the frozen pack. Add locust bean, It gives the soup a very rich , deep flavour, However,you may skip this if you are new because it has a pungent smell in its raw form .Also blend it, Add crayfish it gives ewedu its rich taste and smell, Add salt but led it be little and it improve the taste of your ewedu',
    
},
{
    id:10,
    title:'vegetable soup',
    picture:'/images/vegetable.jpeg',
    preparation:'Thinly slice the waterleave and fluted pumpkin(ugu leaves). Wash the ugu leaves before slicing it, slice the water leaves then wash it, allow them to strain seperately using a sieve to remove excess water, clean and wash the roasted fish pound your crayfish peppers. Season the meat and let it cook till it becomes tender, Add the washed roasted fish the boiling meat, let them boil together till the water drives. To the meat and fish on heat add palm oil, The vegetables should be added, the water leaves should come first, After adding all the water leaves allow it to simmer for 2-4 minnutes while you stir occasionally,keep stiring,Add the pointed crayfish and pepper. Ugu leaves should follow at this point(fluted pumpkin) stir 2 tablespoons stir properly so it does not form crumbs ',
    
},
{
    id:11,
    title:'eba',
    picture:'/images/eba.jpeg',
    preparation:'Bring  water to a boil into kettle, Place a small saucepan on medium heat,carefully measure out 1 cup of hot boiling water and pour to the saucepan. start by stiring in 1/3 cup of garri to the hot water with a wooden spatula.If the eba is still soft, sprinkle more garri until desired texture is achived. Mould eba and serve immidiately with soup of choice ',
    
},
{
    id:12,
    title:'fufu',
    picture:'/images/fufu.jpeg',
    preparation:'Add the cassava dough/pulp into a heavy bottom pot break the pulp into smaller pieces with your hands.Add water and mix to combine with your hand until lump free and smooth paste is achieved. The consistency would be like that of thick double cream. Turn on the heat to medium low heat and start stiring vigirously, The fufu will start changing color from white off white. You will have to keep stiring to combine. The fufu will become hard to stir and feel stretchy at some point , You will need to add warm water to the mix as needed, Cover the pan pot with its lid and leave to cook for about 5 to 10 minutes so that the steam can cook fufu thorougly and desired softness is acheived    ',
    
},
{
    id:13,
    title:'porridge',
    picture:'/images/porridge.jpeg',
    preparation:'Peel, cut and rinse the yam, Ensure you rinse the yam more than once until the water is clear and no longer cloudy. The yam should be in medium sized chunks about 2 inches thick. Blend the bell pepper, babanero, tomato, and half onion. put the first yam inside the pot, And add the pepper mix,salt,bullion powder and water cover and let it cook for 10 minutes on medium to high heat. Cover again and let it cook for extra 10 minutes again. You can use a potato masher or wooden spoon. You can smoke fish,dried,boiled, caned or stockfish. You can also add smoked turkey or any other meat prefer. Simmer for an additional 3 to 5 minutes. Stir in the herbs or any other leafy vegetables of your choice. Serve and enjoy while still hot',
    
},
]

function Localfood(){
    const [searchTerm,setSearchTerm]=useState('')

   useEffect(()=>{
    setSearchTerm('white rice')
   },[])
    return(
 <div>
 <div className='input-field'>
 <input type='text' placeholder='search for food' onChange={(e)=>setSearchTerm(e.target.value)} />
<button> <FaSearch/></button>
           
             </div>
           <div className='camp-items'>
{
    Foods
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
export default Localfood
import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
const Snack=[{
    id:1,
    title:'doughnut',
    picture:'/images/doughnut.jpeg',
    preparation:'Do not have the time to wait for the milk and eggs to come temperature? crack the eggs into a small sauce pan along with the milk. Heat very gently over a low heat (stirring constantly) until they reach room temperature. Make sure you put the salt and yeast on opposite sides of the bowl when making the dough , as salt can actually kill yeast. I highly recommend using a dough scrapper for this recipe. It is a very sticky dough making it hard to work with using your hands. Want a better flavour? After the i and a half hour prove place it into the fridge overnight. The longer teh prove,the better the flavour. Allow to sit at room temperature for a while before using as the cold will slow down the next process. Although it is possible to do this without, using a thermometer to get the oil to the right temperature takes out all the guess work',
    
},
{
    id:2,
    title:'chinchin',
    picture:'/images/chinchin.jpeg',
    preparation:'beat eggs and set aside (if using),Mix sugar and milk in a bowl,set aside, In a large bowl, add sugar ,add flavour,baking powder,salt and the nutmeg mix well,Add the mrgering, mix until crumbly.Breal inthe eggs and add the milk sugar mixture into the bowl and mix well until you get a smooth but stiff dough. Place the dough on the floured work surface and leave for a minute.With the help of a rolling pin, roll out the dough flat and cut into any shape of choice. Heat up some oil until very hot and fry the chin chin dough in small batches. Stir consistently until all the chinchin in the in changes from white to golden brown, Transfer the chinchin onto a tiny and leave to cool completely, Then store in an airtight container and enjoy. ',
    
},
{
    id:3,
    title:'puff puff',
    picture:'/images/puffpuff.jpeg',
    preparation:'Both instant yeast or active yeast will work perfectly for this recipe if you are using instant yeast, you can skip profing the yeast. If using active yeast, It is advisable to proof the yeast. comnbine the dry ingredients with the wet ingredients and mix well. The batter needs the proof in a warm place for about an hour. A little more or less or till the batter rises about twice or thrice its original size. Be sure to let your oil get hot before frying the puff puff, If the oil is not hot enough,the resulting puff puff will soak up the oil, which i know you do not want that ',
    
},
{
 id:4,
    title:'cake',
    picture:'/images/cake.jpeg',
    preparation:'to prepare these delicious muffins first preheat the oven to 180 degree celsious then take a muffin pan and spray it with non-sticking spray or you can line up the pan with paper liners. Take a medium bowl and break up the eggs and start whisking the egg and while whisking add in honey and milk once done let it rest. Now take a large bowl, in this add flower,cornmeal,sugar,baking powder and salt and whisk them together after this add milk and egg mixture. And byt adding the melted butter dry all the ingredients, Whisk this mixture until it is blended, Once the tops are set and golden (approximately 20 minutes).Tkae out and slightly cool the muffins once done. Serve warm ',
    
},
{
 id:5,
    title:'buns',
    picture:'/images/bons.jpeg',
    preparation:'Add all the dry ingredients with the butter in a bowl and mix to form crumble, Add egg and water and mix to form a thick stretchy batter, then add wateer to the flour in bits till you achieve the desired consistency. Do not overwork the batter. Plce a shallow pan on medium heat, add vegetable oil and allow to heat up hot (about 3 inches high). Drop little batter into the oil to test if it is hot enough for use if the batter flouts a top. Then it is ready. Carefully drop the batter in the hot oil in batches but do not overcrowd the oil.Reduce the heat and fry the buns till golden brown and well done repeat this process until you have exhausted the whole batter mix ',
    
},
{
 id:6,
    title:'meat pie',
    picture:'/images/meatpie.jpeg',
    preparation:'(chicken shawarma)  Heat the pan with hlf tbsp olive oil on a high heat. When the pan is hot , place the chicken and flip to cook on all sides evenly.When the chicken is tender cooked,shred it on the pan with a wooden spoon. Cook further for  1 to 2 mins.Set this aside and use the same pan to grill quartered layered onions and deseeded tomatoes.Serve chicken shawarma as a appetizer with yoghurt garlic sauce ',
    
},


]
function Snacks(){
     const [searchTerm,setSearchTerm]=useState('')

   useEffect(()=>{
    setSearchTerm('doughnut')
   },[])
    return(
 <div>
 <div className='input-field'>
 <input type='text' placeholder='search for snacks' onChange={(e)=>setSearchTerm(e.target.value)} />
<button> <FaSearch/></button>
           
             </div>
           <div className='camp-items'>
{
    Snack
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
export default Snacks

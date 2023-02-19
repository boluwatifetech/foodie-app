import React from 'react'

function Home(){
    return(
        <div className='display-home'>
        <div className='word-place'>
<h2>here comes <span>feed me</span></h2>
<h4>world best food recipe </h4>
<p><span>Feedme</span> comprises of different kinds of food and delicacy both foreign foods and local foods 
and it makes it possible for   people around the world to search for thier favourite food, And teaches them how to prepare
it within a short period of time with best description
 </p>
 <div className='input-flex'>
    <input type='radio' checked/><p>You will get to know new foods</p>
 </div>
 <div className='input-flex'>
    <input type='radio' checked/><p>It comprises both local and foreign foods</p>
 </div>
 <div className='input-flex'>
    <input type='radio' checked/><p>It makes your favourite foods to be easy to cook</p>
 </div>
 <div className='input-flex'>
    <input type='radio' checked/><p> And you get to see the food you are looking for quickly with ease</p>
 </div>
        </div>
        <div className='images-home'>
<div className='image-container'>

</div>
<div className='casual-circle'></div>
        </div>
</div>
    )
}
export default Home
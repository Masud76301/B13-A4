1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
       
 Answer:
 >getElementByID  - we can get specific access html element by passing specific ID , when  pass ID , no need use ‘#’

 >getElementByClassName - we can access common html element by passing class name , in that case it accesses all elements which are the same class and it return value  HTMLcollection like array but not exactly array . In that case we pass class name and no need to use dot before classname. In that case we can not use ‘forEach()' loop  in HTML collection .

 >querySelector - it is also same , for access html element but it passing anything like ID, Class Name or html tag as a selector.  When the class name passes , it accesses the first element for passing Class Name . It returns only the first html list.  When we pass ID, or class name that time we use # for ID , dot for class name like as css selector.

 >querySelectorAll- it is also same as querySelector , but it access all element of html for passing class name , id or tag , and it returns an HTMLlist , and this list can use forEach() loop . 



2. How do you create and insert a new element into the DOM?
	
Answer:
 

FOR EXAMPLE
// First we get access html element where we insert a new element
	 const  oldElement = document.getElementByID(‘item’);
	
//Second we have to create new element  by using createElement 
     const newElement = document.createElement(‘div’);
	
//Then add some content in this new created element 
	 newElement.innerText = “Hello World”;

//Finally append new created element in existing element where we insert. In that case we   use appendChild 
     oldElement.appendChild(newElement) ;


3. What is Event Bubbling? And how does it work?

Answer: 

>When clicking in any child element of html  that time browser captures the specific part by gradually downward  , it is called Capture Phase.
>When it reach targeted element it called Target Phase
>After target phase it moving upward to its parent element that is  Event Bubbling 
 
      FOR EXAMPLE 
      
      // If we click any button , it bubbles upward  and it runs on its parent element.

      document.getElementById(‘btn’).addaddEventListener(‘click’,function(){
            console.log(‘clicked the child element);	
      })

     //When btn clicked it also clicked the parent element of btn then parent of parent element  …. that’s bubbling.



4. What is Event Delegation in JavaScript? Why is it useful?

Answer: 
Parent element can manage its children element or children element can manage parent element by using eventListener. When clicking on a child element it can access parent element through the bubbling element . 
It is useful because , when we use event delegation that no need other separate listener to each children or parent

EXAMPLE
document.getElementById(‘btn’)
	.addEventListener(‘click’, function(event){
	parentElement  =	event.target.parentNode.parentNode;
		
})


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer 

>preventDefault()
This method prevents the action which is cancelable , that means the default action that belongs to the event will not occur.

Example
If we apply preventDefault()   on a  button , then clicking on the button , button will not work

<button id=”btn”> Download </button> 

// button will not action 
<script>
document.getElementById("btn").addEventListener("click", function(event){
  event.preventDefault()
});
</script> 


>stopPropagation()
When  we use stopPropagation() it stops propagating upward .
It stops at any level from bubbling up to the parent .

EXAMPLE

const parentDiv = document.getElementById('Item-list);
const itemButton = document.getElementById('item-btn');

// Event listener for the parent div
parentDiv.addEventListener('click', function() {
  console.log('Parent Div clicked');
});

// Event listener for the child button
itemButton.addEventListener('click', function(event) {
  // Stop the event from bubbling up to the parent
  event.stopPropagation(); 
  console.log('item Button clicked');
});


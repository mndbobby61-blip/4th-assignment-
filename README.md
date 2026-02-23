1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. ans: getElementById() is selected a single element in id and return null
3.      getElementByClassNme() is selected multiple element in id and return live html collection
4.      querySelector / queryselectorAll is matching first element  or all element

5. 
6. How do you create and insert a new element into the DOM?
7. ans: const div = document.createElement('div');
8.      div.innerText = 'hello wold';
9.      document.body.appendChild(div);

10. 
11. What is Event Bubbling? And how does it work?
12. ans: event bubbling works with in target element then moves to parent element .
13.      when a child element is click then it runs into in it then it goes to his parents

14. 
15. What is Event Delegation in JavaScript? Why is it useful?
16. ans:called event listeners to parent element and detect the child element

17. 
18. What is the difference between preventDefault() and stopPropagation() methods?
19. ans:Stop the browser’s default action and Stop the event bubbling.

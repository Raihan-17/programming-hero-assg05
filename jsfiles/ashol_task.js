document.getElementById('butn-1').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully.')

    const navValue=parseInt(document.getElementById('nav-value').innerText);
    const navValIncrement = navValue + 1;
    document.getElementById('nav-value').innerText = navValIncrement;

    const taskValue=parseInt(document.getElementById('task-value').innerText);
    const taskValdecrement = taskValue - 1;
    document.getElementById('task-value').innerText = taskValdecrement;
    
    if(taskValdecrement === 0){
        alert('Congratulations!! You have completed all the current tasks successfully.')
    }
    const  button = document.getElementById('butn-1');
    button.style.opacity="0.2";
    button.style.pointerEvents="none";

    const timeFormat = new Date().toLocaleString('en-US',{
    hour:'2-digit',minute:'2-digit',second:'2-digit',hour12: true
    });

    const task =document.getElementById('fix_mobile').innerText;
    const history =document.getElementById('histry');
    const addP =document.createElement('p');
     addP.classList.add(
        'p-3','text-center','mt-3','shadow-md'     
     );
    addP.innerText=`You have completed the task ${task} at ${timeFormat}`;
    history.appendChild(addP)
 });

 document.getElementById('butn-2').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully.')

    const navValue=parseInt(document.getElementById('nav-value').innerText);
    const navValIncrement = navValue + 1;
    document.getElementById('nav-value').innerText = navValIncrement;

    const taskValue=parseInt(document.getElementById('task-value').innerText);
    const taskValdecrement = taskValue - 1;
    document.getElementById('task-value').innerText = taskValdecrement;
    
    const  button = document.getElementById('butn-2');
    button.style.opacity="0.2";
    button.style.pointerEvents="none";

    if(taskValdecrement === 0){
        alert('Congratulations!! You have completed all the current tasks successfully.')
    }
    const timeFormat = new Date().toLocaleString('en-US',{
        hour:'2-digit',minute:'2-digit',second:'2-digit',hour12: true
        });
    
        const task =document.getElementById('fix_mobile').innerText;
        const history =document.getElementById('histry');
        const addP =document.createElement('p');
         addP.classList.add(
            'p-3','text-center','mt-3','shadow-md'     
         );
        addP.innerText=`You have completed the task ${task} at ${timeFormat}`;
        history.appendChild(addP)

 })

 document.getElementById('butn-3').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully.')

    const navValue=parseInt(document.getElementById('nav-value').innerText);
    const navValIncrement = navValue + 1;
    document.getElementById('nav-value').innerText = navValIncrement;

    const taskValue=parseInt(document.getElementById('task-value').innerText);
    const taskValdecrement = taskValue - 1;
    document.getElementById('task-value').innerText = taskValdecrement;
    
    const  button = document.getElementById('butn-3');
    button.style.opacity="0.2";
    button.style.pointerEvents="none";

    if(taskValdecrement === 0){
        alert('Congratulations!! You have completed all the current tasks successfully.')
    }
    const timeFormat = new Date().toLocaleString('en-US',{
        hour:'2-digit',minute:'2-digit',second:'2-digit',hour12: true
        });
    
        const task =document.getElementById('fix_mobile').innerText;
        const history =document.getElementById('histry');
        const addP =document.createElement('p');
         addP.classList.add(
            'p-3','text-center','mt-3','shadow-md'     
         );
        addP.innerText=`You have completed the task ${task} at ${timeFormat}`;
        history.appendChild(addP)

 })

 document.getElementById('butn-4').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully.')

    const navValue=parseInt(document.getElementById('nav-value').innerText);
    const navValIncrement = navValue + 1;
    document.getElementById('nav-value').innerText = navValIncrement;

    const taskValue=parseInt(document.getElementById('task-value').innerText);
    const taskValdecrement = taskValue - 1;
    document.getElementById('task-value').innerText = taskValdecrement;
    
    const  button = document.getElementById('butn-4');
    button.style.opacity="0.2";
    button.style.pointerEvents="none";

    if(taskValdecrement === 0){
        alert('Congratulations!! You have completed all the current tasks successfully.')
    }
    const timeFormat = new Date().toLocaleString('en-US',{
        hour:'2-digit',minute:'2-digit',second:'2-digit',hour12: true
        });
    
        const task =document.getElementById('fix_mobile').innerText;
        const history =document.getElementById('histry');
        const addP =document.createElement('p');
         addP.classList.add(
            'p-3','text-center','mt-3','shadow-md'     
         );
        addP.innerText=`You have completed the task ${task} at ${timeFormat}`;
        history.appendChild(addP)

 })

 document.getElementById('butn-5').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully.')

    const navValue=parseInt(document.getElementById('nav-value').innerText);
    const navValIncrement = navValue + 1;
    document.getElementById('nav-value').innerText = navValIncrement;

    const taskValue=parseInt(document.getElementById('task-value').innerText);
    const taskValdecrement = taskValue - 1;
    document.getElementById('task-value').innerText = taskValdecrement;
    
    const  button = document.getElementById('butn-5');
    button.style.opacity="0.2";
    button.style.pointerEvents="none";

    if(taskValdecrement === 0){
        alert('Congratulations!! You have completed all the current tasks successfully.')
    }
    const timeFormat = new Date().toLocaleString('en-US',{
        hour:'2-digit',minute:'2-digit',second:'2-digit',hour12: true
        });
    
        const task =document.getElementById('fix_mobile').innerText;
        const history =document.getElementById('histry');
        const addP =document.createElement('p');
         addP.classList.add(
            'p-3','text-center','mt-3','shadow-md'     
         );
        addP.innerText=`You have completed the task ${task} at ${timeFormat}`;
        history.appendChild(addP)

 })

 document.getElementById('butn-6').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully.')

    const navValue=parseInt(document.getElementById('nav-value').innerText);
    const navValIncrement = navValue + 1;
    document.getElementById('nav-value').innerText = navValIncrement;

    const taskValue=parseInt(document.getElementById('task-value').innerText);
    const taskValdecrement = taskValue - 1;
    document.getElementById('task-value').innerText = taskValdecrement;
    
    const  button = document.getElementById('butn-6');
    button.style.opacity="0.2";
    button.style.pointerEvents="none";

    if( taskValdecrement=== 0){
        alert('Congratulations!! You have completed all the current tasks successfully')
    }
    const timeFormat = new Date().toLocaleString('en-US',{
        hour:'2-digit',minute:'2-digit',second:'2-digit',hour12: true
        });
    
        const task =document.getElementById('fix_mobile').innerText;
        const history =document.getElementById('histry');
        const addP =document.createElement('p');
         addP.classList.add(
            'p-3','text-center','mt-3','shadow-md'     
         );
        addP.innerText=`You have completed the task ${task} at ${timeFormat}`;
        history.appendChild(addP)

 })
const dateTheTarikh = document.getElementById("tarikh");

 function dateUpdate() {
     const presentTarikh = new Date();

     const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat" ];
     const dayOfWeek = daysOfWeek[presentTarikh.getDay()];

     const day =presentTarikh.getDate();
     const month =presentTarikh.toLocaleString("default", { month: "short" }); 
     const year =presentTarikh.getFullYear();

     const tarikhFormat = `
     ${dayOfWeek},<br>
     <span class="text-2xl font-bold">
     ${month} ${day} ${year}
     </span>
     `;
     dateTheTarikh.innerHTML = tarikhFormat;
 }

 window.addEventListener("load", dateUpdate);
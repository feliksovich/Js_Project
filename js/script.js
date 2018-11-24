function myFirstApp(name, age) {
    
  alert("Привет, меня звовут " + name + " и это моя первая программулька!");
    
  function showSkills() {
       let skills = ['Photoshop','Corel','Cisco','Punto Swither']; 

       for (let i = 0; i < skills.length; i++) {
        document.write("Я владею " + skills[i] + "<br/>");
       }  
  }  

  showSkills();

  function checkAge() {
    
      if (age <=18) {
        alert("Досвидос Птенец :)");
      }else{
        alert("Добро Пожаловать Старичок!!!");
      }

  }
  checkAge();

function calcPow(num) {
  console.log(num * num);
}
calcPow(4);
}
myFirstApp("Олег", 42);
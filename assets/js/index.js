      function showData(){
            const date = new Date();
            const hours = date.getHours();

            const m = addZeros(date.getMinutes());
            const s = addZeros(date.getSeconds());
            const h = addZeros(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);  

            const session = hours > 12 ? "PM" : "AM";
            const hora = h + ":" + m + ":" + s + " " + session;
            document.getElementById("relogio").innerText = hora;
            document.getElementById("relogio").textContent = hora;
      }
      function addZeros(text){
            return text.toString().padStart(2, '0');
      };
      setInterval(showData, 1000, addZeros);
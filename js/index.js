      //lembrando que esse projeto pega o horario do pc
      // criando funcoes de hora minuto segundo e
      // session (tarde ou manha)
      function showData(){
            const date = new Date();
            const hours = date.getHours();
            // let h = date.getHours();
            // let m = date.getMinutes();
            // let s = date.getSeconds();
            // let session = "AM";
            //determinando qual aparece PM ou AM
            // if (h === 0){
            //       h = 12;
            // }

            // if (h > 12){
            //       h = h - 12;
            //       session = "PM";
            // }
            //adiciona zero ao horario quando for menor q 10
            // h = (h < 10) ? "0" + h : h;
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
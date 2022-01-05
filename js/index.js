      //lembrando que esse projeto pega o horario do pc
      // criando funcoes de hora minuto segundo e
      // session (tarde ou manha)
      function mostraHorario(){
            const date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let session = "AM";
            //determinando qual aparece PM ou AM
            if (h === 0){
                  h = 12;
            }

            if (h > 12){
                  h = h - 12;
                  session = "PM";
            }
            //adiciona zero ao horario quando for menor q 10
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;

            const hora = h + ":" + m + ":" + s + " " + session;
            document.getElementById("relogio").innerText = hora;
            document.getElementById("relogio").textContent = hora;
            setTimeout(mostraHorario, 1000);
      }
      mostraHorario();


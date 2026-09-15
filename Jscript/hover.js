      const mision = document.getElementById('mision');
      const vision = document.getElementById('vision');
      const valores = document.getElementById('valores');
      const input_mision = document.getElementById('input-mision');
      const input_vision = document.getElementById('input-vision');
      const input_valores = document.getElementById('input-valores');

      function detect(info, input){
        info.addEventListener('mouseenter', () => {
        input.checked = true;
        });
        info.addEventListener('mouseleave', () => {
        input.checked = false;
        });
      }
      detect(mision,input_mision);
      detect(vision,input_vision);
      detect(valores,input_valores);
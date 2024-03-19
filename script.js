function generarQR() {
    var ambiente = document.getElementById('ambiente').value;
    var piso = document.getElementById('piso').value;
    var clinica = document.getElementById('clinica').value;
    
    // Definir los valores correspondientes según el ambiente seleccionado
    var apn, ibi, isi;
    switch (ambiente) {
      case 'dev':
        apn = 'com.auna.int.appinnova';
        ibi = 'pe.com.auna.patientportal.develop';
        isi = '6476938155';
        break;
      case 'prd':
        apn = 'pe.com.auna.patientportal';
        ibi = 'pe.com.mdp.aunaapp';
        isi = '1188108872';
        break;
      case 'qas':
        apn = 'com.auna.test.appinnova';
        ibi = 'pe.com.auna.patientportal.stage';
        isi = '6477191730';
        break;
      case 'uat':
        apn = 'com.auna.uat.appinnova';
        ibi = 'pe.com.auna.patientportal.uat';
        isi = '6477191757';
        break;
      default:
        // Por defecto, usar valores de producción
        apn = 'pe.com.auna.patientportal';
        ibi = 'pe.com.mdp.aunaapp';
        isi = '1188108872';
    }
  
    // Generar la URL completa con los valores proporcionados
    var urlBase = 'https://auna.page.link/?link=https://mi.auna.pe/?piso=' + piso + '%26clinic=' + clinica + '&apn=' + apn + '&ibi=' + ibi + '&isi=' + isi + '&efr=0';
  
    // Generar el código QR
    var qrContainer = document.getElementById('qrCode');
    qrContainer.innerHTML = '';
    var qr = new QRCode(qrContainer, {
      text: urlBase,
      width: 150,
      height: 150
    });
  }
  
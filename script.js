function generarQR() {
    var ambiente = document.getElementById('ambiente').value;
    var piso = document.getElementById('piso').value;
    var clinica = document.getElementById('clinica').value;
    
    var apn, ibi, isi, link;
    switch (ambiente) {
      case 'dev':
        link = 'appinnovauat.page.link';
        web = 'https%3A//dev-mi.auna.pe/';
        apn = 'com.auna.int.appinnova';
        ibi = 'pe.com.auna.patientportal.develop';
        isi = '6476938155';
        break;
      case 'prd':
        link = 'auna.page.link';
        web = 'https%3A//mi.auna.pe/';
        apn = 'pe.com.auna.patientportal';
        ibi = 'pe.com.mdp.aunaapp';
        isi = '1188108872';
        break;
      case 'qas':
        link = 'appinnovauat.page.link';
        web = 'https%3A//stg-mi.auna.pe/';
        apn = 'com.auna.test.appinnova';
        ibi = 'pe.com.auna.patientportal.stage';
        isi = '6477191730';
        break;
      case 'uat':
        link = 'appinnovauat.page.link';
        web = 'https%3A//uat-mi.auna.pe/';
        apn = 'com.auna.uat.appinnova';
        ibi = 'pe.com.auna.patientportal.uat';
        isi = '6477191757';
        break;
      default:
        // Por defecto, usar valores de producción
        link = 'auna.page.link';
        web = 'https%3A//mi.auna.pe/';
        apn = 'pe.com.auna.patientportal';
        ibi = 'pe.com.mdp.aunaapp';
        isi = '1188108872';
    }
  
    var urlBase = 'https://'+link+'/?link='+web+'?piso=' + piso + '%26clinic=' + clinica + '&apn=' + apn + '&ibi=' + ibi + '&isi=' + isi + '&efr=1';
  
    // Generar el código QR
    var qrContainer = document.getElementById('qrCode');
    qrContainer.innerHTML = '';
    var qr = new QRCode(qrContainer, {
      text: urlBase,
      width: 150,
      height: 150,
      correctLevel: QRCode.CorrectLevel.L
    });

    var translate = document.getElementById('translate');
    translate.innerHTML = urlBase;
  }
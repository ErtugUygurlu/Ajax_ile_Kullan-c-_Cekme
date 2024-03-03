function veriGetir() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var veri = JSON.parse(xhr.responseText);
        kullaniciListesiniOlustur(veri.results);
      }
    };
    xhr.open("GET", "https://randomuser.me/api/?results=5", true);
    xhr.send();
  }
  
  function kullaniciListesiniOlustur(kullanicilar) {
    var kullaniciListesi = document.getElementById("kullaniciListesi");
    kullaniciListesi.innerHTML = ""; // Önceki listeyi temizle
  
    kullanicilar.forEach(function(kullanici) {
      var li = document.createElement("li");
      li.innerHTML = `
        <img src="${kullanici.picture.medium}" alt="${kullanici.name.first} ${kullanici.name.last}">
        <div>
          <strong>${kullanici.name.first} ${kullanici.name.last}</strong><br>
          ${kullanici.email}<br>
          ${kullanici.location.city}, ${kullanici.location.country}
        </div>
      `;
      kullaniciListesi.appendChild(li);
    });
  }
  
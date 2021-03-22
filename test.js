
function unlock()
{
    var cryptKey = {
        //  THE SECRET KEY
        secretkey : "AllCash Technologies",
       
        //  ENCRYPT
        encrypt : function (data) {
          var data_encrypt = CryptoJS.AES.encrypt(data, cryptKey.secretkey);
          data_encrypt  = data_encrypt .toString();
          return data_encrypt;
        },
       
        //  DECRYPT
        decrypt : function (decrypt_data) {
          var decrypted = CryptoJS.AES.decrypt(decrypt_data, cryptKey.secretkey);
          decrypted = decrypted.toString(CryptoJS.enc.Utf8);
          return decrypted;
        }
      };
   let input = document.getElementById('input').value;     
if(input !="")
{
  var text_encrypt = cryptKey.encrypt(input);
  document.getElementById("display_encrypt").innerHTML = text_encrypt;

   
  // (C2) DECRYPT text_encrypt TEXT
  var text_decrypt = cryptKey.decrypt(text_encrypt);
  document.getElementById("display_decrypt").innerHTML = text_decrypt;
  document.getElementById("display_error").innerHTML = null;
}
else
{
  
  document.getElementById("display_error").innerHTML = "Please Enter Input Value";
  document.getElementById("display_encrypt").innerHTML = null;
    document.getElementById("display_decrypt").innerHTML = null;
}
      
     
     
}



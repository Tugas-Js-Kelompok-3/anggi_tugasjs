<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2 id="text">Hello World</h2>
    <button type="button" onclick="func()">ON</button>
   

    <h2 id="goodbyeWorld">click</h2>
    <button id="button1" type="button">Tekan</button>
    <script>
        function func() {
            document.getElementById("text").style.color = "red";
        }
       
        const ambil =document.getElementById("goodbyeWorld");
        const tombol =document.getElementById("button1");
        tombol.addEventListener("click",function () {
            ambil.innerHTML = "Hello There"
        })
    </script>
</body>
</html>
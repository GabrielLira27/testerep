function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var carol = document.getElementsByName('carol')        
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                //Criança
                img.setAttribute('src', 'crianmasc.png')
            } else if (idade < 21 ) {
                //Jovem
                img.setAttribute('src','jovemmasc.png')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src','adultomasc.png')
            } else {
                //Idoso
                img.setAttribute('src','idosomasc.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                //Criança
                img.setAttribute('src', 'crianfem.png')
            } else if (idade < 21 ) {
                //Jovem
                img.setAttribute('src','jovemfem.jpg')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src','adultofem.png')
            } else {
                //Idoso
                img.setAttribute('src','idosofem.png')
            }
        } else if (fsex[2].checked) {

            if (idade  != 18 ){
                gênero = 'UMA OBRA PRIMA DO CÉU mas'
                img.setAttribute('src', 'carol.png')
            } else {
                gênero = 'UMA OBRA PRIMA DO CÉU'
                img.setAttribute('src', 'carol.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}
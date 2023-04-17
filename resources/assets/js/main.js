// Seleciona todos os botões de collapse
const btnCollapses = document.querySelectorAll('.btn-collapse')

// Adiciona um listener de evento a cada botão
btnCollapses.forEach(btnCollapse => {
  btnCollapse.addEventListener('click', function () {
    // Seleciona o conteúdo a ser colapsado (o irmão imediatamente posterior ao botão)
    const contentCollapse = this.nextElementSibling

    // Fecha todos os outros conteúdos
    btnCollapses.forEach(otherBtnCollapse => {
      if (otherBtnCollapse !== this) {
        const otherContentCollapse = otherBtnCollapse.nextElementSibling
        otherContentCollapse.style.display = 'none'
        otherBtnCollapse.classList.remove('open')
      }
    })

    // Verifica se o conteúdo está visível
    if (getComputedStyle(contentCollapse).display === 'none') {
      // Se estiver escondido, exibe o conteúdo e adiciona a classe "open" ao botão
      contentCollapse.style.display = 'block'
      this.classList.add('open')
    } else {
      // Caso contrário, esconde o conteúdo e remove a classe "open" do botão
      contentCollapse.style.display = 'none'
      this.classList.remove('open')
    }
  })
})

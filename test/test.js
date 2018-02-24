let majesty = require('majesty')
let StringUtils = require('../index')

function exec (describe, it, beforeEach, afterEach, expect, should, assert) {
  afterEach(function () {
    // Função a ser executada antes de cada teste
  })

  beforeEach(function () {
    // Função a ser executada após cada teste
  })

  describe('Caso de teste 1', function () {
    describe('Caso de teste 1.1', function () {
      it('Executando algum teste', function () {
        expect(true).to.equal(true)
      })
    })
  })

  describe('Testando utilitário StringUtils', function(){

    describe('Teste do método format', function(){

      it('Teste do método format interpolação de array', function () {
        expect(StringUtils.format('Hello {0}', ['World'])).to.equal('Hello World')
      })

      it('Teste do método format interpolação de objeto', function () {
        expect(StringUtils.format('Hello {name}', {name: 'World'})).to.equal('Hello World')
        expect(StringUtils.format('Hello {name}', {name: 'Lucas'})).to.equal('Hello World')
      })

    })

  })
}

let res = majesty.run(exec)

print(res.success.length, ' scenarios executed with success and')
print(res.failure.length, ' scenarios executed with failure.\n')

res.failure.forEach(function (fail) {
  print('[' + fail.scenario + '] =>', fail.execption)
})

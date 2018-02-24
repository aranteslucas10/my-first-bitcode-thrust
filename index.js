exports = {
    /**
     * Função que formata uma string com placeholders de acordo com os valores passados.
     * A interpolação pode ser feita com um array ou objeto.
     * No caso de array, os placeholders assumem o formato {n}, sendo 'n' o índice do array.
     * No caso de objeto, os placeholders assumem o formato {prop}, sendo 'prop' um atributo do objeto.
     *
     * @param String str String com placeholders no formato {\w+}
     * @param Object|Array Objeto ou array com os valores que serão interpolados em str
     * @example format('Hello {0}', ['World'])
     * @example format('Hello {name}', {name: 'World'})
     */
    format: function format (str, values) {
        return str.replace(/\{(\w+)\}/g, function (match, $0) {
            return values[$0] || '';
        });
    }
}
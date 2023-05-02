# imagem-converter-js

Uma package para converter facilmente arquivos de imagem em formatos diferentes usando JavaScript, incluindo suporte para compressão e otimização de tamanho.

## Instalação

Para instalar a imagem-converter-js, execute o seguinte comando no terminal:

```
npm install imagem-converter-js
```

## Uso

Para usar a imagem-converter-js, importe a função `convertImage` em seu arquivo JS:

```javascript
const { convertImage } = require('imagem-converter-js');
```

Em seguida, chame a função `convertImage` e passe como parâmetro o caminho do arquivo de imagem que você deseja converter e o formato de saída desejado:

```javascript
convertImage('/path/to/image.png', 'webp');
```

Certifique-se de que o plugin necessário para a conversão para o formato escolhido esteja instalado e disponível na sua package para que a conversão seja realizada com sucesso.

## Dependências

A imagem-converter-js utiliza os seguintes plugins Imagemin como dependências:

- [imagemin-jpegtran](https://www.npmjs.com/package/imagemin-jpegtran) para conversão para JPEG
- [imagemin-optipng](https://www.npmjs.com/package/imagemin-optipng) para conversão para PNG
- [imagemin-webp](https://www.npmjs.com/package/imagemin-webp) para conversão para WebP

Certifique-se de que essas dependências estejam instaladas antes de usar a imagem-converter-js.

## Contribuindo

Se você quiser contribuir com a imagem-converter-js, sinta-se à vontade para abrir uma issue ou enviar um pull request.

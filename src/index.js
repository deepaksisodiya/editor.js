import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/List';
import SimpleImage from '@editorjs/simple-image';
import JSONFormatter from 'json-formatter-js'

const editor = new EditorJS({
  headerId: 'editorjs',
  tools: {
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header'
      }
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
    image: SimpleImage,
  },
});

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', () => {
  editor.save().then((response) => {
    const formatter = new JSONFormatter(response);
    document.getElementById('json').appendChild(formatter.render());
  })
});

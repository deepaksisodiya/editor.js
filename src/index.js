import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/List';
import SimpleImage from '@editorjs/simple-image';



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

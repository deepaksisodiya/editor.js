import EditorJS from '@editorjs/editorjs';
import JSONFormatter from 'json-formatter-js'
import Header from '@editorjs/header';
import List from '@editorjs/List';
import SimpleImage from '@editorjs/simple-image';
import Link from '@editorjs/link';
import RawTool from '@editorjs/raw';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import InlineCode from '@editorjs/inline-code';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import AttachesTool from '@editorjs/attaches';
import Warning from '@editorjs/warning';
import Personality from '@editorjs/personality';
import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';

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
    linkTool: {
      class: Link,
      config: {
        endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
      }
    },
    raw: {
      class: RawTool,
      placeholder: 'some placeholder'
    },
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        }
      }
    },
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          coub: true,
          codepen: {
            regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
            embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
            html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
            height: 300,
            width: 600,
            id: (groups) => groups.join('/embed/')
          }
        }
      }
    },
    quote: {
      class: Quote,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+M',
    },
    Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },
    table: {
      class: Table,
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    attaches: {
      class: AttachesTool,
      config: {
        endpoint: 'http://localhost:8008/uploadFile'
      }
    },
    warning: {
      class: Warning,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+W',
      config: {
        titlePlaceholder: 'Title',
        messagePlaceholder: 'Message',
      },
    },
    personality: {
      class: Personality,
      config: {
        endpoint: 'http://localhost:8008/uploadFile'  // Your backend file uploader endpoint
      }
    },
    code: CodeTool,
    delimiter: Delimiter,
  },
});

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', () => {
  editor.save().then((response) => {
    const formatter = new JSONFormatter(response);
    document.getElementById('json').append(formatter.render());
  })
});

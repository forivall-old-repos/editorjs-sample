import {BlockTool} from '@editorjs/editorjs';
import {BlockToolConstructable, BlockToolConstructorOptions} from '@editorjs/editorjs/types/tools';

interface MyData {
  foo?: string
}

interface MyConfig {
  dingus?: boolean;
}

interface MyToolConstructorOptions extends Partial<BlockToolConstructorOptions<MyData, MyConfig>> {
  api: BlockToolConstructorOptions['api'];
}

export class MyTool implements BlockTool {
  constructor(config: MyToolConstructorOptions) {
    console.log('constructs', options)
  }

  save(block: HTMLElement) {
    console.log('Method save not implemented.');
  }
  render(): HTMLElement {
    console.log('Method render not implemented.');
    const el = document.createElement('div');
    el.innerText = 'dongus'
    return el;
  }
} 

if (false) {
  const dummy: BlockToolConstructable = MyTool;
}

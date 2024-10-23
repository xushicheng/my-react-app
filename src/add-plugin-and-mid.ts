import { HeluxPluginDevtool } from 'helux-plugin-devtool';
import { addMiddleware, addPlugin} from 'helux';

addPlugin(HeluxPluginDevtool);
addMiddleware((mid) => {
  console.log(mid);
});

// const MyPlugin: IPlugin = {
//   install(pluginCtx) {
//     // 这里输入 '' 后将自动提示事件名
//     pluginCtx.on('', ()=>{ });
//   },
//   name: 'MyPlugin',
// };

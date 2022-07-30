/*
 * @Author: guanhaobin 1643614692@qq.com
 * @Date: 2022-07-30 15:26:46
 * @LastEditors: guanhaobin 1643614692@qq.com
 * @LastEditTime: 2022-07-30 16:52:33
 * @FilePath: \汉得前端培训\app(1)\app\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './App.less';
import Ctx from './store';
import Videocenter from './views/videocenter.jsx';
import { useState } from "react";

function App() {
    const [username, setUserName] = useState('momo.zxy')
    const store = {
        username,
        setUserName
    }
    return (
        <Ctx.Provider value={store}>
            <div className="App">
                <Videocenter />
            </div>
        </Ctx.Provider>
    );
}

export default App;

/*
 * @Author: guanhaobin 1643614692@qq.com
 * @Date: 2022-07-30 15:51:42
 * @LastEditors: guanhaobin 1643614692@qq.com
 * @LastEditTime: 2022-07-30 17:08:56
 * @FilePath: \汉得前端培训\app(1)\app\src\components\banner\banner.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Input } from "antd";
import "./banner.less";

const { Search } = Input;

const Banner = ({ getSearchData }) => (
  <div className={"banner"}>
    <div className={"bannnertitle"}>视频中心</div>
    <div className={"bannnersubtitle"}>
      帮您快速了解汉得产品，助力交付使用全流程
    </div>
    <div className={"searchtitle"}>
      <Search
        placeholder="请搜索类别/视频名称"
        enterButton="搜索"
        size="large"
        onSearch={getSearchData}
      />
    </div>
  </div>
);
export default Banner;

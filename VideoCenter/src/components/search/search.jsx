/*
 * @Author: guanhaobin 1643614692@qq.com
 * @Date: 2022-07-30 15:12:58
 * @LastEditors: guanhaobin 1643614692@qq.com
 * @LastEditTime: 2022-07-30 22:22:40
 * @FilePath: \汉得前端培训\app(1)\app\src\components\search\search.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./search.less";

const Search = ({ data }) => {
  const { imgSrc, instr, num, playCount, time, title, top } = data;
  return (
    <div className={"searchcontent"}>
      <div className={"pic"}>
        <img src={imgSrc} alt="" />
        {top && <div className={"topRank"} />}
        <div className={"mask"}>{time}</div>
        <div className={"bottom"}>
          <h6>{playCount}次播放</h6>
        </div>
      </div>
      <div className={"cont"}>
        <div className={"searchtitle"}>
          <div>{title}</div>
          <i>{num}节</i>
        </div>
        <div className={"tagsGroup"}>
          <div className={"tags"}>Hzero企业版</div>
          <div className={"tags"}>赋能培训</div>
        </div>
        <h5>{instr}</h5>
      </div>
    </div>
  );
};

export default Search;

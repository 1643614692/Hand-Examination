import { useState, useContext, useEffect, useRef } from "react";
import { Pagination, Menu, message } from "antd";
import Ctx from "../store";
import { getList, getSearchList } from "../server/getVideo";
import Video from "../components/video/video";
import Searchs from "../components/search/search";
import Nav from "../components/nav/nav";
import Banner from "../components/banner/banner";
import "./videcenter.less";

function Videocenter() {
  // useContext 状态管理
  const store = useContext(Ctx);

  // 初始化页面加载数据
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]); // 初始化数据
  const [searchData, setSearchData] = useState([]); // 搜索数据
  const [tempData, setTempData] = useState([]); // 临时数据 用于切换分页时 切换数据显示
  const [tempSearchData, setTempSearchData] = useState([]); // 搜索临时数据 用于切换分页时 切换数据显示
  const [openKeys, setOpenKeys] = useState(["sub1"]); // antd menu菜单组件的state
  const [ifSearch, setIfSearch] = useState(false); // 是否点击了搜索按钮 切换显示组件
  const [searchfont, setSearchfont] = useState(""); // 输入搜素框的文字

  const tabsul = useRef(null); // 获取tab栏切换的DOM元素 用于修改样式

  // tabs选项卡切换时改css样式
  const onTabsChange = ({ target }) => {
    Array.from(tabsul.current.children).forEach((item, index) => {
      if (index === 0) return;
      item.style.background = "#fff";
      item.style.color = "#4D4D4D";
    });
    target.style.background = "#fff3e9";
    target.style.color = "#FF8A2B";
  };

  /**
   * @description 分页器切换页数时触发回调
   * @param {Number} page 点击页数
   */

  const onPageChange = (page) => {
    console.log("page", data.slice((page - 1) * 9, page * 9));
    setTempData(data.slice((page - 1) * 9, page * 9));
  };

  /**
   * @description 搜索结果页面分页器切换页数时触发回调
   * @param {Number} page 点击页数
   */
  const onSearchPageChange = (page) => {
    setTempSearchData(searchData.slice((page - 1) * 4, page * 4));
  };

  /**
   * @description 初始化数据
   */
  const getData = async () => {
    const { data } = await getList();
    setData(data);
    // 默认页面显示9条 截取9条数据显示
    setTempData(data.slice(0, 9));
  };

  /**
   * @description 获取搜索数据
   * @param {String} value 搜索时输入的内容
   */

  const getSearchData = async (value) => {
    if (!value) return message.warn("请输入搜索内容", 1);
    setSearchfont(value);
    setIfSearch(true);
    const { data } = await getSearchList();
    setSearchData(data);
    // 搜素页面默认显示4条 截取4条数据
    setTempSearchData(data.slice(0, 4));
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const menu = [
    "全部产品",
    "飞搭Feida",
    "汉得协同制造软件",
    "汉得智能合同管理软件",
    "虹珊瑚（Corallium）",
    "汉得运输管理软件",
    "汉得智慧财务套件软件",
    "汉得运输管理软件",
    "汉得清分结算软件",
    "海马汇HIPPIUS",
  ];

  // map遍历生成antd menu 组件菜单选项
  const items = menu.map((item, index) => {
    return getItem(item, `sub${index + 1}`, null);
  });

  const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

  // antd menu点击菜单栏切换时触发回调
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const tabs = [
    "全部分类",
    "开放平台",
    "项目管理",
    "开发者",
    "猪齿鱼",
    "海马汇",
  ];

  return (
    <div className="Layout">
      {<Nav username={store.username} />}
      {<Banner getSearchData={getSearchData} />}
      <div className={"main"}>
        {!ifSearch ? (
          <div className={"default"}>
            <div className={"asidenav"}>
              <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                defaultSelectedKeys={"sub1"}
                style={{
                  width: 220,
                }}
                items={items}
              />
            </div>
            <div className={"content"}>
              <div className={"tabs"} ref={tabsul}>
                <div className={"firsttab"}>视频分类</div>
                {tabs.map((item, index) => (
                  <div
                    key={index}
                    onClick={(e) => onTabsChange(e)}
                    className={`tab${index}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className={"video"}>
                {tempData.map((item, index) => (
                  <Video data={item} key={index} />
                ))}
              </div>
              <Pagination
                defaultCurrent={1}
                total={parseInt((data.length * 10) / 9)}
                onChange={onPageChange}
              />
            </div>
          </div>
        ) : (
          <div className={"searchresult"}>
            <div className={"searchcount"}>
              共找到 <i>{searchData.length}</i> 个“<i>{searchfont}</i>
              ”相关视频
            </div>

            {tempSearchData.map((item, index) => (
              <Searchs data={item} key={index} />
            ))}
            <Pagination
              defaultCurrent={1}
              total={parseInt((searchData.length * 10) / 4)}
              onChange={onSearchPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Videocenter;

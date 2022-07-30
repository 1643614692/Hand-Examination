import './nav.less'

const Nav = ({username}) => (
    <div className={'nav'}>
        <div className={'title'}>
            <div className={'logo'} />
            <div className={'menu'}>
                <ul>
                    <li><a href="http://" className={'firstnav'}>应用市场</a></li>
                    <li><a href="http://">开发者</a></li>
                    <li><a href="http://">社区与合作伙伴</a></li>
                    <li><a href="http://">支持与服务</a></li>
                    <li><a href="http://">运营与管理</a></li>
                </ul>
            </div>
        </div>
        <div className={'user'}>
            <div className={'search'} />
            <div className={'note'} />
            <div className={'control'}>控制台</div>
            <div className={'headPortrait'} />
            <div className={'username'}>{username}</div>
        </div>
    </div>
)
export default Nav

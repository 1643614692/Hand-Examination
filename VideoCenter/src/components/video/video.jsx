import './video.less'

const Video = ({data}) => {
    const {imgSrc, instr, num, playCount, time, title, top} = data
    return (
        <div className={'videocontent'}>
            <div className={'pic'}>
                <img src={imgSrc} alt=""/>
                {top && <div className={'topRank'} />}
                <div className={'mask'}>{time}</div>
            </div>
            <div className={'cont'}>
                <h4>{title}</h4>
                <h5>{instr}</h5>
                <div className={'bottom'}><h6><em><b /></em>{playCount}次播放</h6><i>{num}节</i></div>
            </div>
        </div>
    )
}

export default Video

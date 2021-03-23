
import ReactTooltip from 'react-tooltip';
const Topbar = ({ onToggle, isHide }) => {

    return (
        <div className="topbar">
            <div className={isHide ? "sidebarhide" : "sidebarhide rotate180deg"} onClick={() => onToggle()} data-tip="Expand">
                <a href="."><i className="fa fa-caret-right"></i>
                </a>
            </div>
            <ReactTooltip place="bottom" effect="solid" />
          
        </div>
    )
}

export default Topbar

import {useHistory} from 'react-router-dom'
import ReactTooltip from 'react-tooltip';
const Topbar = ({ onToggle, isHide }) => {

var changePage=new useHistory();
    return (
        <div className="topbar">
            <div className={isHide ? "sidebarhide" : "sidebarhide rotate180deg"} onClick={() => onToggle()} data-tip="Expand">
                <a><i className="fa fa-caret-right"></i>
                </a>
            </div>
            <ReactTooltip place="bottom" effect="solid" />
          
        </div>
    )
}

export default Topbar

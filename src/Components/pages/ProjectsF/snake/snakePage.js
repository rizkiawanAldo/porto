import React from 'react'
import SnakeApp from './snake'
import ReactTooltip from 'react-tooltip'
import { useHistory } from 'react-router-dom'

const snakePage = () => {
    const changePage = new useHistory();
    return (
        <div className="pages">
            <div className="backbutton" data-tip="Back" onClick={() => changePage.goBack()}>
                <span><i className="fa fa-caret-left"></i></span>Back
                </div>
            <div className="snekPage">
                <ReactTooltip place="bottom" effect="solid" />
                <SnakeApp />
            </div>
        </div>
    )
}

export default snakePage

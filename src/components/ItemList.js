import React from 'react';
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {editGradient} from '../actions/actions'
import {Link} from 'react-router-dom'
import '../app.css';


function ItemList(state) {
    const history = useHistory();


    return (
        <div>
            <Link to='/new'>Create</Link>
            {state.gradientsList.map((item, index) =>
                <li className='item-list' key={item.id} onClick={() => {
                    state.editGradient(index);
                    history.push(`/edit/${item.id}`)
                }}>
                    <span className='first-value'>{item.first}</span>
                    <span className='second-value'>{item.second}</span>
                    <div style={{
                        width: '180px',
                        height: '60px',
                        border: '1px solid blue',
                        background: `linear-gradient(45deg, ${item.first}, ${item.second})`
                    }}>
                    </div>
                </li>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {gradientsList: state.gradientsList}
};

const mapDispatchToProps = {
    editGradient
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {addGradient} from '../actions/actions';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../app.css';

function InputNew(props) {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [newGradient, setNewGradient] = useState();

    const history = useHistory();
    const regexp = /^((0x){0,1}|#{0,1})([0-9A-F]{8}|[0-9A-F]{6})$/ig;

    const submitNewGradient = (e) => {
        e.preventDefault();
        if (firstValue.match(regexp) && secondValue.match(regexp)) {
            setNewGradient({first: firstValue, second: secondValue, id: Date.now()})
        } else {
            console.log('incorrect value')
        }
    };

    const handleClickConfirm = (e) => {
        props.confirmEdit();
    };

    const handleClickCancel = (e) => {
        props.cancelEdit();
    };

    useEffect(() => {
        if (newGradient !== undefined) {
            props.addGradient(newGradient);
            history.push('/')
        }
    }, [newGradient]);

    return (
        <div>
            <Link to='/'>Home</Link>
            <form>
                <input className="input" type='text' value={firstValue}
                       onChange={(e) => setFirstValue(e.target.value)}/>
                <input className="input" type='text' value={secondValue}
                       onChange={(e) => setSecondValue(e.target.value)}/>
                <button className="input-button" onClick={submitNewGradient}>Подтвердить</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addGradient
};

const mapStateToProps = props => {
    return {gradientToEdit: props.gradientsList[props.gradientEdit], gradientIndexEdit: props.gradientEdit}
};

export default connect(mapStateToProps, mapDispatchToProps)(InputNew);


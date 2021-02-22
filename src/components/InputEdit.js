import React, {useState} from 'react';
import {confirmEdit} from '../actions/actions';
import {cancelEdit} from '../actions/actions';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import '../app.css';


function InputEdit(props) {
    const [editGradient, setEditGradient] = useState(props.gradientToEdit.find(item => {
        if (item.id == props.match.params.id) {
            return item
        }
    }));
    const [firstValue, setFirstValue] = useState(editGradient.first);
    const [secondValue, setSecondValue] = useState(editGradient.second);

    const history = useHistory();
    const regexp = /^((0x){0,1}|#{0,1})([0-9A-F]{8}|[0-9A-F]{6})$/ig;

    const handleClickConfirm = (e) => {
        e.preventDefault();
        if (firstValue.match(regexp) && secondValue.match(regexp)) {
            props.confirmEdit({
                newEditedGradient: {first: firstValue, second: secondValue, id: Date.now()},
                gradientIndexEdit: props.gradientIndexEdit
            });
            history.push('/');
        } else {
            console.log('nono')
        }

    };

    const handleClickCancel = (e) => {
        props.cancelEdit();
        history.push('/');
    };

    return (
        <div className="input-wrapper">
            <form>
                <input className="input" type='text' value={firstValue}
                       onChange={(e) => setFirstValue(e.target.value)}/>
                <input className="input" type='text' value={secondValue}
                       onChange={(e) => setSecondValue(e.target.value)}/>
                <button className="input-button" onClick={handleClickConfirm}>Подтвердить</button>
                <button className="input-button" onClick={handleClickCancel}>отменить</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    confirmEdit, cancelEdit
};

const mapStateToProps = props => {
    return {gradientToEdit: props.gradientsList, gradientIndexEdit: props.gradientEdit}
};

export default connect(mapStateToProps, mapDispatchToProps)(InputEdit);

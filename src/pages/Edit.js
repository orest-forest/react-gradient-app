import React from 'react';
import {connect} from 'react-redux'
import {useState} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {confirmEdit} from '../actions/actions';
import {cancelEdit} from '../actions/actions';
import InputEdit from '../components/InputEdit'


export default function Edit(props) {

    const handleClickConfirm = (e) => {
        props.confirmEdit();
    };

    const handleClickCancel = (e) => {
        props.cancelEdit();
    };

    return (
        <div>
            <InputEdit/>
        </div>
    )
}

// const mapStateToProps = props => {
//     return {gradientToEdit: props.gradientsList[props.gradientEdit], gradientIndexEdit: props.gradientEdit}
// };
//
// const MapDispatchToProps = {
//     confirmEdit, cancelEdit
// };
//
// export default connect(mapStateToProps, MapDispatchToProps)(Edit)

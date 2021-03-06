import React from 'react';
import PropTypes from 'prop-types';
import ContentCreate from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import { linkToRecord } from 'ra-core';

import Button from './Button';

// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();

const EditButton = ({
    basePath = '',
    label = 'ra.action.edit',
    record = {},
    icon = <ContentCreate />,
    ...rest
}) => (
    <Button
        component={Link}
        to={linkToRecord(basePath, record.id)}
        label={label}
        onClick={stopPropagation}
        {...rest}
    >
        {icon}
    </Button>
);

EditButton.propTypes = {
    basePath: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.object,
    label: PropTypes.string,
    record: PropTypes.object,
    icon: PropTypes.element,
};

export default EditButton;

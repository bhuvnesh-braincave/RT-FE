
import CheckboxTree from 'react-checkbox-tree';
import { useState } from 'react';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

export default function TreeCheckbox({check,setCheck,data}) {

    const [checked, setChecked] = useState(check);
    const [expanded, setExpanded] = useState([]);


    
    return(
        <CheckboxTree 
        nodes={data}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => {setChecked(checked);setCheck(checked)}}
        onExpand={(expanded) => setExpanded(expanded)}
        icons={{
            check:<i className='dripicons-checkmark '></i>,
            uncheck:<i className='bx bx-rectangle '></i>,
            halfCheck:<i className='fas fa-dice-one'></i>,
            expandClose:<i className='dripicons-chevron-right '></i>,
            expandOpen:<i className='dripicons-chevron-down '></i>,
            expandAll:<i className='bx bx-chevron-right '></i>,
            collapseAll:<i className='bx bx-chevron-right '></i>,
            parentClose:null,
            parentOpen:null,
            leaf:null
        }}
        />
    )
};

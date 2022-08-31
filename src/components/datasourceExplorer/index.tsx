
import React from 'react';


import Datasource from './datasource';
import Attributes from './attributes';

type Props = {

}

const View: React.FC<Props> = ({}: Props) => {

    return (
        <div>
            Data Source Explorer



            <Datasource ></Datasource>
            <Attributes></Attributes>
        </div>
    )
}

export default  View;
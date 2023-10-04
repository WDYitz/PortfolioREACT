/* eslint-disable react/prop-types */

import { BiCodeAlt } from 'react-icons/bi';
import '../CardRepos/cardRepos.css';

export function CardRepos(props) {

    return (
        <div className="CardRepos">
            <span className='arrowDown'>
                <h3>{props.title}</h3>
                <BiCodeAlt fontSize="1.8em" color='#ce4e7d' />
            </span>
            <div className={`modalProj`}>
                <p>{props.details}</p>
                <a href={props.url} target='blank'>Acessar</a>
            </div>
        </div>
    )
}
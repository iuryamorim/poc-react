import { isEmpty } from 'lodash'
import { useNavigate } from 'react-router-dom'

import { ILinks } from './Types'
import { mapLinks, getReponseLinks } from './utils'

export const Links = (links: ILinks | undefined) => {
    const navigate = useNavigate()

    const _links = links ? mapLinks(getReponseLinks(links)) : null
    
    return (
        <ul>
            { _links && !isEmpty(_links) && (
                _links.map((link: string) => <li onClick={() => navigate(link)} >{link}</li>)
            )}
        </ul>
    )
}
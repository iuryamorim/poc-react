import { useState, useEffect } from 'react'
import axios from 'axios';
import { isEmpty } from 'lodash';

import { Menu } from './Menu'
import { IEmbeddedReponse } from './Types'
import { Links } from './Links'

const getHomeData = (setState: any) =>
    axios
        .get<IEmbeddedReponse>("http://localhost:8080/devices")
        .then((response) => setState(response.data))


export const HomePage = () => {
    const [homeData, setHomeData] = useState<IEmbeddedReponse>({})

    useEffect(() => { if (isEmpty(homeData)) getHomeData(setHomeData) }, [homeData]);

    const { _links } = homeData
    
    return (
        <>
            <Menu />
            <h1>HOME</h1>
            <Links {..._links} />
        </>
    )
}
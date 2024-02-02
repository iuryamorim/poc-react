
import { useState, useEffect } from 'react'
import axios from 'axios';
import { isEmpty } from 'lodash';

import { Menu } from './Menu'
import { IDevice, IEmbeddedReponse } from './Types'
import { Links } from './Links'

const getDevices = (setState: any) => {
    axios
        .get<IEmbeddedReponse>("http://localhost:8080/devices")
        .then(
            (response) => {
                setState(response.data)
            }
        )
}

const Device = (device: IDevice | undefined) => {
    if (!device) return null
    return (
      <>
        <p>{device.name}</p>
        <Links {...device._links} />
      </>
    )
}

export const DevicesPage = () => {
    const [devices, setDevices] = useState<IEmbeddedReponse>({})

    useEffect(() => {
        if (isEmpty(devices)) getDevices(setDevices)
    }, [devices]);

    const devicesList = devices?._embedded?.devices || []

    const { _links } = devices

    return (
      <>
        <Menu />
        <h1>DEVICES</h1>
        {
            !isEmpty(devicesList) && devicesList.map((device: IDevice) => <Device {...device}></Device>)
        }
        <Links {..._links} />
      </>
    )
}
  
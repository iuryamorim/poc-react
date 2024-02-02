
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { isEmpty } from 'lodash';

import { Menu } from './Menu'
import { IDeviceReponse } from './Types'
import { Links } from './Links'

export const Device = (device: IDeviceReponse | undefined) => {
    if (!device) return null
    return (
      <>
        <p>{device.name}</p>
      </>
    )
}

const getDevice = (deviceName: string | undefined, setState: any) => {
    if (deviceName) {
        axios
        .get<IDeviceReponse>(`http://localhost:8080/devices/${deviceName}`)
        .then(
            (response) => {
                setState(response.data)
            }
        )
    }
}

export const DevicePage = () => {
    const { name: deviceName } = useParams();
    const [device, setDevice] = useState<IDeviceReponse>({})

    useEffect(() => {
        if (isEmpty(device)) getDevice(deviceName, setDevice)
    }, [device]);

    if (!deviceName) return null

    const { _links } = device

    return (
      <>
        <Menu />
        <h1>DEVICE</h1>

        {
            !isEmpty(device) && <Device {...device} />
        }
        <Links {..._links} />
      </>
    )
}
export interface IDevice {
    name: string,
    _links?: ILinks
}

export interface IEmbedded {
    devices: IDevice[]
}

export interface ILinks {
    self?: {
        href: string
    },
    collection?: {
        href: string
    }
}

export interface IEmbeddedReponse {
    _embedded?: IEmbedded,
    _links?: ILinks
}

export interface IDeviceReponse  {
    name?: string,
    _links?: ILinks
}

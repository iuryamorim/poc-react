import { ILinks } from './Types'

const host = 'http://localhost:8080'

export const getReponseLinks = (links: ILinks) => 
    Object.keys(links)
        .map((key: string) => links[key]?.href)

export const mapLinks = (links: string[]) => links.map(link => link.replace(host, ""))

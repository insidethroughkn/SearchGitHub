import Owner from "./Owner"

export default interface Repository{
    name: string,
    full_name: string,
    url: string,
    owner: Owner
}
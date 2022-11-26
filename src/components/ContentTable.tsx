import React from 'react'
import AbstractResponse from '../models/AbstractResponse'
import Repository from '../models/Repository' 

interface Props{
    columnHeaders: string[],
    data: AbstractResponse<Repository>
}

const ContentTable :React.FC<Props> = ({columnHeaders, data}) => {

  return (
    <table cellSpacing={0}>
        <thead>
        <tr>{columnHeaders.map((header, i) => <th key={i}>{header}</th>)}</tr>
        </thead>
        <tbody>
            {
                data.items.map((repo, i) => {
                    let columns : string[] = [repo.name, repo.full_name, repo.url, repo.owner.login];
                    return (
                        <tr key={i}>
                            { columns.map((detailItem, colIndex) => <td className='t-cell' key={colIndex}>{detailItem}</td>) }
                        </tr>)
                })
            }
        </tbody>
    </table>
  )
}

export default ContentTable
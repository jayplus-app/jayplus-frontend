'use client'

import ServiceType from 'lib/interfaces/ServiceType'
import VehicleType from 'lib/interfaces/VehicleType'

export default function TypeSelection({
  name,
  typeList,
  selectedTypeID,
  onSelectType,
}: {
  name: string
  typeList: VehicleType[] | ServiceType[]
  selectedTypeID: number
  onSelectType: (id: number) => void
}) {
  return (
    <div>
      {typeList.map(type => (
        <label key={type.id} onClick={() => onSelectType(type.id)}>
          <input
            type='radio'
            name={name}
            value={type.id}
            checked={selectedTypeID === type.id}
            readOnly
          />
          {type.name}
        </label>
      ))}
    </div>
  )
}

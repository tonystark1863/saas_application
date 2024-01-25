import React from 'react'
import { plans } from '../Home/plans'
import Card from './Card2'

const EditPlans = () => {
  return (
    <div>
      <div>
        {
          plans.map((item) => {
            return (
              <div>
                  <Card key={item.id} data={item}/>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default EditPlans
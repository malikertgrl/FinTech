import { Image} from 'react-native'
import React from 'react'
import PaymentRow from './PaymentRow'
import Card from './Card'

const Payment = () => {
    return (
        <Card>
            <PaymentRow
                uri={Image.resolveAssetSource(require('../assets/svgs/payment.svg')).uri}
                total='100.00 TL'
                type= 'Ödeme'
                number={1}
            />
            <PaymentRow
               uri={Image.resolveAssetSource(require('../assets/svgs/cancel.svg')).uri}
                total='0.00 TL'
                type= 'İptal/İade'
                number={0}
                 />
            <PaymentRow
             uri={Image.resolveAssetSource(require('../assets/svgs/total.svg')).uri}
                total='100.00 TL' 
                type= 'Toplam'
                number={1}
                />
        </Card>
    )
}

export default Payment


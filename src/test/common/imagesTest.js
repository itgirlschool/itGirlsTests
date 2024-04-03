import test_6_4 from '../assets/images/test_6/4.png'
import test_6_5 from '../assets/images/test_6/5.png'
import test_6_7 from '../assets/images/test_6/7.png'

import test_7_1 from '../assets/images/test_7/1.png'
import test_7_4 from '../assets/images/test_7/4.png'

import test_8_4 from '../assets/images/test_8/4.png'
import test_8_10 from '../assets/images/test_8/10.png'

import test_9_3 from '../assets/images/test_9/3.png'

import week_11_3 from '../assets/images/test_11/3.png'
import week_11_5 from '../assets/images/test_11/5.png'
import week_11_7 from '../assets/images/test_11/7.png'

import week_17_4 from '../assets/images/test_17/4.png'
import week_17_7 from '../assets/images/test_17/7.png'
import week_17_8 from '../assets/images/test_17/8.png'

import week_20_5 from '../assets/images/test_20/5.png'

import week_22_6 from '../assets/images/test_22/6.png'

import week_24_2 from '../assets/images/test_24/2.png'
import week_24_5 from '../assets/images/test_24/5.png'

import week_25_1 from '../assets/images/test_25/1.png'
import week_25_3 from '../assets/images/test_25/3.png'


import week_26_1 from '../assets/images/test_26/1.png'
import week_26_2 from '../assets/images/test_26/2.png'
import week_26_4 from '../assets/images/test_26/4.png'

import week_27_1 from '../assets/images/test_27/1.png'
import week_27_4 from '../assets/images/test_27/4.png'

import week_28_3 from '../assets/images/test_28/3.png'

const testObjImg = {
    week_6:[test_6_4,test_6_5,test_6_7],
    week_7:[test_7_1,test_7_4],
    week_8:[test_8_4,test_8_10],
    week_9:[test_9_3],
    week_11:[week_11_3,week_11_5,week_11_7],
    week_17:[week_17_4,week_17_7,week_17_8],
    week_20:[week_20_5],
    week_22:[week_22_6],
    week_24:[week_24_2,week_24_5],
    week_25:[week_25_1,week_25_3],
    week_26:[week_26_1,week_26_2,week_26_4],
    week_27:[week_27_1,week_27_4],
    week_28:['',week_28_3]
}


export default function getImgTest(numberWeek,indexImg){
    return testObjImg[numberWeek][indexImg]
}
